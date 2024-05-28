import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { Budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="alert alert-primary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget dispatch={dispatch} setIsEditing={setIsEditing} />
      ) : (
        <ViewBudget setIsEditing={setIsEditing} />
      )}
    </div>
  );
};

export default Budget;
