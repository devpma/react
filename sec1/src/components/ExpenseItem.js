import './ExpenseItem.css'
import { MdEdit, MdDelete } from 'react-icons/md'


const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  return (
    <div>
      <li className='item'>
        <div className='info'>
        <span className='expense'>{expense.title}</span>
        <span className='amount'>{expense.count} 개</span>
        </div>
        <button className='edit-btn' onClick={() => handleEdit(expense.id)}>
          <MdEdit />
        </button>
        <button className='clear-btn' onClick={() => handleDelete(expense.id) }>
          <MdDelete />
        </button>
      </li>
      
    </div>
  )
}

export default ExpenseItem;
