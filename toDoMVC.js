var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

$(document).ready(function() {
   var App = {
      init: function() {

      },
   };
   function setListeners() {
      $("#new-todo").on("keypress",function(evt) {
//         console.log("key selected: "+evt.which);
         if (evt.which == ENTER_KEY) {
            console.log("clicked enter_key");
         } else if (evt.which == ESCAPE_KEY) {
            console.log("clicked escape_key");
         } else {
            console.log("clicked some key");
         };
      });
      $("#listChevron").on("hover",function() {
         console.log("listChevron hover");
      });
      $("#listChevron").on("click",function() {
         console.log("listChevron click");
      });
      $("listEditable").on("",function() {});
      $("theListDisplay").on("",function() {});
      $("theList").on("",function() {});
      $("anItem").on("",function() {});
      $("itemCheckOff").on("",function() {});
      $("listItem").on("",function() {});
      $("clearFloat").on("",function() {});
      $("counterBar").on("",function() {});
      $("countDiv").on("",function() {});
      $("listCount").on("",function() {});
      $("displayFilter").on("",function() {});
      $("filterButton").on("hover",function() {
         console.log("filterButton hover");
      });
      $("filterButton").on("click",function() {
         console.log("filterButton click");
      });
      $("removeCompleted").on("hover",function() {
         console.log("removeCompleted click");
      });
      $("removeCompleted").on("click",function() {
         console.log("removeCompleted click");
      });
   };
   setListeners();
});