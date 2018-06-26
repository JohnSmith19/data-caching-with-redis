# AdvancedNodeStarter

Starting project for a course on Advanced Node @ Udemy

## Project Setup

## Redis

- [About Redis](https://redis.io/)
- [redis - node.js redis client](https://www.npmjs.com/package/redis)

### Install Redis on Ubuntu

```bash
$ sudo apt install redis
$ redis-server -v
Redis server v=4.0.9 sha=00000000:0 malloc=jemalloc-3.6.0 bits=64 build=1bc80a08306a3efd
$ redis-cli ping
PONG
```

### Redis Getting and Setting Basic Values

```js
var redis = require("redis"),
  client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function(err) {
  console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function(err, replies) {
  console.log(replies.length + " replies:");
  replies.forEach(function(reply, i) {
    console.log("    " + i + ": " + reply);
  });
  client.quit();
});
```

## Promisifying a Function

## Caching in Action
