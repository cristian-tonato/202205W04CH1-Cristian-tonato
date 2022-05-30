import { PERSONS } from "../../models/person";
import { Counter } from "..//counter/counter";
export function ButtonV({id}){
    //console.log(id)

    return(
        <i className ="icon gentleman__icon fas fa-check" onClick={(ev) => Counter.handlerClick(ev, id) }></i>
    )
};


