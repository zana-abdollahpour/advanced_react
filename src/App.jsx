import "./App.css";

import { UserInfo } from "./components/user-info";
import logProps from "./components/log-props";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return <UserInfoWrapper test="test" b="sth" />;
}

export default App;
