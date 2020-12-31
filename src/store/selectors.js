export const getCurrentAdventure = store => {
    return store.adventure;
}

export const enemies = store => {
    return store.enemies.enemies
}

export const isEnemiesLoaded = store => {
    return !store.enemies.isFetching
}

export const searchResult = store => {
    return store.enemies.searchResult
}