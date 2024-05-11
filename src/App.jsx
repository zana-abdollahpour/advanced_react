import { useState } from "react";
import "./App.css";

import { ControlledModal } from "./components/modal/controlled-modal";

function App() {
  const [shouldBeDisplayed, setShouldBeDisplayed] = useState(false);
  return (
    <>
      <ControlledModal
        shouldBeDisplayed={shouldBeDisplayed}
        onClose={() => setShouldBeDisplayed(false)}
      >
        <h3>Body of Modal</h3>
      </ControlledModal>
      <button onClick={() => setShouldBeDisplayed((cur) => !cur)}>
        {shouldBeDisplayed ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );
}

export default App;
