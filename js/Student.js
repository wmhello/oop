function Student() {

    this.model = {
        test1: '',
        test2: '',
        test3: '',
        test4: '',
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
