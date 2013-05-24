$(function() {
  tracker.app.renderBuffer().afterFlush().done(function() {
      $(".add_story").before("<p class='add_templated_story'>Add Templated Story</p>");
  });
});

function populateNewEditor() {
  console.log("populating");
  var editor = $(".story.new .editor.description");
  if (editor.val() !== "") return;

  $(".story.new label.description .resizer.markup").css("visibility", "hidden");
  editor.val("Who does this benefit?\n\nWhat needs to change?\n\nWhat are the acceptance criteria?");

  //TODO: trigger resize
}

$(".add_templated_story").click(function() {
  alert("OKAY");
  var initialNewStoryCount = $(".story.new").length;
  var checkingInterval;
  function checkIfNewStoryAdded() {
    console.log("checking");
    if ($(".story.new").length >= initialNewStoryCount) {
      window.clearInterval(checkingInterval);
      populateNewEditor();
    }
  }
  checkingInterval = window.setInterval(checkIfNewStoryAdded, 1000);

  //tracker.app.renderBuffer().afterFlush().done(populateNewEditor);
  $(".add_story").click();
});
