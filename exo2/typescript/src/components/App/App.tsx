import React from "react";
import AddOpinionForm from "../../components/AddOpinionForm/AddOpinionForm";
import OpinionsList from "../../components/OpinionsList/OpinionsList";
import ResetButton from "../../components/ResetButton/ResetButton";

const App = () => {
  return (
    <div>
      <OpinionsList />
      <AddOpinionForm />
      <ResetButton />
    </div>
  );
};

export default App;
