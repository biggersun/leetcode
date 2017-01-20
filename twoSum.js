// console.log(0 == null); //false
// console.log(Number(null)); //0
// console.log(Object.getPrototypeOf(Object.prototype)); // null

let nums = [1,2,3];
var arr = nums.splice(0, 1, 3,2);
// console.log(arr);
// console.log(nums);

/**
 * @version 0.1.0
 * 
 */
// var twoSum = function(nums, target) {
//     var arr = [];
//     if(nums === undefined || nums === [] || target === undefined){
//         return arr;
//     }
//     for(var i = 0,len = nums.length; i < len; i++){
//         var newNums = nums.slice(i+1, len);
//         // console.log(newNums);
//         for(var j = 0,jlen = newNums.length; j < jlen; j++){
//             if(nums[i]+newNums[j] === target){
//                 console.log(nums[i]+"***"+newNums[j]);
//                 arr.push(i);
//                 arr.push(++j+i);
//                 return arr;
//             }
//         }
//     }
// };

/**
 * 
 * @version 0.1.2
 */
var twoSum = function(nums, target) {
    var arr = [];
    if(nums === undefined || nums === [] || target === undefined){
        return arr;
    }
    for(var i = 0,len = nums.length; i < len; i++){
      var index = nums.indexOf(target - nums[i]); 
        if(index !== -1 && index !== i){
            arr.push(i);
            arr.push(index);
            return arr;
        }
    }
};

var arrRe = twoSum([3,2,4], 6);
console.log(arrRe);