# Data Caching with Redis

This project was bootstrapped with [AdvancedNodeStarter](https://github.com/StephenGrider/AdvancedNodeStarter)

Starting project for a course on Advanced Node @ Udemy

### Redis

- [About Redis](https://redis.io/)
- [redis - node.js redis client](https://www.npmjs.com/package/redis)

#### Install Redis on Ubuntu

```bash
$ sudo apt install redis
$ redis-server -v
Redis server v=4.0.9 sha=00000000:0 malloc=jemalloc-3.6.0 bits=64 build=1bc80a08306a3efd
$ redis-cli ping
PONG
```

#### Getting and Setting Basic Values

```js
const redis = require("redis");
const redisUrl = "redis://localhost:6379";
const client = redis.createClient(redisUrl);
client.set("hi", "there");
client.get("hi", (err, value) => console.log(value)); // => 'there'

client.get("hi", console.log); // => null 'there'
```

#### Redis Hashes

```js
// data structure
const redisValues = {
    spanish: {
        red: 'rojo',
        orange: 'noranja'
        blue: 'azul'
    },
    german: {
        red: rot,
        orange: 'orange',
        blue: 'blau'
    }
};

// hset, hget
const redis = require("redis");
const redisUrl = "redis://localhost:6379";
const client = redis.createClient(redisUrl);
client.hset('german', 'red', 'rot');
client.hget('german', 'red', console.log); // => null 'rot'
client.hset('german', 'blue', 'blau');
client.hget('german', 'blue', console.log); // => null 'blau'
```

#### JSON Stringify

```js
clinet.set("colors", { red: "rojo" });
clinet.get("colors", console.log); // => null, '[object Object]'

// stringfy
client.set("colors", JSON.stringify({ red: "rojo" }));
client.get("colors", console.log); // => null, '{"red" : "rojo"}'
client.get("colors", (err, val) => console.log(JSON.parse(val))); // => { red: 'rojo' }
```

#### Automatic Expiration

```js
client.set("color", "red", "EX", 5000 /*number of ms*/);
// after 5s
client.get("color", console.log); // => null null
```

### [Project Setup](https://github.com/JohnSmith19/data-caching-with-redis/commit/ec1fc246cb4a200f6fbb3fb4c16906a795c4ac63)

### [Promisifying a Function](https://github.com/JohnSmith19/data-caching-with-redis/commit/6719fd842421f5eefe80f12f5fc6de63ed327a01)

### [Caching in Action](https://github.com/JohnSmith19/data-caching-with-redis/commit/bd6c43dff49d3708ce5323184f5dd4591db681d5#diff-853bab5e1a5197366bfd8d750c69e150)

### [Patching Mongoose's Exec](https://github.com/JohnSmith19/data-caching-with-redis/commit/662d050ed3a5cd0915ecd6c70cee9e94dd533fc4#diff-28fc543f349200516a8ad8a17ffcab9e)

### [Restoring Blog Routes Handler](https://github.com/JohnSmith19/data-caching-with-redis/commit/93b18731d89469b6739be13a384fb7d6a8aaa0a9)

### [Unique Keys](https://github.com/JohnSmith19/data-caching-with-redis/commit/75812eea778e7ac7485393bd3a5ad77f86f7f179#diff-28fc543f349200516a8ad8a17ffcab9e)

### [Key Creation]()

### [Restoring Redis Config]()

### [Resolving Values]()

### [Hydrating Models]()

### [Hydrating Arrays]()

### [Toggleable Cache]()

### [Cache Expiration]()

### [Nested Hashes]()

### [Clearing Nested Hashes]()

### [Automated Cache Clearning with Middleware]()
