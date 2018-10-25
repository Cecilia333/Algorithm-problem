var binaryTree = {
    val: 'a',
    left: {
        val: 'b',
        left: {
            val: 'd'
        },
        right: {
            val: 'e'
        }
    },
    right: {
        val: 'c'
    }
}

// 非递归方式实现先序遍历
// function rePreTrav(tree){
//     var res = [];
//     if(tree){
//         var stack = [tree];
//         while(stack.length !== 0){
//             var node = stack.pop();
//             res.push(node.val);
//             if(node.right){stack.push(node.right);};
//             if(node.left){stack.push(node.left);};
//         }
        
//     }
//     return res;
// }


// 递归方式实现先序遍历
var res = [];
function preTrav(tree){
    if(tree){
        res.push(tree.val);
        // console.log(res)
        preTrav(tree.left);
        preTrav(tree.right);
    }
}
preTrav(binaryTree)
console.log(res);
// 考虑用闭包实现