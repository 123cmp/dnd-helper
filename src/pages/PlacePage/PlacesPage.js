import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React, {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";
import {openModal} from "../../store/actionCreators";
import {connect} from "react-redux";
import {getAdventureLoaded, getPlaces} from "../../store/selectors";

function Places({
        places,
        isAdventureLoaded
    }) {

    if (!isAdventureLoaded) {
        return <></>
    }
    return <section className="enemies-list-wrapper">
        <h1 className="title">Места</h1>

        <Form inline className="enemies-list-search">
            <FormControl type="text" placeholder="Search"/>
        </Form>

        <ListGroup>
            {places.map(
                (place) => <ListGroup.Item key={place.name}>
                    <Link to={`places/${place.id}`}>
                        {place.name}
                    </Link>
                </ListGroup.Item>
            )}
        </ListGroup>

    </section>
}

const mapStateToProps = (store, ownProps) => ({
    places: getPlaces(store),
    isAdventureLoaded: getAdventureLoaded(store)
})

const mapDispatchToProps = (dispatch) => ({
    // openModal: (name) => dispatch(openModal(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Places);