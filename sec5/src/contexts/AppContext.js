import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload], //하나만 추가 action.payload에 들어있음 (얕은복사진행)
      };
    case "DELETE_EXPENSE":
      return {
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      break;
  }
};

const initialState = {
  budget: 30000,
  expenses: [
    { id: crypto.randomUUID(), name: "밥먹기", cost: 1000 },
    { id: crypto.randomUUID(), name: "카드비", cost: 3000 },
    { id: crypto.randomUUID(), name: "교통비", cost: 2000 },
  ],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
      {...props}
    />
  );
};
