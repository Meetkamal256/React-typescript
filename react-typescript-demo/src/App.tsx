import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };
  
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <>
      <Greet name={"kamal"} messageCount={20} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="error" />

    </>
  );
}

export default App;
