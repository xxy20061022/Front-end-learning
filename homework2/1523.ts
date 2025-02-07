function countOdds(low: number, high: number): number {
    return Math.floor(high / 2) - Math.floor((low - 1) / 2);
}