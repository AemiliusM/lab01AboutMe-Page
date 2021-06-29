// IMPORT MODULES under test here:

import { isYes } from '../utils.js';
import { isNo } from '../utils.js';

const test = QUnit.test;

test('should return true for yes-y strings', assert => {
    const yesString = 'yes';
    const expected = true;
    const actual = isYes(yesString);
    assert.equal(actual, expected);

});  
test('should return true for no-n strings', assert => {
    const noString = 'no';
    const expected = true;
    const actual = isNo(noString);
    assert.equal(actual, expected);

});  
   