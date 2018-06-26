const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");

const redisUrl = "redis://localhost:6379";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function() {
  console.log("Im about to run a query");

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  // See if we have a value of 'key' in redis
  const cacheValue = await client.get(key);

  // If we do, return that
  if (cacheValue) {
    console.log(cacheValue);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);
  console.log(result);
};
