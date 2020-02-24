export class Grid {
    width: number;
    height: number;
    lostScents: Set<string>;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.lostScents = new Set();
    }

    addLostScent = (lostScent: string): void => {
        this.lostScents.add(lostScent);
    }
}