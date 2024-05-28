import { formatPriceToWon } from "../utils";

const ViewBudget = ({ budget, setIsEditing }) => {
  return (
    <>
      <span>예산 : {formatPriceToWon(budget)}</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={setIsEditing(true)}
      >
        수정
      </button>{" "}
    </>
  );
};

export default ViewBudget;
