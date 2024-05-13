import React from 'react'
import ShoppingItem from './ShoppingItem'

function ShoppingList({charge, count, list, handleEdit, handleDelete}) {
    return (
        <>
        <ul>
            {list.map(item => {
            return (
                <ShoppingItem key={item.id} list={item}
                handleDelete={handleDelete} handleEdit={handleEdit}
                />
            )
            })}
            </ul>
        </>
    )
}

export default ShoppingList
