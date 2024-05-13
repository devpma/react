import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdEdit, MdDelete } from 'react-icons/md'


const ExpenseList = ({ expenses, clearItems, initialExpenses, handleDelete, handleEdit }) => {
    return (
        <>
            <ul className='list'>
            {initialExpenses.map(expense => {
            return (
                <ExpenseItem key={expense.id} expense={expense}
                handleDelete={handleDelete} handleEdit={handleEdit}
                />
            )
            })}
            </ul>
            {expenses.length > 0 ? 
            <button className='btn' onClick={() => clearItems}>
                목록 지우기
            </button>
            : null }
        </>
    )
}

export default ExpenseList;


