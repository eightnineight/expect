import { EXPECT } from '../index.js'

test('EXPECT.EQ', () => {
    expect(EXPECT.EQ(5, 5)).toBe(true);
    expect(EXPECT.EQ('test', 'test')).toBe(true);

    expect(() => {
        EXPECT.EQ(5, 3)
    }).toThrow('ERR__EXPECT_EQ');

    expect(() => {
        EXPECT.EQ(5, 3, 'ERR')
    }).toThrow('ERR');

    expect(() => {
        EXPECT.EQ('test', 3)
    }).toThrow('ERR__EXPECT_EQ');

    expect(() => {
        EXPECT.EQ('test', 3, 'ERR')
    }).toThrow('ERR');
});

test('EXPECT.NE', () => {
    expect(EXPECT.NE(5, 3)).toBe(true);
    expect(EXPECT.NE('test', 3)).toBe(true);

    expect(() => {
        EXPECT.NE(5, 5)
    }).toThrow('ERR__EXPECT_NE');

    expect(() => {
        EXPECT.NE(5, 5, 'ERR')
    }).toThrow('ERR');

    expect(() => {
        EXPECT.NE('test', 'test')
    }).toThrow('ERR__EXPECT_NE');

    expect(() => {
        EXPECT.NE('test', 'test', 'ERR')
    }).toThrow('ERR');
});
