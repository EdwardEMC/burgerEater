//make sure we wait to attach handlers until the DOM is loaded
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim()
        };

        console.log(newBurger);
        
        $.ajax("/api", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger");

            location.reload();
        });
    });
});