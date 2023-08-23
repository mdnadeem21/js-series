class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A New COurse was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@rediffmail.com",258);
// chai.addCourse();
chai.logMe();

const iceTea = new User("iceTea")
iceTea.logMe()

// console.log(chai === iceTea);
// console.log(chai instanceof Teacher);
console.log(chai instanceof User);