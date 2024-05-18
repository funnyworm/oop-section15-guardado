class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Shape Name: ' + this.name);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);

        this.radius = radius;
    }
}

class App {
    constructor() {
        this.serverName = 'localhost';

        document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
    }

    getServerName() {
        console.log(this.serverName);
    }
}


class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this.capitalizeFirst(this._firstName);
    }

    set firstName(value) {
        this._firstName = this.capitalizeFirst(value);
    }

    get lastName() {
        return this.capitalizeFirst(this._lastName);
    }

    set lastName(value) {
        this._lastName = this.capitalizeFirst(value);
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}


class Wallet {
    #balance = 0;
    #transactions = [];

    // constructor() {
    //     this._balance = 0;
    //     this._transactions = [];
    // }

    deposit(amount) {
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount > this.#balance) {
            console.log('Not enough funds');
            return;
        }

        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount) {
        console.log(`Depositing ${amount}`);

        this.#transactions.push({
            type: 'deposit',
            amount
        });
    }

    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`);

        this.#transactions.push({
            type: 'withdraw',
            amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet = new Wallet();
wallet.deposit(250);
console.log(wallet.balance);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
//console.log(descriptor);

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10
};

Object.seal(rectObj);
let descriptors = Object.getOwnPropertyDescriptors(rectObj);
//console.log(descriptors);

const circleObj = {
    name: 'Circle 1',
    radius: 30
};

Object.freeze(circleObj);
descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);