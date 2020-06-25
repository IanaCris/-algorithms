
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
}

var levelOrder = function(root) {
if (!root) return [];//se arvore vazia

const res = [];
const pesquisa = [];
pesquisa.push(root);

while(pesquisa.length) { // para todos items da arvore
  const level = []; //nivel na arvore
  const size = pesquisa.length;

  for (let i = 0; i < size; i++) {
    const node = pesquisa.shift();
    level.push(node.val);
    if (node.left) pesquisa.push(node.left);
    if (node.right) pesquisa.push(node.right);
  }
  res.push(level);
}
return res;
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
tree.right.right.left = new TreeNode(23);


console.log(levelOrder(tree));

//[ [3], [9, 20], [15, 17], [23]]