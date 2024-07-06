/* Write a javascript function that iterates the integers from 1 to 100. But for multiples of three print "fizz" instead of the number and for 
the multiples of five print "Buzz" for numbers that are multiples of both three and five print "FizzBuzz"
*/
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
      let word = ""; 
  //using the "if" statement
      if (i % 3 === 0){                           
        word += "Fizz";
      }
      if (i % 5 === 0){                    
        word += "Buzz";
      }
  
      console.log(i, word);  
    }
  }
  
  fizzBuzz();