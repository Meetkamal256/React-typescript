type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet: React.FC<GreetProps> = ({
  name,
  messageCount = 0,
  isLoggedIn,
}) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}, you have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;

