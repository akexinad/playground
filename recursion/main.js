// FIZZBUZZ

function fizzBuzz(num = 100) {
    while (num > 0) {
        if (num % 3 == 0) {
            console.log('fizz');
        }
        if (num % 5 == 0) {
            console.log('buzz');
        }
        if (num % 9 == 0 ) {
            console.log('lalalalalalalala');
        } else {
            console.log(num);
        }
        return fizzBuzz(num - 1)
    }
}

fizzBuzz();




