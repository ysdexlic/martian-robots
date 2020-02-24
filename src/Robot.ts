import { Grid } from './Grid';
import { orientations } from './constants';

export class Robot {
    grid: Grid;
    instructions: Array<string>;
    x: number;
    y: number;
    orientation: string;
    isLost: boolean;

    constructor(
        grid: Grid,
        coordinates: string,
        instructions = '',
    ) {
        this.grid = grid;
        this.isLost = false;
        this.instructions = instructions.split('');

        const coords: Array<string> = coordinates.split(' ')
        this.x = parseInt(coords[0]);
        this.y = parseInt(coords[1]);
        this.orientation = coords[2];
    }

    initiate = (): void => {
        for (let i = 0; i < this.instructions.length; i++) {
            this.move(this.instructions[i]);
        }
    }

    move = (direction: string): void => {
        if (this.isLost) return;

        let newX = this.x;
        let newY = this.y;
        let newOrientation = this.orientation;

        const orientationIndex = orientations.indexOf(this.orientation);
        switch(direction) {
            case 'L': {
                if (orientationIndex > 0) {
                    newOrientation = orientations[orientationIndex - 1];
                    break;
                }
                newOrientation = orientations[orientations.length - 1];
                break;
            }
            case 'R': {
                if (orientationIndex < orientations.length - 1) {
                    newOrientation = orientations[orientationIndex + 1];
                    break;
                }
                newOrientation = orientations[0];
                break;
            }
            case 'F': {
                switch (this.orientation) {
                    case 'N':
                        newY += 1;
                        break;
                    case 'E':
                        newX += 1;
                        break;
                    case 'S':
                        newY -= 1;
                        break;
                    case 'W':
                        newX -= 1;
                        break;
                }
                break;
            }
            case 'B': {
                switch (this.orientation) {
                    case 'N':
                        newY -= 1;
                        break;
                    case 'E':
                        newX -= 1;
                        break;
                    case 'S':
                        newY += 1;
                        break;
                    case 'W':
                        newX += 1;
                        break;
                }
                break;
            }
        }

        // if moving off the grid
        if (newX < 0
            || newX > this.grid.width
            || newY < 0
            || newY > this.grid.height
        ) {
            const lostScentString = `${this.x} ${this.y} ${this.orientation}`;
            // if no "lost scent" then robot is lost
            if (!this.grid.lostScents.has(lostScentString)) {
                this.isLost = true;
                this.grid.addLostScent(lostScentString);
            }
            // reset values
            newX = this.x;
            newY = this.y;
            newOrientation = this.orientation;
        }

        // set new values after move
        this.x = newX;
        this.y = newY;
        this.orientation = newOrientation;
    }

    outputInfo = (): string => {
        let outputString = `${this.x} ${this.y} ${this.orientation}`;
        if (this.isLost) {
            outputString += ' LOST';
        }
        return outputString;
    }
}