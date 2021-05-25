const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://oxy:1329@cluster0.rlwb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


class MongoConnection {
    client = null;

    async initialize() {
        if (this.db) {
            return this.db
        }
        const client = new MongoClient(uri, {
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            await client.connect();
            this.db = client.db("myFirstDatabase")
        } catch (e) {
            await client.close();
        }

        return this.db;
    }
}

module.exports = MongoConnection