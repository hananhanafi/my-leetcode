// 623. Add One Row to Tree
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

// Note that the root node is at depth 1.

// The adding rule is:

// Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
// cur's original left subtree should be the left subtree of the new left subtree root.
// cur's original right subtree should be the right subtree of the new right subtree root.
// If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
 

// Example 1:


// Input: root = [4,2,6,3,1,5], val = 1, depth = 2
// Output: [4,1,1,2,null,null,6,3,1,5]
// Example 2:


// Input: root = [4,2,null,3,1], val = 1, depth = 3
// Output: [4,2,null,1,1,3,null,null,1]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// The depth of the tree is in the range [1, 104].
// -100 <= Node.val <= 100
// -105 <= val <= 105
// 1 <= depth <= the depth of tree + 1


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if(depth===1){
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot
    }

    dfs(root,val,depth,1)
    
    return root
};

function dfs(rootNode: TreeNode | null, val: number, depth: number, currentDepth: number): void {
    if(rootNode===null) return;

    if(currentDepth === depth-1){
        const newLeftNode = new TreeNode(val);
        const newRightNode = new TreeNode(val);
        newLeftNode.left = rootNode.left;
        newRightNode.right = rootNode.right;
        rootNode.left = newLeftNode;
        rootNode.right = newRightNode;
        return;
    }
    
    dfs(rootNode.left,val,depth,currentDepth+1)
    dfs(rootNode.right,val,depth,currentDepth+1)
};