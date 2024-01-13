import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    addTask: function () {
      var title = this.title;
      var description = this.description;
      var date = this.date;
      var status = this.status;

      var newTask = this.store.createRecord("task", {
        title: title,
        description: description,
        date: date,
        status: status,
      });

      newTask.save();

      this.setProperties({
        title: "",
        description: "",
        date: "",
        status: "",
      });
    },
  },
});
