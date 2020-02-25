import { Grid } from './Grid';
import { Robot } from './Robot';

export const init = (input: string): string => {
    const commands = input
    .trim()
    .split('\n')
    .filter(line => line !== '');

    const [gridWidth, gridHeight] = commands
        .shift()
        .split(' ');

    const grid = new Grid(parseInt(gridWidth), parseInt(gridHeight));

    const outputs: Array<string> = [];
    for (let i = 0; i < commands.length; i += 2) {
        const robot = new Robot(grid, commands[i], commands[i+1]);
        robot.initiate();
        outputs.push(robot.outputInfo());
    }
    return outputs.join('\n');
}