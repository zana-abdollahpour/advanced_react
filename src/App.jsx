import axios from "axios";
import "./App.css";

import DataSource from "./components/data-source";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <div>
      <ResourceLoader resourceUrl="/users/2" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <DataSource
        resourceName="user"
        getData={() => getDataFromServer("/users/3")}
      >
        <UserInfo />
      </DataSource>
    </div>
  );
}

export default App;
