$(function() {
    tracker.app.renderBuffer().afterFlush().done(function() {
        $(".add_story").before("<p class='add_templated_story'>Add Templated Story</p>");
    });
});

$(".add_templated_story").click(function() {
    tracker.app.renderBuffer().afterFlush().done(function() {
        var editor = $(".story.new .editor.description");
        if (editor.val() !== "") return;

        editor.val("Who does this benefit?\n\nWhat needs to change?\n\nWhat are the acceptance criteria?");
    });
    $(".add_story").click();
});
