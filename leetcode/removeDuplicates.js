// var removeDuplicates = function(nums) {
//     var arr = [];
//     for (var i = 0,len = nums.length; i < len; i++){
//         if(arr.indexOf(nums[i]) === -1){
//             arr.push(nums[i]);
//         }
//     }
//     return arr;
// };
// var removeDuplicates = function(nums) {
//     var arr = new Set();
//     for (var i = 0,len = nums.length; i < len; i++){
//       arr.add(nums[i]);
//     }
//     return [...arr];
// };
var runtime = new Date().getTime();
 var removeDuplicates = function(nums) {
   if (nums.length === 0) return;
   var j = 0;
   for (var i = 0,len = nums.length; i < len; i++){
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];
        }
    }
    return ++j;
};
var nums = [1];
var jj = removeDuplicates(nums);
// console.log(new Date().getTime()-runtime);
console.log(nums);
console.log(jj);