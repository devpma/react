import './ShoppingItem'
import './ShoppingItem.css'

const ShoppingItem = ({ list, handleEdit, handleDelete }) => {
    return (
    <>
        <li className='item'>
            <div className='info'>
                <span className='charge'>{list.charge}</span>
                <span className='count'>{list.count} 개</span>
            </div>
            <button className='edit-btn' onClick={() => handleEdit(list.id)}>수정</button>
            <button className='clear-btn' onClick={() => handleDelete(list.id)}>삭제</button>
        </li>
    </>
    )
}

export default ShoppingItem;
