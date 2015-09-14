$().ready(function() {
  $("form#new-do").submit(function(event) {
    event.preventDefault();

    var inputtedToDo = $("input#new-title").val();
    //var inputtedStatus = $("input#new-status").val();
    var newToDo = { newTitle: inputtedToDo };
    //debugger;
      $("ul#todos").append("<li><span class='todo'>" + newToDo.newTitle + "</span></li>");

      $(".todo").last().click(function() {
        $("#show-todo").show();
        $("#show-todo h2").text(newToDo.newTitle);

        //this deletes the last thing in the list
        //$(".todo").last().empty();

        $("span#completed-button").click(function() {
          debugger;
          $("ul#completed").append("<li><span class='completedtask'>" + newToDo.newTitle + "</span></li>");
          event.empty();
          debugger;
        });
      });

    $("input#new-title").val("");
    // $("input#new-status").val("");
  });
});
