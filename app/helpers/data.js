import Ember from "ember";
import moment from "moment";

export function formatDate(params) {
  return moment(params[0]).format("MMMM Do YYYY");
}

export default Ember.Helper.helper(formatDate);
