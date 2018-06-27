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

## Data Caching

### [Project Setup](https://github.com/JohnSmith19/data-caching-with-redis/commit/ec1fc246cb4a200f6fbb3fb4c16906a795c4ac63)

### [Promisifying a Function](https://github.com/JohnSmith19/data-caching-with-redis/commit/6719fd842421f5eefe80f12f5fc6de63ed327a01)

- [Promises](https://www.npmjs.com/package/redis#promises)
- [Promise.promisify](http://bluebirdjs.com/docs/api/promise.promisify.html)

### [Caching in Action](https://github.com/JohnSmith19/data-caching-with-redis/commit/bd6c43dff49d3708ce5323184f5dd4591db681d5#diff-853bab5e1a5197366bfd8d750c69e150)

### [Patching Mongoose's Exec](https://github.com/JohnSmith19/data-caching-with-redis/commit/662d050ed3a5cd0915ecd6c70cee9e94dd533fc4#diff-28fc543f349200516a8ad8a17ffcab9e)

```js
const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function() {
  return exec.apply(this, arguments);
};
```

### [Restoring Blog Routes Handler](https://github.com/JohnSmith19/data-caching-with-redis/commit/93b18731d89469b6739be13a384fb7d6a8aaa0a9)

### [Unique Keys](https://github.com/JohnSmith19/data-caching-with-redis/commit/75812eea778e7ac7485393bd3a5ad77f86f7f179#diff-28fc543f349200516a8ad8a17ffcab9e)

### [Key Creation](https://github.com/JohnSmith19/data-caching-with-redis/commit/87659d905aad63d48c74c3a2ed2de01ab572e2c9#diff-28fc543f349200516a8ad8a17ffcab9e)

### [Restoring Redis Config](https://github.com/JohnSmith19/data-caching-with-redis/commit/9176ce9a00db971d7c8e96ac54c52836f9c55f93)

### [Cache Implementation](https://github.com/JohnSmith19/data-caching-with-redis/commit/4b812a35dac9e3e5356cb6297a757894ab211746)

### [Resolving Values](https://github.com/JohnSmith19/data-caching-with-redis/commit/0311e71eac2365b37fda329d51c5de9e258f96ed)

### [Hydrating Models](https://github.com/JohnSmith19/data-caching-with-redis/commit/36a2524a0e71d7225c5514e19d5712f169c83c11#diff-28fc543f349200516a8ad8a17ffcab9e)

- [Mongoose.proptotype.model](http://mongoosejs.com/docs/api.html#mongoose_Mongoose-model)

### [Hydrating Arrays](https://github.com/JohnSmith19/data-caching-with-redis/commit/d47ccac23bb3e239362e08043e3255f287227966#diff-28fc543f349200516a8ad8a17ffcab9e)

### [Toggleable Cache](https://github.com/JohnSmith19/data-caching-with-redis/commit/52cea8197be2dc989deb9ed1cf70bc3320dc60dd#diff-853bab5e1a5197366bfd8d750c69e150)

### [Cache Expiration](https://github.com/JohnSmith19/data-caching-with-redis/commit/f98e08c137b71ebd09e1ffa9bcf559619d434c05)

### [Nested Hashes](https://github.com/JohnSmith19/data-caching-with-redis/commit/5877aee4650ed28c9c06744e0102d71806b6c552#diff-853bab5e1a5197366bfd8d750c69e150)

### [Clearing Nested Hashes](https://github.com/JohnSmith19/data-caching-with-redis/commit/6db0df9d6315eedc41e5b2a8332d8fd5da669685#diff-853bab5e1a5197366bfd8d750c69e150)

### [Automated Cache Clearing with Middleware](https://github.com/JohnSmith19/data-caching-with-redis/commit/d05ebeac9ee8d2230a1cdb6b15c364b01fac3e05#diff-4fe3b5b3889c0346f0f7f56a57ab1d34)

## Automated Headless Browser Testing

### Jest

- [About Jest](http://jestjs.io/docs/en/getting-started.html)

### Commands Around Testing

```bash
$ npm install --save-dev jest
$ npm run test
```

### First Jest Test

```js
test("Adds two numbers", () => {
  const sum = 1 + 2;

  expect(sum).toEqual(3);
});
```

### Launching Chromium Instances

- [Puppeteer](https://github.com/GoogleChrome/puppeteer)

```js
const puppeteer = require("puppeteer");

test("We can launch a browser", async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
});
```

### Chromium Navigation

```js
await page.goto("localhost:3000");
```

### Extracting Page Content

```js
const text = await page.$eval("a.brand-logo", el => el.innerHTML);
expect(text).toEqual("Blogster");
```

### DRY Tests

### Browser Termination

```js
afterEach(async () => {
  await browser.close();
});
```

### Asserting OAuthFlow

- [page.url()](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageurl)

### Asserting URL Domain

- [.toMatch(regexpOrString)](http://jestjs.io/docs/en/expect#tomatchregexporstring)

```js
expect(url).toMatch(/accounts\.google\.com/);
```

### Generating Sessions and Signatures

- [safe-buffer](https://github.com/feross/safe-buffer)
- [keygrip](https://github.com/crypto-utils/keygrip)

```js
const Buffer = require("safe-buffer").Buffer;
const sessionObject = {
  passport: {
    user: id
  }
};
const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString(
  "base64"
);

const Keygrip = require("keygrip");
const keys = require("../config/keys");
const keygrip = new Keygrip([keys.cookieKey]);
const sig = keygrip.sign("session=" + sessionString);
```

### Assembling the Pieces

- [setCookie](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagesetcookiecookies)

```js
await page.setCookie({ name: "session", value: sessionString });
await page.setCookie({ name: "session.sig", value: sig });
await page.goto("localhost:3000");
```

### WaitFor Statements

- [waitFor](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagewaitforselectororfunctionortimeout-options-args)

```js
await page.waitFor('a[href="/auth/logout"]');
const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

expect(text).toEqual("Logout");
```

### The Session Factory

### Assembling the Session Factory

### Global Jest Setup

- [setupTestFrameworkScriptFile](http://jestjs.io/docs/en/configuration.html#setuptestframeworkscriptfile-string)

```js
"jest": {
  "setupTestFrameworkScriptFile": "./tests/setup.js"
},
```

### Testing Factory Tests!

### Adding a Login Method

- [puppeteer/lib/Page](https://github.com/GoogleChrome/puppeteer/blob/master/lib/Page.js)

```js
// Option 1: Add login method in puppeteer Page Object
const Page = require("puppeteer/lib/Page");

Page.prototype.login = async function() {
  const user = await userFactory();
  const { session, sig } = sessionFactory(user);

  await this.setCookie({ name: "session", value: session });
  await this.setCookie({ name: "session.sig", value: sig });
  await this.goto("localhost:3000");
  await this.waitFor('a[href="/auth/logout"]');
};
```

### Extending Page

```js
// Option 2: Extends Page Object
// We can not easily tell puppeteer that whenever we use a browser
// object to launch a new page.
class CustomPage extends Page {
  login() {
    ...
  }
}

// Options 3
class CustomPage {
  constructor(page) {
    this.page = page;
  }

  login() {
    ...
  }
}

const page = new Page();
const customPage = new CustomPage(page);
customPage.login();
customPage.page.goto(...); // namespace variable problem...
```

### Proxies in Action

- [About Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```js
class Greetings {
  english() {
    return "Hello";
  }
  spanish() {
    return "Hola";
  }
}

class MoreGreetings {
  german() {
    return "Hallo";
  }
  frech() {
    return "Bonjour";
  }
}

const greetings = new Greetings();
const moreGreetings = new MoreGreetings();

const allGreetings = new Proxy(moreGreetings, {
  get: function(target, property) {
    return target[property] || greetings[property];
  }
});

console.log(allGreetings.german); // => german() { retrun "Hallo"; }
console.log(allGreetings.german()); // => "Hallo"
console.log(allGreetings.english()); // => "Hello"
```
