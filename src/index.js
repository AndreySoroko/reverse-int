module.exports = function reverse (n) {
    if (n < 0) n = n * -1;
    
  n = n.toString();
  straight_array = n.split('');
  
  let j = straight_array.length;
    let reverse_array = [];

    for (let i = 0; i < straight_array.length; i++) {
    reverse_array[i] = straight_array[j-1];
    j--;
  }

  reverse_array = reverse_array.join('');

  return Number(reverse_array);

}
