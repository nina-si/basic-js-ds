const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const addValue = (tree, value) => {
      if (!tree) return new Node(value);
      if (value < tree.data) {
        tree.left = addValue(tree.left, value);
      } else if (value > tree.data) {
        tree.right = addValue(tree.right, value);
      }
      return tree;
    };
    this.tree = addValue(this.tree, data);
  }

  has(data) {
    let temp = this.tree;
    while (temp.data) {
      if (temp.data === data) return true;
      if (data > temp.data && temp.right) {
        temp = temp.right;
      } else if (data < temp.data && temp.left) {
        temp = temp.left;
      } else return false;
    }
  }

  find(data) {
    let temp = this.tree;
    while (temp.data) {
      if (temp.data === data) return temp;
      if (data > temp.data && temp.right) {
        temp = temp.right;
      } else if (data < temp.data && temp.left) {
        temp = temp.left;
      } else return null;
    }
  }

  remove(data) {
    const removeNode = (tree, num) => {
      if (!tree) {
        return null;
      }
      if (num > tree.data) {
        tree.right = removeNode(tree.right, num);
      } else if (num < tree.data) {
        tree.left = removeNode(tree.left, num);
      } else if (num === tree.data) {
        if (!tree.right) {
          return tree.left;
        } else if (!tree.left) {
          return tree.right;
        } else {
          tree.data = findMin(tree.right);
          tree.right = removeNode(tree.right, tree.data);
          console.log(tree.right);
        }
      }
      return tree;
    };
    const findMin = (tree) => {
      while (tree.left) {
        tree = tree.left;
      }
      return tree.data;
    };

    this.tree = removeNode(this.tree, data);
  }

  min() {
    let temp = this.tree;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }

  max() {
    let temp = this.tree;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }
}

module.exports = {
  BinarySearchTree,
};
