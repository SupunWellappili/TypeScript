export default function(){
    //printed
    console.log("Hello Word!");

    console.log("/////////////////////////////////////////////////////");
    
    //types
    const _boolean:boolean = true;
    console.log(typeof(_boolean));

    const _number:number = 30;
    console.log(typeof(_number));
    
    const _string : string = 'frond end coder'
    console.log(typeof(_string));
    
    const arry01 : Array<number> = [5,5];
    console.log(typeof(arry01));

    const arry02 : number[] = [6,6];
    console.log(typeof(arry02));

    const _tuple : [string,boolean] = ['Hello', true];
    console.log(typeof(_tuple));

    enum Color {
        GREEN,
        RED,
        ORANGE
    }
    const color:Color = Color.GREEN;
    console.log(typeof(color));

    const _null:null = null;
    console.log(typeof(_null));

    const _undefiend:undefined =undefined;
    console.log(typeof(_undefiend));

    const _obj:object ={};
    console.log(typeof(_obj));

    const _any:any =[1,"String",undefined,Color.GREEN];
    console.log(typeof(_any));

    console.log("/////////////////////////////////////////////////////");

    //arry & tuple
    const ar : Number[] =[1,2,3];
    const tu :[number,string] = [678," "];


    console.log("/////////////////////////////////////////////////////");

    //functions
    function printName01(name01:string): void{
        console.log(name01);
    }

    const printName02 = function(name02:string):void{
        console.log(name02);
    }

    const printName03 = (name03:string):void => {
        console.log(name03);   
    }
}
   
console.log("/////////////////////////////////////////////////////");

//Create Class
class Dog{

    //static instance
    static className = "dog";

    //instance variable
    name:string;

    //constructor
    constructor (name:string){
         this.name = name;
    }

    printName(){
        console.log(this.name);//snoby
    }

    static printClassName(){
         console.log(Dog.className);//dog
    }
}

const d = new Dog('snoby');
d.printName();
Dog.printClassName();

console.log("/////////////////////////////////////////////////////");










