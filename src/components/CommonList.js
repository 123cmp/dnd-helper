import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./CommonList.css"

export default function CommonList({ items, onAddItemClick }) {
    return <ListGroup className="common-list-wrapper">
        {items.map((item) => <ListGroup.Item key={ item.id }>
            { item.name }
        </ListGroup.Item>)}

        <ListGroup.Item
            className="add-item-button"
            onClick={ onAddItemClick }
        >
            Add item +
        </ListGroup.Item>
    </ListGroup>
}