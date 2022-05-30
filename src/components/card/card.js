import { ButtonX } from "../buttonX/buttonX";
import { ButtonV } from "../buttonV/buttonV";

export function Card ({person}){
    console.log(person)
    return (
        <li className ="gentleman">
            <div className ="gentleman__avatar-container">
              <img
                className ="gentlemanavatar"
                src={"./img/"+ person.picture}
                alt={person.name + "pointing at you"}
              />
              <span className ="gentlemaninitial">F</span>
            </div>
            <div className ="gentleman__data-container">
              <h2 className ="gentleman__name">{person.name} </h2>
              <ul className ="gentleman__data-list">
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Profession:</span>
                  {person.profession}
                </li>
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Status:</span> {person.status}
                </li>
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Twitter:</span> {person.twitter}
                </li>
              </ul>
            </div>
            <ButtonX></ButtonX>
            <ButtonV></ButtonV>
          </li>
    )
};
