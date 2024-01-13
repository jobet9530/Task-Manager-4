import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        editTask: function (id) {
          var self = this;

          var title = this.model.title;
          var description = this.model.description;
          var date = this.model.date;
          var status = this.model.status;

          this.store.findRecord('task', id).then(function (task) {
            task.set('title', title);
            task.set('description', description);
            task.set('date', new Date(date));
            task.set('status', status); 

            task.save();

            self.transitionToRoute('index');
          })
        }   
    }
})