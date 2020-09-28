// LET VS VAR VS CONST

function sayHello {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i);
}

sayHello(); // Logs 0, 1, 2, 3, 4, 5

// This is because i can exist outside of the for block (a weird JS thing)
// When you declare a var it is accessible in the function in which it is defined

// If we used let instead of var we would get an error: 'i' is not defined.
// Let and const are scoped to the block in which it's defined whereas vars are scoped to the function.



// OBJECTS

const person = {
    name: 'Tom',
    walk: function () { }, // A function inside an object is called a method
    talk() { } // This is an alternate way to defining a method inside an object
}



// THIS

// this always returns a reference to the current object
// this in JS is confusing because it doesn't behave like it does in other programming languages.

const person = {
    name: 'Tom',
    walk() {
        console.log(this);
    }
}

person.walk(); // Logs person

// But now let's try this

const walk = person.walk; // We create a new function called walk
walk(); // Returns undefined because it was called outside of an object as a stand alone function

// Now let's look at binding

const walk = person.walk.bind(person);
// The bind method will return a new instance of this walk function and set this to point to the person object
walk();



// ARROW FUNCTIONS

const square = function (number) { // Has one parameter so we can remove the ()
    return number * number // A single line body that returns a value so we can remove {} and return
};

const square = number => number * number; // This is the simplified function

// Another example

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) { return job.isActive; });

const activeJobs = jobs.filter(job => job.isActive); // Cleaned up

// Arrow functions don't rebind this, explained ahead...

const person = {
    talk() {
        console.log('this', this);
    }
};

person.talk(); // Logs this then a reference to the object

// Then try this

const person = {
    talk() {
        setTimeout(function () {
            console.log('this', this);
        }, 5000);
    }
};

person.talk(); // Logs this the window object because setTimeout is not part of any object

// How do we get a reference to the person object inside of the callback function?

const person = {
    talk() {
        setTimeout(() => { // Add an arrow function
            console.log('this', this);
        }, 5000);
    }
};

person.talk(); // Logs the person object



// MAP METHOD

const colours = ['red', 'green', 'blue'];

colours.map(function (colour) {
    return '<li>' + colour + '</li>'
});

// Returns ['<li>red</li>','<li>green</li>','<li>blue</li>']

colours.map(colour => `<li>${colour}</li>`); // Cleaned



// OBJECT DESTRUCTURING

const address = {
    street: '',
    city: '',
    country: ''
};

// If we want 3 consts called st, city, country

const { street: st, city, country } = address;



// SPREAD OPERATOR

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

const clone = [...first];

// You can also do this with objects

const first = { name: 'Tom' };
const second = { job: 'Programmer' };

const combined = { ...first, ...second, location: 'Australia' };

const clone = { ...first };



// CLASSES

class Person {
    constructor(name) { // A special method
        this.name = name
    }

    walk() {
        console.log('walk');
    }
}

// Now to make a new person object

const person = new Person('Tom');

// Now let's look at inheritance...

class Programmer extends Person { // Notice we use extends
    constructor(name, qualification) {
        super(name); // Super references the parent class
        this.qualification = qualification;
    }
    write() {
        console.log('write')
    }
};

const programmer = new Programmer('Tom', null);