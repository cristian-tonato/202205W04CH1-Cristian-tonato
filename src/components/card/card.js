import { ButtonX } from "../buttonX/buttonX";
import { ButtonV } from "../buttonV/buttonV";

export function Card (){
    return (
        <li className ="gentleman">
            <div className ="gentlemanavatar-container">
              <img
                className ="gentlemanavatar"
                src="img/fary.jpg"
                alt="The Fary pointing at you"
              />
              <span className ="gentlemaninitial">F</span>
            </div>
            <div className ="gentlemandata-container">
              <h2 className ="gentlemanname">The Fary</h2>
              <ul className ="gentlemandata-list">
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Profession:</span>
                  Influencer
                </li>
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Status:</span> RIP
                </li>
                <li className ="gentlemandata">
                  <span className ="gentlemandata-label">Twitter:</span> Pending
                </li>
              </ul>
            </div>
            <ButtonX></ButtonX>
            <ButtonV></ButtonV>
          </li>
    )
};
