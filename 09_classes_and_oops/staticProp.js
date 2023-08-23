class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const nadeem = new User("Nadeem");
// console.log(nadeem.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe();
// iphone.createId();