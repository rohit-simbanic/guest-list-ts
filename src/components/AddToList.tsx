import React, { useState } from "react";
import { Iguest } from "../Interface/model";

interface Iprops {
  people: Iguest[];
  setPeople: React.Dispatch<React.SetStateAction<Iguest[]>>;
}

const AddToList: React.FC<Iprops> = ({ people, setPeople }: Iprops) => {
  const [input, setInput] = useState({ name: "", age: "", note: "", url: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.note || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        url: input.url,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      url: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        id=""
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        id=""
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        id=""
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        id=""
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
