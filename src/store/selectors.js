export const getCurrentAdventure = store => {
    return store.adventure.adventures && store.adventure.adventures[0];
}

export const getAdventureLoaded = store => {
    return !store.adventure.isFetching;
}

export const getPlaces = store => {
    return store.adventure.places;
}

export const getPlace = (store, id) => {
    return store.adventure.places.find(
        place => place.id.replace("/", "") === id.replace("/", "")
    );
}

export const enemies = store => {
    return store.enemies.enemies
}

export const enemy = (store, id) => {
    return store.enemies.enemies.find(
        enemy => enemy.id.replace("/", "") === id.replace("/", "")
    )
}

export const isEnemiesLoaded = store => {
    return !store.enemies.isFetching
}

export const searchResult = store => {
    return store.enemies.searchResult
}

export const modalStatuses = store => {
    return store.adventure.modals
}