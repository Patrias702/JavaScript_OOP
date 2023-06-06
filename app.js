

// Exercise 1:


class Person {
    constructor(name,pets,residence,hobbies){
        this.name+ name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

    }



addHobby(hobby) {
    this.hobbies.push(hobby);

}

removeHobby(hobby) {
     let foundIdx = this.hobbies.indexOf(hobby);


     let valuesBefore = this.hobbies.slice(0, foundIdx)

     let valuesAfter = this.hobbies.slice(foundIdx + 1);

     this.hobbies = valuesBefore.concat(valuesAfter); 
}


greeting() {
    console.log("Hello Human!");
}



toString() {

    return Object.entries(this).toString();
} 

}


// Exercise 2:
class Coder extends Person{
    constructor(name,pets,residence,hobbies,occupation){
        super(name,pets,residence,hobbies);

        this.occupation = occupation;
    }

    greeting(){
        console.log("Hello, I am a coder!");
    }

} 


// Exercise 3:
let coder = new Coder(" Ben",0,"Birmingham",["running", "diy", "reading"],"Full Stack Web Developer");

coder.addHobby("fencing")

coder.removeHobby("diy");

console.log(coder); 

coder.greeting();

console.log(coder.toString())




// Exercise 4: 

class Calculator {
    result = 0;
    
    add(a,b){
        this.result = a+b;
        return this.result;

    }

    subtract(a,b){
        this.result = a-b;
        return this.result;

    }

    multiply(a,b){
        this.result = a*b;
        return this.result;
    }

    divide(a,b){
        this.result = a/b;
        return this.result;
    }

    display(){
        console.log(this.result);
    }
}

let calc = new Calculator();

calc.add(0,1)
calc.display()
calc.subtract(5,3)
calc.display()
calc.multiply(1,3)
calc.display()
calc.divide(8,2)
calc.display()










