import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React, {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";

const defaultPlaces = {
    places: [
        {
            id: '1',
            name: 'place 1',
            notes: 'qwe',
            description: 'qwe',
        },
        {
            id: '2',
            name: 'place 2',
            notes: 'qwe',
            description: 'qwe',
        }
    ]
};


export default function Places() {
    const [ model, setModel ] = useState(defaultPlaces);
    const places = model.places;

    return  <section className="enemies-list-wrapper">
        <h1 className="title">Места</h1>

        <Form inline className="enemies-list-search">
            <FormControl type="text" placeholder="Search"/>
        </Form>

        <ListGroup>
            {places.map(
                (place) =>  <ListGroup.Item key={place.name}>{place.name}</ListGroup.Item>
            )}
        </ListGroup>

    </section>
}