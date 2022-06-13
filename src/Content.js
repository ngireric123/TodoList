import React from 'react';
import ItemList from './ItemList';
// import { FaTrashAlt } from "react-icons";

const Content = ({ handleDelete, handleCheck, items }) => {


    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                    <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
                )
            }
        </main >
    )
}

export default Content
