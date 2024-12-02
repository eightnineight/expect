# expect

expect checker

## Install

```
npm install @eightnineight/expect
```

## Usage

```js
import { EXPECT } from "@eightnineight/expect";

try {
    EXPECT.TRUE(5 === 3);
    EXPECT.FALSE(5 === 3);
    EXPECT.EQ(5, 3);
    EXPECT.NE(5, 3);
    EXPECT.LT(5, 3);
    EXPECT.LE(5, 3);
    EXPECT.GT(5, 3);
    EXPECT.GE(5, 3);
} catch (e) {
    console.log(e);
}
```

equal to

```js
try {
    // EXPECT.TRUE(5 === 3);
    if (!(5 === 3)) {
        throw "ERR__EXPECT_TRUE";
    }

    // EXPECT.FALSE(5 === 3);
    if (5 === 3) {
        throw "ERR__EXPECT_FALSE";
    }

    // EXPECT.EQ(5, 3);
    if (5 !== 3) {
        throw "ERR__EXPECT_EQ";
    }

    // EXPECT.NE(5, 3);
    if (5 !== 3) {
        throw "ERR__EXPECT_NE";
    }

    // EXPECT.LT(5, 3);
    if (5 >= 3) {
        throw "ERR__EXPECT_LT";
    }

    // EXPECT.LE(5, 3);
    if (5 > 3) {
        throw "ERR__EXPECT_LE";
    }

    // EXPECT_GT(5, 3);
    if (5 <= 3) {
        throw "ERR__EXPECT_GT";
    }

    // EXPECT_GE(5, 3);
    if (5 < 3) {
        throw "ERR__EXPECT_GE";
    }
} catch (e) {
    console.log(e);
}
```
