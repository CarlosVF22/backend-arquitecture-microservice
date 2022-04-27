
const TABLE = 'user'

module.exports = function(injectedStore) {
    let store = injectedStore;
    if(!store) {
        const store = require('../../../store/dummy');
    }
    function list() {
        return store.list(TABLE)
    }

    function get(id) {
        return store.get(TABLE, id)
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }
        if (body.id) {
            user.id = body.id;
        }
        return store.upsert(TABLE, user);
    }
    return {
        list,
        get,
        upsert
    }
}