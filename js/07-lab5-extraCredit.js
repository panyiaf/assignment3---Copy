// GLOBAL VARIABLES
let miles;
let gallons;
let mpg;
let again ='y'

// PROCESS USER FEEDBACK
do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your tank hold?'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) { //is miles a number?
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon`)
    } else {
        alert('One or both of your values is either not a number or not greater than 0')
    }

    // PROMPT REAPPEARS IF USER DOES NOT INSERT Y OR N
    do {
        again = prompt('Do you want to run the application again? (y/n)')
        if ((again === 'y') || (again === 'n')) {
                break;
        } else {
        alert('Please enter \'y\' or \'n\' ')
        }
    } while (true)

} while ((again === 'y'));
console.log('Application has exited.');