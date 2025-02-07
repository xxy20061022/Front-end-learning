function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        // If the current value is less than the next one, subtract it
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }
    
    return total;
}
