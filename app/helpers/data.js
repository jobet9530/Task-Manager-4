import Ember from "ember";

export function formatDate(params) {
  return moment(params[0]).format("MMMM Do YYYY");
}

export default Ember.Helper.helper(formatDate);
