import { commonMessages } from "./CommonMessages";

let UserLogin = (props) => {
  let { success } = props;
  let login = () => {
    success("login done");
  };
  return (
    <>
      <button onClick={login}>Sign In</button>
    </>
  );
};

export default commonMessages(UserLogin);
