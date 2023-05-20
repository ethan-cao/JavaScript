// Recursion version , output the n-th number
var f1 = function(n){
  if ( n <= 0) {
  } else if ( 1 === n || 2 == n){
    return 1;
  } else {
    return f1(n-2) + f1(n-1)
  }

};

// Recursion version , output the array
var f2 = function(n){
    if (n<=0){
        return;
    }

    var sequence = [];
    for (var i = 1; i <= n; i++){
        sequence.push(f1(i));
    }

    return sequence;
};


// Non-recursion version , output the n-th number
var f3 = function(n){
    var a = 1;
    var b = 1;
    var c = 1;

    for (var i = 3 ; i <= n ; i ++){
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};

// Non-recursion version, output the array
var f4 = function(n) {
  var sequence = [];

  if ( n <= 0){
  } else if ( 1 === n ){
    sequence.push(1);
  } else if ( 2 === n) {
    sequence.push(1);
    sequence.push(1);
  } else {
    sequence.push(1);
    sequence.push(1);

    for (var i = 2; i < n; i++) {
      sequence.push( sequence[i-2] + sequence[i-1]);
    }
  }

  return sequence;
};
