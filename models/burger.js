var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, cb) {
        orm.create("burgers", cols, function (res) {
            cb(res);
        });
    },
    update: function (condition, cb) {
        orm.update("burgers", condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
}