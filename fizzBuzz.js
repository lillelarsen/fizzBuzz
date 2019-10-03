// function fizzBuzz() {
    
//     for (i = 1; i <= 100; i++) {
//         var string = '';
//         if (i % 3 == 0) {
//             string += 'Fizz';
//         }
//         if (i % 5 == 0) {
//             string += 'Buzz';
//         } else {
//             string = `${i}`;
//         }
//         console.log(string);
//     }
// }



function fizzBuzz (i = 1, mutiple = 3) {
    const isModuloOf = function (integer, modulo) {
        return (integer % modulo === 0);
    };
    const check = function (i, mutiple) {
        if (i < 100) {
            if (isModuloOf(i, mutiple)) {
                return 'Fizz';
            }
        } else {
            return 'No more numbers'
        }
    };
    console.log(check());

}

fizzBuzz();