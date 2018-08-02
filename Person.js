class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
var JohnWick= new Person("JohnWick",31,195,6) ;
var Gibby = new Person("Gibby",19,200,5);

alert(JohnWick.bodyMassIndex());
alert(Gibby.bodyMassIndex());


var Array = [JohnWick,Gibby];
Array.push(Person);
console.log(Array);

Array[0].printPerson();
Array[1].printPerson()
}

main();