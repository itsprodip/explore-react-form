import React from "react";
import SimpleForm from "./Components/SimpleForm";
import FormAction from "./Components/FormAction";
import ControlledFilled from "./Components/ControlledFilled";
import UncontrolledField from "./Components/UncontrolledField";

const App = () => {
  return (
    <div>
      <UncontrolledField/>
      <SimpleForm />
      <FormAction />
      <ControlledFilled />
    </div>
  );
};

export default App;
