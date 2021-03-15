module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length % 2) {
        return false;
    }

    let arr = [];

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == arr[arr.length - 1]) {
                arr.pop();
            }
            else if (str[i] == bracketsConfig[j][0]) {
                arr.push(str[i]);
            }
        }
    }

    if (arr.length != 0) {
        return false;
    }

    return true;
}
