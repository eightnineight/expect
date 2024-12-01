# expect

expect checker

## Install

```
npm install @eightnineight/expect
```

## Usage

```js
import * from "@eightnineight/expect";

try {
    EXPECT_TRUE(5 === 3);
    EXPECT_FALSE(5 === 3);
    EXPECT_EQ(5, 3);
    EXPECT_NE(5, 3);
    EXPECT_LT(5, 3);
    EXPECT_LE(5, 3);
    EXPECT_GT(5, 3);
    EXPECT_GE(5, 3);
} catch(e) {
    console.log(e);
}
```

equal to

```js
try {
    // EXPECT_TRUE(5 === 3);
    if (!(5 === 3)) {
        throw "ERR__EXPECT_TRUE";
    }

    // EXPECT_FALSE(5 === 3);
    if (5 === 3) {
        throw "ERR__EXPECT_FALSE";
    }

    // EXPECT_EQ(5, 3);
    if (5 !== 3) {
        throw "ERR__EXPECT_EQ";
    }

    // EXPECT_NE(5, 3);
    if (5 !== 3) {
        throw "ERR__EXPECT_NE";
    }

    // EXPECT_LT(5, 3);
    if (5 >= 3) {
        throw "ERR__EXPECT_LT";
    }

    // EXPECT_LE(5, 3);
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
