import React, { useState } from "react";
import "./App.css";
import { Iguest } from "./Interface/model";
import List from "./components/List";
import AddToList from "./components/AddToList";

function App() {
  const [people, setPeople] = useState<Iguest[]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url: "https://www.shareicon.net/data/256x256/2016/06/30/788946_people_512x512.png",
    },
  ]);
  return (
    <div className="App">
      <h1>People Invited to my Birthday Party:</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
