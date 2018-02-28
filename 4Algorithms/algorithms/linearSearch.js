/*
  A JavaScript module which performs a linear search for a given value inside an input array.  If the specified value is found, the index of the element in the array with that value is returned.  If the specified value is not found in the array -1 is returned.
*/
module.exports = exports = function(input, value) {
//  complete the function
for(let i = 0; i < input.length; i++){
  if (input[i] === value){
    return i
  }else{
    return -1
  }
}
};
