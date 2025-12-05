import React from "react";
import SimpleForm from "./Components/SimpleForm";
import FormAction from "./Components/FormAction";
import ControlledFilled from "./Components/ControlledFilled";
import UncontrolledField from "./Components/UncontrolledField";
import ProductManagement from "./Components/ProductManagement/ProductManagement";

const App = () => {
  return (
    <div>
      <ProductManagement/>
      <UncontrolledField/>
      <SimpleForm />
      <FormAction />
      <ControlledFilled />
    </div>
  );
};

export default App;
