import "./App.css";

import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <div>
      <ResourceLoader resourceUrl="/users/2" resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </div>
  );
}

export default App;
