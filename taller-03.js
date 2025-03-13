function desglosarString(str, tipo) {
    // no era mejor llamarla algo tipo getVowelsAndLetters?
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const lowerStr = str.toLowerCase();
    
    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        if (vocales.includes(char) && tipo === 'vocales') {
            count++;
        } else if (
            tipo === 'consonantes' &&
            char >= 'a' && 
            char <= 'z' && 
            !vocales.includes(char)
        ) {
            count++;
        }
    }
    return count;
}

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function conversionRomana(romanStr) {
    const romanValues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;
    for (let i = 0; i < romanStr.length; i++) {
        const current = romanValues[romanStr[i]];
        const next = romanValues[romanStr[i + 1]] || 0;
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}