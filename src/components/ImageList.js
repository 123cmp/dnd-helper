import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./ImageList.css"
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function CommonList({ items, onAddItemClick }) {
    const firstHalf = items.slice(0, items.length / 2)
    const secondHalf = items.slice(items.length / 2)
    return <ListGroup className="image-list-wrapper">
        {
            secondHalf.map((item, i) => {
                const firstItem = <Image fluid src={item.src} rounded />;
                const secondItem = firstHalf[i] ? <Image fluid src={secondHalf[i].src} rounded /> : null;

                return (<ListGroup.Item key={ item.id }>
                    <Row>
                        <Col xs={6}>
                            {firstItem}
                        </Col>
                        <Col xs={6}>
                            {secondItem}
                        </Col>
                    </Row>
                </ListGroup.Item>)
            })
        }

        <ListGroup.Item
            className="add-item-button"
            onClick={ onAddItemClick }
        >
            Add image +
        </ListGroup.Item>
    </ListGroup>
}