import { Conferencia } from "./conferencia";

export class ConferenciaDetail extends Conferencia{


    venue:string;
    description:string; 

    constructor(id:number, name:string, starts:string, ends:string, venue:string, description:string) {

        super(id,name,starts,ends)  
        this.venue = venue;
        this.description = description;
        

        
    }



}
