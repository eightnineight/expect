// check if true
const EXPECT_TRUE = (a, err = 'ERR__EXPECT_TRUE') => {
    if (a) {
        return true;
    }
    throw err;
}

// check if false
const EXPECT_FALSE = (a, err = 'ERR__EXPECT_FALSE') => {
    if (!a) {
        return true;
    }
    throw err;
}

// check if equal
const EXPECT_EQ = (a, b, err = 'ERR__EXPECT_EQ') => {
    if (a === b) {
        return true;
    }
    throw err;
}

// check if not equal
const EXPECT_NE = (a, b, err = 'ERR__EXPECT_NE') => {
    if (a !== b) {
        return true;
    }
    throw err;
}

// check if a is little than b
const EXPECT_LT = (a, b, err = 'ERR__EXPECT_LT') => {
    if (a < b) {
        return true;
    }
    throw err;
}

// check if a is little than or equal to b
const EXPECT_LE = (a, b, err = 'ERR__EXPECT_LE') => {
    if (a <= b) {
        return true;
    }
    throw err;
}

// check if a is greater than b
const EXPECT_GT = (a, b, err = 'ERR__EXPECT_GT') => {
    if (a > b) {
        return true;
    }
    throw err;
}

// check if a is greater than or equal to b
const EXPECT_GE = (a, b, err = 'ERR__EXPECT_GE') => {
    if (a >= b) {
        return true;
    }
    throw err;
}

const EXPECT = {
    TRUE: EXPECT_TRUE,
    FALSE: EXPECT_FALSE,
    EQ: EXPECT_EQ,
    NE: EXPECT_NE,
    LT: EXPECT_LT,
    LE: EXPECT_LE,
    GT: EXPECT_GT,
    GE: EXPECT_GE,
};

export {
    EXPECT,
};
