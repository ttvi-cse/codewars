var maxSequence = function(arr){
  // ...
  var max_ending_here = 0;
  var max_so_far = 0;

  arr.forEach( function(element, index) {
  	// statements
  	max_ending_here += element;

  	if (max_ending_here < 0) {
  		max_ending_here = 0;
  	}

  	if (max_so_far < max_ending_here)
  		max_so_far = max_ending_here;

  });

  return max_so_far;
}

var max = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(max);
