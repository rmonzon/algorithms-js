function GetDuplicates(arr) {
    var i = 0, m = [];
    return arr.filter(function (n) {
        return !m[n] * ~arr.indexOf(n, m[n] = ++i);
    });
}
