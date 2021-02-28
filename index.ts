// Problem how to validate if a binary search tree is valid

class N {
  private readonly _val: number | undefined;
  private _left: N | undefined;
  private _right: N | undefined;

  constructor(val: number) {
    this._val = val;
  }

  /**
   * Getter for the value of the node
   */
  get val(): number | undefined {
    return this._val;
  }

  /**
   * Getter for the left node of the node
   */
  get left(): N | undefined {
    return this._left;
  }

  /**
   * Setter for the left node of the node
   */
  set left(value: N | undefined) {
    this._left = value;
  }

  /**
   * Getter for the right node of the node
   */
  get right(): N | undefined {
    return this._right;
  }

  /**
   * Setter for the right node of the node
   */
  set right(value: N | undefined) {
    this._right = value;
  }
}

class Solution {

  /**
   * Checks whether or not a binary search tree is valud
   * @param n The top level node
   */
  public isValidBST(n: N): string {
    return this._isValidBSTHelper(n, -Infinity, +Infinity) ? 'Yes' : 'No';
  }

  private _isValidBSTHelper(n: N | undefined, low: number, high: number): boolean {
    if (!n || !n.val) {
      return true;
    }
    const val = n.val;
    return ((val > low && val < high)) &&
      this._isValidBSTHelper(n.left, low, n.val) &&
      this._isValidBSTHelper(n.right, val, high);
  }
  
}

const solution = new Solution();
//  5
// / \
//4   7
const node1: N = new N(5);
node1.left = new N(4);
node1.right= new N(7);
console.log('Is Node 1 valid ? ' + solution.isValidBST(node1));

//  5
// / \
//4   2
const node2: N = new N(5);
node2.left = new N(4);
node2.right= new N(2);
console.log('Is Node 2 valid ? ' + solution.isValidBST(node2));
