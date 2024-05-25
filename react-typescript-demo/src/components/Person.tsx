type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person: React.FC<PersonProps> = ({ name }) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
