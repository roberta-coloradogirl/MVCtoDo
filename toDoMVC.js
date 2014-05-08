var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

$(document).ready(function() {
   var App = {
      init: function() {

      },
   };
   function setListeners() {
      $("#new-todo").on("keyup",function(evt) {
//         console.log("key selected: "+evt.which);
         if (evt.which == ENTER_KEY) {
            console.log("clicked enter_key");
         } else if (evt.which == ESCAPE_KEY) {
            console.log("clicked escape_key");
         } else {
            console.log("clicked some key");
         };
      });
      $("#listChevron")
   };
   setListeners();
});