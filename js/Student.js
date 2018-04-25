function Student() {

    this.model = {

    };
    this.api = {
        new: '',
        update: '',
        list: '',
        destroy: '',
        show: '',
    }
  Model.call(this, this.model, this.api);

} 
Student.prototype = new Model();
