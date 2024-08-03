export default function(){
    console.log("Hello Word!!!");

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

}