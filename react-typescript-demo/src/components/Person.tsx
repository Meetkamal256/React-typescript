import { PersonProps } from "./Person.types";

export const Person: React.FC<PersonProps> = ({ name }) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
