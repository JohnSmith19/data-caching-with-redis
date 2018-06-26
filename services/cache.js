const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function() {
  console.log("Im about to run a query");

  console.log(this.getQuery());
  console.log(this.mongooseCollection.name);

  return exec.apply(this, arguments);
};
