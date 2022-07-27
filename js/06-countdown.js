let countDownNumber = Number(prompt('Insert a positive number only please'));

if (Number.isInteger(countDownNumber)) {
    for (let i = countDownNumber; i >= 0; i--){
        console.log(i);
    }
}  else {
    console.log('You did not input a number')
} 