import DS from "@ember-data/model";
import { attr } from "@ember-decorators/data";

export default DS.Model.extend({
  title: attr("title"),
  description: attr("description"),
  date: attr("date"),
  status: attr("status"),

  created: DS.attr("string", {
    defaultValue: function () {
      return new Date();
    },
  }),
});
