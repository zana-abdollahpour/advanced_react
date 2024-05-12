import { useState } from "react";
import { ControlledFlow } from "./components/flow/controlled-flow";
// import { UncontrolledFlow } from "./components/flow/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => goNext({ name: "TestName" })}>goNext</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: 23 })}>goNext</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3: Enter your country</h1>
      <button onClick={() => goNext({ country: "Poland" })}>goNext</button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 ? <StepThree /> : null}
      </ControlledFlow>

      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Onboarding Flow Done!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}
    </>
  );
}

export default App;
