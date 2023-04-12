import React from "react";
import { Iguest } from "../Interface/model";
import "./List.css";
interface Iprops {
  people: Iguest[];
}

const List: React.FC<Iprops> = ({ people }: Iprops) => {
  console.log(people);
  const rederList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{rederList()}</ul>;
};

export default List;
