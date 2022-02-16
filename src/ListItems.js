import React from "react";
import './ListItems.css';
import { HiOutlineTrash } from 'react-icons/hi';
import FlipMove from "react-flip-move";

function ListItems(props) {
    const { items, updateItem, deleteItem } = props;
    const listItems = items.map((item, key) => {
        return (
            <div className="list" key={item.key}>
                <p>
                    {key + 1}.
                    <input 
                        type="text" 
                        id={item.key} 
                        value={item.text} 
                        onChange={(e) => {
                            updateItem(e.target.value, item.key)
                        }}
                    />
                    <span>
                        <HiOutlineTrash 
                            className="heroicons" 
                            onClick={() => deleteItem(item.key)}
                        />
                    </span>
                </p>
            </div>
        )
    })
    return(
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItems;