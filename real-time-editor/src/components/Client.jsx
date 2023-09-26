// import Avatar from "react-avatar";

const Client = (props) => {
  // console.log(props.username);
  return (
    <div className="client">
      {/* <Avatar className="mr-2" name={props.username} size="45" round={true} /> */}
      <img
        src={`https://ui-avatars.com/api/?name=${props.username}&background=random`}
        alt={props.username}
      />
      <span className="username">{props.username}</span>
    </div>
  );
};

export default Client;
