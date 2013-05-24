var templatedStoryInterval = window.setInterval(addTemplatedStoryButton, 200);

function addTemplatedStoryButton() {
  if ($(".add_story").length > 0) {
    window.clearInterval(templatedStoryInterval);
    $(".add_story").before("<button class='add_templated_story'>Add Templated Story</button>");

    $(".add_templated_story").click(templatedStoryClickHandler);
  }
}

function populateNewEditor() {
  console.log("populating");
  var editor = $(".story.new .editor.description");
  var template = "Who does this benefit?\n\nWhat needs to change?\n\nWhat are the acceptance criteria?";
  if (editor.val() !== "") return;
  console.log($._data($('#root')[0], 'events'));
  var resizer = $(".story.new label.description .resizer.markup");
  resizer.click(); //.css("visibility", "hidden");
  editor = $(".story.new .editor.description").val(template);
  resizer.text(template);

  //TODO: trigger resize

//  editor.trigger($.Event("keydown", {which: 65}));
//  editor.trigger($.Event("keypress", {which: 65}));
//  editor.trigger($.Event("keyup", {which: 65}));

  window.setTimeout(function() {
    console.log("timeout done");

    var e = jQuery.Event("focus");
    $(".story.new .editor.description").trigger(e);
    $(".story.new .editor.description").trigger("change");
    $(".story.new .editor.description").trigger("keydown");
    $(".story.new .editor.description").trigger("resize");
    $(".story.new .editor.description").trigger("paste");
  }, 3000);


//  editor.focus();
//  var e = jQuery.Event("keydown");
//  var f = jQuery.Event("keypress");
//  var g = jQuery.Event("keyup");
//
//  e.which = 65; // # Some key code value
//  f.which = 65;
//  g.which = 65;
//
//  editor.trigger(e);
//  editor.trigger(f);
//  editor.trigger(g);
//
//  e.which = 66;
//  f.which = 66;
//  g.which = 66;
//
//  editor.trigger(e);
//  editor.trigger(f);
//  editor.trigger(g);

}

function templatedStoryClickHandler() {
  var initialNewStoryCount = $(".story.new").length;
  var checkingInterval;

  function checkIfNewStoryAdded() {
    console.log("checking");
    if ($(".story.new").length >= initialNewStoryCount) {
      window.clearInterval(checkingInterval);
      console.log(tracker.app);
      populateNewEditor();
    }
  }

  checkingInterval = window.setInterval(checkIfNewStoryAdded, 200);

  $(".add_story").click();
}