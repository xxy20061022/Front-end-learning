function average(salary: number[]): number {
    salary.sort((a, b) => a - b);  
    salary.shift();  
    salary.pop();    
    const sum = salary.reduce((acc, curr) => acc + curr, 0);  
    return sum / salary.length;  }
