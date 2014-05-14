var ENTER_KEY = 13;
var ESCAPE_KEY = 27;
var listCount = 0;
var completedCount = 0;
var Action = {
              id: 0,
              complete: false,
              description: ""};
var actions = [];

$(document).ready(function() {
   var App = {
      init: function() {
         $("#new-todo").focus;
      },
   };

   function saveLocal() {
      console.log("enter saveLocal:");
      var memStorageAsString = JSON.stringify(actions);
      console.log("   memStorageAsString: "+memStorageAsString);
      localStorage.setItem("todos", memStorageAsString);
   };

   function addToStorage(actionItem) {
      console.log("enter addToStorage");
      actions.push(actionItem);
      saveLocal();
   };

   function markCompleteInStorage(actionItem) {
      console.log("enter markCompleteInStorage");
      for (var i=0; i<actions.length; i++) {
         if ( actions[i].id === actionItem.id ) {
            actions[i].complete = actionItem.complete;
         }
      }
      saveLocal();
   };

   function removeFromStorage(actionItem) {
      console.log("enter removeFromStorage");
   };

   function findInStorage(actionItem) {
      console.log("enter findInStorage");

   };

   function uuid() {
/*jshint bitwise:false */
      var i, random;
      var uuid = "";

      for (i = 0; i < 32; i++) {
         random = Math.random() * 16 | 0;
         if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += "-";
         }
         uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
      }

      return uuid;
   };

   function addtoList(addItem) {
      var action = {
                    id: uuid(),
                    complete: false,
                    description: addItem,
                   };
      console.log("enter addtoList");
      var actionString = JSON.stringify(action);
      console.log("   do: "+actionString);
      addToStorage(action);
// add todo item to list
      $("#listTemplate li").clone(true).appendTo("#theList");
      $("#theList li").last().find(".listItem").text(action.description);
      $("#theList li").last().find(".itemID").text(action.id);
// update number of items in the list
      listCount += 1;
      console.log("   Count: "+listCount);
      $("#listCount").text(listCount);
      if (listCount === 1) {
         $("#listCountDescription").text(" todo item");
         $("#filterButtonAll").css({"font-weight":"bold"});
      } else {
         $("#listCountDescription").text(" todo items");
      };
// give the action object back to the caller
      return action;
   };

   function markDone(doneItem) {
      var action = {
                    id: doneItem.find(".itemID").text(),
                    complete: true,
                    description: doneItem.find(".listItem").text(),
                   };
      console.log("enter markDone: ");
      console.log("   Mark as complete:"+action.description );
// mark todo item complete in list
      doneItem.find(".itemID").text();
      doneItem.find(".itemCheckOff").css({"text-decoration":"line-through"});
      doneItem.find(".listItem").css({"text-decoration":"line-through"});
// increment and display complete count
      completedCount += 1;
      console.log("   Completed Count: "+completedCount);
      $("#removeCompleted span").text(completedCount);
// mark todo item complete in storage
      markCompleteInStorage(action);
   };

   function clearToDoList() {
      console.log("enter clearToDoList");
      $("#theList li").remove();
   };

   function displayAllToDoes() {
      console.log("enter displayAllToDoes");
      clearToDoList();
      for (var i=0; i<actions.length; i++) {
         var action = actions[i];
         $("#listTemplate li").clone(true).appendTo("#theList");
         $("#theList li").last().find(".itemID").text(action.id);
         $("#theList li").last().find(".complete").text(action.complete);
         $("#theList li").last().find(".listItem").text(action.description);
         if (action.complete) {
            $("#theList li").last().find(".itemCheckOff").css({"text-decoration":"line-through"});
            $("#theList li").last().find(".listItem").css({"text-decoration":"line-through"});
         };
      };
   };

   function displayActiveToDoes() {
      clearToDoList();
   };

   function displayCompletedToDoes() {
      clearToDoList();
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
/*      $("listEditable").on("",function() {});
      $("theListDisplay").on("",function() {});
      $("theList").on("",function() {});
      $("anItem").on("",function() {});               */
      $(".itemCheckOff").on("mouseenter",function() {
         $(this).css({"background-color":"#CDCDCD"});
      });
      $(".itemCheckOff").on("mouseleave",function() {
         $(this).css({"background-color":"white"});
      });
      $(".itemCheckOff").on("click",function() {
         markDone($(this).parent());
      });
/*      $("listItem").on("",function() {});
      $("clearFloat").on("",function() {});
      $("counterBar").on("",function() {});
      $("countDiv").on("",function() {});
      $("listCount").on("",function() {});
      $("displayFilter").on("",function() {});        */
      $(".filterButton").on("mouseenter",function() {
         console.log("filterButton begin hover");
         $(this).css({"background-color":"white"});
      });
      $(".filterButton").on("mouseleave",function() {
         console.log("filterButton end hover");
         $(this).css({"background-color":"#CDCDCD"});
      });
      $("#filterButtonAll").on("click",function() {
         $(this).css({"font-weight":"bold"});
         $("#filterButtonActive").css({"font-weight":"normal"});
         $("#filterButtonCompleted").css({"font-weight":"normal"});
         displayAllToDoes();
      });

      $("#filterButtonActive").on("click",function() {
         $(this).css({"font-weight":"bold"});
         $("#filterButtonAll").css({"font-weight":"normal"});
         $("#filterButtonCompleted").css({"font-weight":"normal"});
         displayActiveToDoes();
      });

      $("#filterButtonCompleted").on("click",function() {
         $(this).css({"font-weight":"bold"});
         $("#filterButtonAll").css({"font-weight":"normal"});
         $("#filterButtonActive").css({"font-weight":"normal"});
         displayCompletedToDoes();
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