function desglosarString(str, tipo) {
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