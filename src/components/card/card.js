import { ButtonX } from "../buttonX/buttonX";
import { ButtonV } from "../buttonV/buttonV";

export function Card ({person}){
    //console.log(person)
    return (
        <li className ="gentleman">
            <div className ="gentleman__avatar-container">
              <img
                className ="gentleman__avatar"
                src={"./img/"+ person.picture}
                alt={person.name + "pointing at you"}
              />
              <span className ="gentleman__initial">F</span>
            </div>
            <div className ="gentleman__data-container">
              <h2 className ="gentleman__name">{person.name} </h2>
              <ul className ="gentleman__data-list">
                <li className ="gentleman__data">
                  <span className ="gentleman__data-label">Profession:</span>
                  {person.profession}
                </li>
                <li className ="gentleman__data">
                  <span className ="gentleman__data-label">Status:</span> {person.status}
                </li>
                <li className ="gentleman__data">
                  <span className ="gentleman__data-label">Twitter:</span> {person.twitter}
                </li>
              </ul>
            </div>
            <ButtonX></ButtonX>
            <ButtonV id={person.id}></ButtonV>
          </li>
    )
};
