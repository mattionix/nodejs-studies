// Regular function.
// const square = function (x) {
//     return x * x
// }

// Basic arrow function.
// const square = (x) => {
//     return x * x
// }

// Shorthand syntax arrow function.
// const square = (x) => x * x

// console.log(square(5))

// =======================

const event = {
    name: 'Mattis Party',
    guestList: ['Gatona', 'Pipoca', 'Minduim'],
    // ES6 method shorthand syntax.
    printGuestList() {
        console.log ("Guest list for " + this.name + ":")

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()