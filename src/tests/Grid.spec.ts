import { expect } from 'chai';
import 'mocha';

import { Grid } from '../Grid';

describe('When adding a lost scent', () => {
    let grid: Grid;
    
    beforeEach(() => {
        grid = new Grid(5, 5);
    })

    it('should update the lost scents Set', () => {
        expect(grid.lostScents.size).to.equal(0);
        expect(grid.lostScents.has('test')).to.equal(false);

        grid.addLostScent('test');

        expect(grid.lostScents.size).to.equal(1);
        expect(grid.lostScents.has('test')).to.equal(true);
    });
});