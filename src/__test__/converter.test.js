import ArrayBufferConverter from "../class/ArrayBufferConverter";
import {expect, jest, test} from '@jest/globals';

test('attack test', () => {
  const result = new ArrayBufferConverter();

  expect(result.load(result.getBuffer())).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});