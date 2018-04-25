function Teacher() {
    this.model = {
     
    }
    this.api = {
        new: '',
        update: '',
        list: '',
        destroy: '',
        show: '',
    }
    Model.call(this, this.model, this.api);
} 
Teacher.prototype = new Model();
