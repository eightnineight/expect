// check if true
const EXPECT_TRUE = (a) => {
    if (a) {
        return true;
    }
    throw 'ERR__EXPECT_TRUE';
}

// check if false
const EXPECT_FALSE = (a) => {
    if (!a) {
        return true;
    }
    throw 'ERR__EXPECT_FALSE';
}

// check if equal
const EXPECT_EQ = (a, b) => {
    if (a === b) {
        return true;
    }
    throw 'ERR__EXPECT_EQ';
}

// check if not equal
const EXPECT_NE = (a, b) => {
    if (a !== b) {
        return true;
    }
    throw 'ERR__EXPECT_NE';
}

// check if a is little than b
const EXPECT_LT = (a, b) => {
    if (a < b) {
        return true;
    }
    throw 'ERR__EXPECT_LT';
}

// check if a is little than or equal to b
const EXPECT_LE = (a, b) => {
    if (a <= b) {
        return true;
    }
    throw 'ERR__EXPECT_LE';
}

// check if a is greater than b
const EXPECT_GT = (a, b) => {
    if (a > b) {
        return true;
    }
    throw 'ERR__EXPECT_GT';
}

// check if a is greater than or equal to b
const EXPECT_GE = (a, b) => {
    if (a >= b) {
        return true;
    }
    throw 'ERR__EXPECT_GE';
}

export {
    EXPECT_TRUE,
    EXPECT_FALSE,
    EXPECT_EQ,
    EXPECT_NE,
    EXPECT_LT,
    EXPECT_LE,
    EXPECT_GT,
    EXPECT_GE,
};
