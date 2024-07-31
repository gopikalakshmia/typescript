export class emp{
    name:string;
    age:number;
    dept:string;

    constructor(_name,_age,_dept){
        this.name=_name;
        this.age=_age;
        this.dept=_dept;
    }
    print():void{
        console.log("name is :"+this.name);
    }
}
var em=new emp("gopi",31,"ece");
//em.print();