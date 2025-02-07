function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        const customerWealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
        maxWealth = Math.max(maxWealth, customerWealth);
    }

    return maxWealth;
}
