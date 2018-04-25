function Model (model, api) {
    this.page = 1;
    this.pageSize = 10;
    this.model = model;
    this.api = api;
    this.isNew = false;
    this.isEdit = false;
}

Model.prototype = {
    show: function (id) {
        console.log('父类显示记录方法');
    },
    list: function(id) {
        console.log('父类显示列表方法');
    },
    create: function() {
        return this.model;
    },
    save: function() {
        console.log('父类保存记录方法');
    },
    new: function() {
        console.log('父类新建记录方法');
    },
    update: function(id) {
        console.log('父类更新记录方法');
    },
    delete: function(id, callback) {
        app.$http.post(this.api.destroy, {id: id}).then(function(response) {
           if (callback && typeof callback === 'function'){
               callback();
           }
        })
    },
    getTable: function () {
        console.log(this.table);
    }
}