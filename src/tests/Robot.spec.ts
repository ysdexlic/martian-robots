import { expect } from 'chai';
import 'mocha';

import { Grid } from '../Grid';
import { Robot } from '../Robot';

describe('When changing orientation', () => {
    let grid: Grid;
    let robot: Robot;

    beforeEach(() => {
        grid = new Grid(5, 5);
    });

    it('should turn clockwise from North to East', () => {
        robot = new Robot(grid, '1 1 N');
        robot.move('R');
        expect(robot.orientation).to.equal('E');
    });

    it('should turn anti-clockwise from West to South', () => {
        robot = new Robot(grid, '1 1 W');
        robot.move('L');
        expect(robot.orientation).to.equal('S');
    });
    
    describe('When changing over the ends of the orientations array', () => {
        it('should turn clockwise from West to North', () => {
            robot = new Robot(grid, '1 1 W');
            robot.move('R');
            expect(robot.orientation).to.equal('N');
        });

        it('should turn anti-clockwise from North to West', () => {
            robot = new Robot(grid, '1 1 N');
            robot.move('L');
            expect(robot.orientation).to.equal('W');
        });
    });
});

describe('When moving forward', () => {
    let grid: Grid;
    let robot: Robot;

    beforeEach(() => {
        grid = new Grid(5, 5);
    });

    it('should move UP on the Y axis if facing North', () => {
        robot = new Robot(grid, '1 1 N');
        robot.move('F');
        expect(robot.x).to.equal(1);
        expect(robot.y).to.equal(2);
    });

    it('should move DOWN on the Y axis if facing South', () => {
        robot = new Robot(grid, '1 1 S');
        robot.move('F');
        expect(robot.x).to.equal(1);
        expect(robot.y).to.equal(0);
    });

    it('should move FORWARDS on the X axis if facing East', () => {
        robot = new Robot(grid, '1 1 E');
        robot.move('F');
        expect(robot.x).to.equal(2);
        expect(robot.y).to.equal(1);
    });

    it('should move BACK on the X axis if facing West', () => {
        robot = new Robot(grid, '1 1 W');
        robot.move('F');
        expect(robot.x).to.equal(0);
        expect(robot.y).to.equal(1);
    });

    describe('When falling off the edge of the grid', () => {
        describe('The robot should be set to lost', () => {
            it('is lost if moving off the BOTTOM', () => {
                robot = new Robot(grid, '0 0 S');
                expect(robot.isLost).to.equal(false);
                robot.move('F');
                expect(robot.isLost).to.equal(true);
            });

            it('is lost if moving off the LEFT', () => {
                robot = new Robot(grid, '0 0 W');
                expect(robot.isLost).to.equal(false);
                robot.move('F');
                expect(robot.isLost).to.equal(true);
            });

            it('is lost if moving off the TOP', () => {
                robot = new Robot(grid, '5 5 N');
                expect(robot.isLost).to.equal(false);
                robot.move('F');
                expect(robot.isLost).to.equal(true);
            });

            it('is lost if moving off the RIGHT', () => {
                robot = new Robot(grid, '5 5 E');
                expect(robot.isLost).to.equal(false);
                robot.move('F');
                expect(robot.isLost).to.equal(true);
            });
        });

        it('adds LOST to the end of the output info', () => {
            robot = new Robot(grid, '5 5 E');
            robot.move('F');
            expect(robot.outputInfo()).to.equal('5 5 E LOST');
        });

        it('creates a lost scent if not already existing', () => {
            robot = new Robot(grid, '5 5 E');
            expect(grid.lostScents.has('5 5 E')).to.equal(false);
            robot.move('F');
            expect(grid.lostScents.has('5 5 E')).to.equal(true);
        });

        it('does not move any further after becoming lost', () => {
            robot = new Robot(grid, '5 5 E', 'FRFRF');
            robot.initiate();
            expect(robot.x).to.equal(5);
            expect(robot.y).to.equal(5);
            expect(robot.orientation).to.equal('E');
        });
        
        it('skips move if existing lost scent', () => {
            grid.lostScents = new Set();
            grid.lostScents.add('5 5 E');

            robot = new Robot(grid, '5 5 E', 'FRFRF');
            robot.initiate();

            expect(robot.x).to.equal(4);
            expect(robot.y).to.equal(4);
            expect(robot.orientation).to.equal('W');
        });
    });
});