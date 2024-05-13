import "./App.css";

import { UserInfo } from "./components/user-info";
import includeUser from "./components/include-user";

const UserInfoWithUser = includeUser(UserInfo, "4");

function App() {
  return <UserInfoWithUser />;
}

export default App;
