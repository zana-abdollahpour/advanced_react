import "./App.css";

import SplitScreen from "./components/split-screen";

const LeftSideComp = () => <h2 style={{ background: "purple" }}>Left Comp</h2>;
const RightSideComp = () => (
  <h2 style={{ background: "yellow" }}>Right Comp</h2>
);

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp />
      <RightSideComp />
    </SplitScreen>
  );
}

export default App;
