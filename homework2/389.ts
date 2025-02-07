function findTheDifference(s: string, t: string): string {
    let count = new Array(26).fill(0); 
    for (let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let char of t) {
        if (--count[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return char;
        }
    }
    return '';
};