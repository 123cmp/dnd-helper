import React from "react";
import "./EnemiesPage.css"
import { connect } from "react-redux";
import { enemy, isEnemiesLoaded, searchResult } from "../../store/selectors";

function EnemyPage({match, enemy, isEnemiesLoaded}) {
    if(!isEnemiesLoaded) {
        return <div>Loading</div>
    }

    return <>
        <h1 className="title">
            <a href={enemy.link} target='_blank'>{enemy.name}</a>
        </h1>
        <p>{enemy.size}</p>
        <p>{enemy.ac}</p>
        <p>{enemy.hitPoints}</p>
        <p>{enemy.speed}</p>
        <p>{enemy.actions}</p>
    </>
}

const mapStateToProps = (store, ownProps) => ({
    enemy: enemy(store, ownProps.match.params.id),
    isEnemiesLoaded: isEnemiesLoaded(store),
    searchResult: searchResult(store)
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(EnemyPage)