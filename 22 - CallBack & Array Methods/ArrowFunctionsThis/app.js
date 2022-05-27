const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
        // referes to the owner object it belong too.
    }, // keyword this refers to whatever comes left to the object.
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the scope value of 'this'**** where the function is created ***
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

//this keyword binds from where it is called mot where it is defined.(https://www.youtube.com/watch?v=4LWGZfkHeL8).


// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined. // in strict this is not allowed.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.
