let string = "mozilla";
console.log(string.length);

console.log(string[0]);
// 2，不存在返回 -1
console.log(string.indexOf("zilla"));
// zilla，[start, end)
console.log(string.slice(2, 2 + 5));
// MOZILLA
console.log(string.toLocaleUpperCase());
// 替换第一个找到的 l，注意它不会改变 string 的值
console.log(string.replace("l", "a"));
// mozilla
console.log(string);
