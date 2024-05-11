import "./App.css";

import ControlledForm from "./components/form/controlled-form";
import UncontrolledForm from "./components/form/uncontrolled-form";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  );
}

export default App;
