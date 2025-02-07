function repeatedSubstringPattern(s: string): boolean {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const sub = s.slice(0, i);
            let repeated = sub.repeat(n / i);
            if (repeated === s) {
                return true;
            }
        }
    }
    return false;
}
