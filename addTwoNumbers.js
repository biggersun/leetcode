/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null && l2 === null ){
        return false;
    }
    var val;
    if(l1 === null && l2 !== null){
      val = l2.val;
      l1 = { val: 0, next:null };
    }
    if(l2 === null){
      val = l1.val;
      l2 = { val: 0, next:null };
    }
    if(l1 !== null && l2 !== null){
      val = l1.val + l2.val;
    }
    console.log(l1);
    console.log('=======');
    if( val >= 10){
      l1.val = val - 10;
      if(l1.next !== null){ 
        l1.next.val++;
      } else {
        l1.next = { val: 1, next: null };
        l2.next = { val: 0, next: null };
      }
    } else{
      l1.val = val;
    }
    addTwoNumbers(l1.next, l2.next);
    return l1;
};

var link = function ListNode(val) {
     this.val = val;
     this.next = null;
}
var l1 = new link(1);
// var l11 = l1.next = new link(5);
// l11.next = new link(3);// [1,5,3]
var l2 = new link(5);
var l22 = l2.next = new link(2);
// l22.next = new link(6);//[4,5,5]

var result = addTwoNumbers(l1, l2);
var list = [result.val,result.next.val];
console.log(list);