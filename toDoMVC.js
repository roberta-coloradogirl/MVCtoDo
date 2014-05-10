var ENTER_KEY = 13;
var ESCAPE_KEY = 27;
var listCount = 0;
var completedCount = 0;

$(document).ready(function() {
   var App = {
      init: function() {
         $("#new-todo").focus;
      },
   };

   function addtoList(item) {
      console.log("enter addtoList");
      console.log("   do: "+item);
      $("#listTemplate>li").clone().append("#theList");
/*      $(".listTemplate>li>span.itemCheckOff").clone().add(newLi);
      $(".listTemplate>li>span.listItem").clone().add(newLi);
      $(".listTemplate>li>span.removeItem").clone().add(newLi);
      console.log(newLi);
      newLi.append("theList");      */
      listCount += 1;
      $("#listCount").text(listCount);
   };

   function setListeners() {
      $("#new-todo").on("keypress",function(evt) {
//         console.log("key selected: "+evt.which);
         if (evt.which == ENTER_KEY) {
            console.log("clicked enter_key in #new-todo");
            addtoList($("input:text").val());
            $("input:text").val("");
         } else if (evt.which == ESCAPE_KEY) {
            console.log("clicked escape_key in #new-todo");
         } else {
            console.log("clicked some key");
         };
      });
      $("#listChevron").on("hover",function() {
         console.log("listChevron hover in #listChevron");
         this.background("silver");
      });
      $("#listChevron").on("click",function() {
         console.log("listChevron click in listChevron");
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
   App.init();
});