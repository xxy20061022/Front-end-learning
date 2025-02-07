function multiply(num1: string, num2: string): string {
    const len1 = num1.length;
    const len2 = num2.length;
    
    const result = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0'); 
            const sum = mul + result[i + j + 1]; 
            result[i + j + 1] = sum % 10;  
            result[i + j] += Math.floor(sum / 10); 
        }
    }
    
    
    let strResult = result.join('');
    while (strResult[0] === '0' && strResult.length > 1) {
        strResult = strResult.substring(1);  
    }
    
    return strResult;
}
