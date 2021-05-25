import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import {getCurrentAdventure} from "../store/selectors";
import {changeAdventureName, closeModal, openModal} from "../store/actionCreators";
import {ADD_PLACE_MODAL} from "../constants";

function Header({
    currentAdventure,
    changeAdventureName,
    openPlaceModal
} ) {
    const buttonHandler = () => changeAdventureName("ASSDDAA");

    if(!currentAdventure) {
        return <></>
    }

    return (<Navbar bg="light" expand="lg">
        <NavDropdown title={currentAdventure.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
                <Navbar.Brand href="/">{currentAdventure.name}</Navbar.Brand>
            </NavDropdown.Item>
        </NavDropdown>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Общее</Nav.Link>
                <Nav.Link href="/maps">Карты</Nav.Link>
                <NavDropdown title="Места" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/places">Список</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/places/1">Место 1</NavDropdown.Item>
                    <NavDropdown.Item href="/places/2">Место 2</NavDropdown.Item>
                    <NavDropdown.Item href="/places/3">Место 3</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#" onClick={openPlaceModal}>Добавить место</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/enemies">Бестиарий</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button onClick={buttonHandler} variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}


const mapStateToProps = (state) => {
    return {
        currentAdventure: getCurrentAdventure(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeAdventureName: () => dispatch(changeAdventureName()),
    openPlaceModal: () => dispatch(openModal(ADD_PLACE_MODAL))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
