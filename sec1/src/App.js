import { useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import { SiInternetexplorer } from "react-icons/si";

const App = () => {
  
  const [expenses, setExpenses] = useState([
      { id: 1, title: '콜라', count: 1},
      { id: 2, title: '빵', count: 4},
      { id: 3, title: '맥북', count: 3},
  ])
  const [title, setTitle] = useState("");
  const [expensesCount, setExpensesCount] = useState(0);
  const [id, setId] = useState('');
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false) 

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id)
    const { title, count } = expense;
    setTitle(title);
    setExpensesCount(count);
    setId(id);
    setEdit(true);
  }

  const handleAmount = (e) => {
    setExpensesCount(e.target.valueAsNumber);
  } 

  const handleCharge = (e) => {
    setTitle(e.target.value)
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter(expenses => expenses.id !== id)
    setExpenses(newExpense)
    handleAlert({type:"danger" , text:"아이템이 삭제되었습니다."})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && expensesCount > 0) {

      if (edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? { ...item, title, count:expensesCount } : item;
        })

        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
      } else {
        const newExpense = { id: crypto.randomUUID(), title, count:expensesCount }
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
      }
      setTitle("");
      setExpensesCount(0);
    } else {
      handleAlert({ type: "danger", text: "charge는 빈 값일 수 없으며 amount 값은 0보다 커야 합니다." });

    }
  }
  
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false})
    }, 7000)
  }

  const clearItems = () => {
    setExpenses([]);
  }

  return (
    <main className="main-container">
      <div className="sub-container">
        {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
        <h1>장바구니</h1>

        <div style={{ width:"100%", backgroundColor:"white", padding:"1rem" }}>
        {/* Expense form */}
        <ExpenseForm handleSubmit={handleSubmit} title={title} handleCharge={handleCharge} count={expensesCount} handleAmount={handleAmount}/>
        </div>

        <div style={{ width:"100%", backgroundColor:"white", padding:"1rem" }}>
        {/* Expense List */}
        <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} initialExpenses={expenses} handleDelete={handleDelete}/>
        </div>

        <div style={{ display:"flex", justifyContent:"start", marginTop:'1rem'}}>
          <p style={{ fontSize:"2rem" }}>
            총합계:
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.count);
              },0)}원
            </span>
          </p>
        </div>

        
      </div>
    </main>
  )
}

export default App;