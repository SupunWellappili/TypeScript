

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
