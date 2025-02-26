function calPoints(operations: string[]): number {
    const scores: number[] = [];

    for (let op of operations) {
        if (op === '+') {
            const lastTwoSum = scores[scores.length - 1] + scores[scores.length - 2];
            scores.push(lastTwoSum);
        } else if (op === 'D') {
            scores.push(scores[scores.length - 1] * 2);
        } else if (op === 'C') {
            scores.pop();
        } else {
            scores.push(parseInt(op));
        }
    }
    return scores.reduce((acc, score) => acc + score, 0);
}
