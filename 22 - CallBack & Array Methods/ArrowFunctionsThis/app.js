const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }, // keyword this refers to whatever comes left to the object.
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the scope value of 'this'**** where the function is created ***
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}