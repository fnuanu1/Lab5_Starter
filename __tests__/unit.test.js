// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//npm test ./__tests__/unit.test.js
//2 test true and 2 test false

//phone 1st
test('bracket format', () => {
  // TODO
  expect(isPhoneNumber(("(657) 357-2216"))).toBe(true);
});
test('string', () => {
  // TODO
  expect(isPhoneNumber("bro")).toBe(false);
});
test('not a phone number', () => {
  // TODO
  expect(isPhoneNumber(657)).toBe(false);
});
test('regular with dashes', () => {
  // TODO
  expect(isPhoneNumber("788-657-3526")).toBe(true);
});

test('no space with bracket and dash', () => {
  // TODO
  expect(isPhoneNumber(("(657)357-3216"))).toBe(true);
});




//2nd
test('word', () => {
  // TODO
  expect(isEmail(("fun"))).toBe(false);
});
test('email', () => {
  // TODO
  expect(isEmail(("fanu@ucsd.edu"))).toBe(true);
});
test('number', () => {
  // TODO
  expect(isEmail(("576"))).toBe(false);
});
test('email', () => {
  // TODO
  expect(isEmail(("fanu@gmail.com"))).toBe(true);
});
test('no complete email', () => {
  // TODO
  expect(isEmail(("yay@gmail"))).toBe(false);
});


//3rd
test('capital with letter and more than 4', () => {
  // TODO
  expect(isStrongPassword(("Star7g"))).toBe(true);
});
test('not started with a letter', () => {
  // TODO
  expect(isStrongPassword(("7star"))).toBe(false);
});
test('not long enough', () => {
  // TODO
  expect(isStrongPassword(("stg"))).toBe(false);
});
test('symbol not allowed', () => {
  // TODO
  expect(isStrongPassword(("$yas"))).toBe(false);
});
test('decent valid password', () => {
  // TODO
  expect(isStrongPassword(("starN72"))).toBe(true);
});




//4th
test('accurate date', () => {
  // TODO
  //XX can be 1 or 2 digits long and YYYY is always 4 digits long.
  expect(isDate(("23/5/2024"))).toBe(true);
});
test('year is more than 4', () => {
  // TODO
  expect(isDate(("23/5/20245"))).toBe(false);
});
test('no dash format', () => {
  // TODO
  expect(isDate(("23052005"))).toBe(false);
});
test('single for date and month and early year', () => {
  // TODO
  expect(isDate(("2/2/0005"))).toBe(true);
});




//5th
//isHexColor
test('without hashtag', () => {
  // TODO
  expect(isHexColor(("FFF"))).toBe(true);
});
test('with hashtag', () => {
  // TODO
  expect(isHexColor(("#FFFFFF"))).toBe(true);
});
test('not 3 or 6 for hashtag', () => {
  // TODO
  expect(isHexColor(("#FFFF"))).toBe(false);
});
test('letters not in hex', () => {
  // TODO
  expect(isHexColor(("#ZZZ"))).toBe(false);
});