function arraySign(nums: number[]): number {
    let sign = 1;
    for (let num of nums) {
        if (num === 0) return 0; // If there's a zero, product is zero
        if (num < 0) sign = -sign; // Flip sign for negative numbers
    }
    return sign;
}
