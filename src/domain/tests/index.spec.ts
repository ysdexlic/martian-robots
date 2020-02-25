import { expect } from 'chai';
import 'mocha';

import { init } from '../index';

const testInput = `
5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL
`

const testOutput = `1 1 E
3 3 N LOST
2 3 S
`

describe('When given a full input', () => {
    it('should return the expected output', () => {
        const result = init(testInput.trim())
        expect(result).to.equal(testOutput.trim());
    });
});