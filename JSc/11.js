function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

//The split() method is used to split a String object into an array of strings by separating the string into substrings.
//The sort() method is used to sort the elements of an array in place and returns the array.
//The join() method is used to join all elements of an array into a string.