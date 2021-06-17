function main(arr){
    lis(a, r = [a[0]]);
}
function lis(a, r = [a[0]]) {
    if (!a.length) return r;
    a.splice(0, 1);
    r[r.length - 1] < a[0] && r.push(a[0]);
    return lis(a, r);
}
var arr = main([-7, -10, 6, 22, 9, 33, 21, 50, 41, 60, 80]);
console.log(lis(arr).join());
