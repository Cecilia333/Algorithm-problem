// 题目：输入两个长字符串，求和
// 不要使用翻转，会降低算法性能
function addLongInt(str1, str2){
    var l1 = str1.length;
    var l2 = str2.length;
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    var result = [];
    var count = 0;
    if(l1>l2){
        var tmp = arr1;
        arr1 = arr2;
        arr2 = tmp;
        var v = l1;
        l1 = l2;
        l2 = v;
    }
    for(var i=1;i<=l1;i++){
        var num = arr1[l1-i] - 0 + (arr2[l2-i] - 0) + count;
        result.unshift(num % 10);
        count = Math.floor(num / 10);
    }
    for(var i=l2-l1-1;i>=0;i--){
        var n = arr2[i] - 0 + count;
        result.unshift(n % 10);
        count = Math.floor(n / 10);
    }
    return result.join('');
}


