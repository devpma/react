import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { formatPriceToWon } from "../utils";

const IncomeTotal = () => {
  const { income } = useContext(AppContext);

  const total = income.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div>
      <span>총 수입: {formatPriceToWon(total)}</span>
    </div>
  );
};

export default IncomeTotal;
