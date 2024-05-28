import React, { useState } from "react";

const EditBudget = ({ budget, setIsEditing, dispatch }) => {
  const [value, setValue] = useState(budget);

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <>
      <input
        required="required"
        type="number"
        className="form-control me-3"
        id="name"
        value={value}
        onClick={(e) => e.target.value}
      />
      <button
        type="button"
        className="btn btn-primary"
        style={{ minWidth: 55 }}
        onClick={handleSaveClick(value)}
      >
        수정
      </button>
    </>
  );
};

export default EditBudget;
