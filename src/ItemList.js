import React from 'react'

const ItemList = ({ handleDelete, handleCheck, items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    <button
                        onClick={() => handleDelete(item.id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ItemList
