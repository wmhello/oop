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
        app.$http.post(this.api.show, {id: id}).then(function(response) {
            app.content = response.data.data; 
         })
    },
    list: function(id) {
        console.log('父类显示列表方法');
    },
    create: function() {
        return this.model;
    },
    save: function(data,callback) {
       if (this.isNew) {
           this.new(data, callback)
       }
       if (this.isEdit) {
           this.update(data,callback);
       }
    },
    new: function(data, callback) {
          app.$http.post(this.api.new, data).then(function(response) {
           if (callback && typeof callback === 'function'){
               callback();
           }
        })
    },
    update: function(data, callback) {
        app.$http.post(this.api.update, data).then(function(response) {
            if (callback && typeof callback === 'function'){
                callback();
            }
         })
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