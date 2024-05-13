import React from 'react'
import './ShoppingForm.css'

function ShoppingForm({handleListUpdate, handleCharge, handleCount, charge, count}) {
    return (
        <>
            <div className="form-control">
                상품명
                <input name='charge' id='charge' value={charge} onChange={handleCharge}/>
            </div>
            <div className="form-control">
                수량
                <input type="number" name='count' id='count' value={count} onChange={handleCount}/> 개
            </div>
            <button type='submit' onClick={handleListUpdate}>
                제출
            </button>
        </>
    )
}

export default ShoppingForm
