import { PERSONS } from "../../models/person";
export function Counter(){

    function handlerClick(ev,id){
        console.log(ev)
        PERSONS.forEach(item => {
            if(item.id === id){
                item.selected=true
            }
        })
       
    }
    return (
        <section className ="controls">
        <p className ="info">0 gentlemen pointing at you</p>
        <button className ="button button--select">Select all</button>
      </section>
    )
}