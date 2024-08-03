

import hello from "./hello";

hello(); 
//let frontEndCoder:string = "Frontend Coder";
//frontEndCoder ='ABCD';

//const frontEndCoder01:string = "Frontend Coder - 01" 
//frontEndCoder01 = 'YXYZ'; //

console.log("/////////////////////////////////////////////////////");

interface A{
    name:string;
    printName(name:string):void;


}

class B implements A{
    name: string = ' ';
    printName(): void {
        console.log(this.name);
        
    }

}


console.log("/////////////////////////////////////////////////////");

interface Animal{
    makeSound():void;
}

class Cat implements Animal{
    makeSound():void{
        console.log("ewwww");
    }

    tail(){
        console.log("Tail....");
        
    }
}

class Dog implements Animal{
    makeSound():void{
        console.log("bwwww");
    }
}

let animal:Animal = new Cat();
animal.makeSound();//ewwww

 animal = new Dog();
 animal.makeSound();//bwwww


 console.log("/////////////////////////////////////////////////////");

