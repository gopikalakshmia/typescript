import { Ideveloper } from "./IDeveloper";
import {emp} from "./class";
class dev extends emp implements Ideveloper{
    project :string;

    constructor(_name,_age,_dept,_project){
        super(_name,_age,_dept);
        this.project=_project;
    }
    write(){
        console.log("write code");
    }
    saveRegister(): void {
        console.log("saved the register");
    }
}

var d=new dev ("hari",31,"ece","metlife");
d.write();
d.print();
d.saveRegister();