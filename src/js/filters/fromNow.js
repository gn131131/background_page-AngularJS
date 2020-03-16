'use strict';

/* Filters */
// need load the moment.js to use this filter. 
export default function() {
  return function(date) {
    return moment(date).fromNow();
  }
}