import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { formatPriceToWon } from "../utils";

const Remaining = () => {
  const { expenses, income } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const totalIncome = income.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  const remainingBudget = totalIncome - totalExpenses;

  return (
    <div>
      <span>남은 돈: {formatPriceToWon(remainingBudget)}</span>
    </div>
  );
};

export default Remaining;
