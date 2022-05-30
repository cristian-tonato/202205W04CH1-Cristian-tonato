import {Card } from "../card/card";
import { PERSONS } from "../../models/person";


export function List(){
    console.log(PERSONS)
    return(
        <ul className ="gentlemen">
            {PERSONS.map((element) =>( 
               <Card></Card> 
             ))};
            
        </ul>
    )
}