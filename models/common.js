var common = {
    insert: function(callback) {
        this.collection.insert(this.obj,
            function(err, doc) {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null, doc);
            })
    },
    find: function(obj, callback) {
        this.collection.find(obj,
            function(err, docs) {
                if (err) {
                    callback(err, null);
                    return;
                }
                callback(null, docs);
            })
    },
    findOne: function(obj, callback) {
        this.collection.findOne(obj).on('success',
            function(doc) {
                callback(doc);
            });
    },
    update: function(src, dst, callback) {
        this.collection.update(src, dst,
            function() {
                if (callback) callback()
            });
    }
}
module.exports = common;