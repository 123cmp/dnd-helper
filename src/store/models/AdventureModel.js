export default class AdventureModel {
    constructor(model) {
        this.name = model.name;
        this.description = model.description;
        this.notes = model.notes;
        this.id = model._id;
        this.images = model.images;
        this.places = model.places;
    }
}