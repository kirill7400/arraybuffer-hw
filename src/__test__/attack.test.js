import Magician from "../class/Magician";
import {expect, jest, test} from '@jest/globals';

test('attack test', () => {
  const result = new Magician();

  expect(result.stoned).toBe(false);
  expect(result.range).toBe(1);

  result.range = 2
  expect(result.attack).toBe(90);

  result.range = 3
  result.stoned = true
  expect(result.attack).toBe(72);

  result.range = 6
  result.stoned = false
  result.attack = 250
  expect(result.attack).toBe(125);
});