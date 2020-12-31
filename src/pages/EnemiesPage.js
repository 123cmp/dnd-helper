import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./EnemiesPage.css"
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { enemies, isEnemiesLoaded, searchResult } from "../store/selectors";
import { searchEnemy } from "../store/actionCreators";

const renderContent = (searchResult, isEnemiesLoaded) => {
    return isEnemiesLoaded && searchResult
        ? <ListGroup>
            {searchResult.slice(0, 10).map(
                (enemy) =>  <ListGroup.Item key={enemy.name}>{enemy.name}</ListGroup.Item>
            )}
        </ListGroup>
        : <div>Loading</div>
}


function EnemiesPage({searchResult, searchEnemy, isEnemiesLoaded}) {
    const handleSearchChange = (event) => searchEnemy(event.target.value);

    return  <section className="enemies-list-wrapper">
        <h1 className="title">Бестиарий</h1>

        <Form inline className="enemies-list-search">
            <FormControl onChange={handleSearchChange} type="text" placeholder="Search"/>
        </Form>

        {
            renderContent(searchResult, isEnemiesLoaded)
        }

    </section>
}

const mapStateToProps = (store) => ({
    enemies: enemies(store),
    isEnemiesLoaded: isEnemiesLoaded(store),
    searchResult: searchResult(store)
})

const mapDispatchToProps = (dispatch) => ({
    searchEnemy: (payload) => dispatch(searchEnemy(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EnemiesPage)