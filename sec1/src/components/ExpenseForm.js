import './ExpenseForm.css';

const ExpenseForm = ({ title, handleCharge, count, handleAmount,handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>상품</label>
                    <input type="text" className='form-control' id='name' name='title' placeholder='예) 콜라' value={title} onChange={handleCharge} />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>개</label>
                    <input type="number" className='form-control' id='amount' name='amount' placeholder='예) 100' value={count} onChange={handleAmount} />
                </div>
            </div>
            <button type="submit" className='btn' onClick={handleSubmit}>제출</button>
        </form>
    )
}


export default ExpenseForm;