export default class PlaceModel {
    constructor(model) {
        this.id = model._id || null;
        this.name = model.name;
        this.notes = model.notes;
        this.description = model.description;
        this.images = model.images;
        this.NPCs = model.NPCs;
        this.items = model.items;
        this.enemies = model.enemies;
    }
}