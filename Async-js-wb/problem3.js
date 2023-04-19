function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

console.log(getCount('Javascript'));
// example of how to use function to count vowels