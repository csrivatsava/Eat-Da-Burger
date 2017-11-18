// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var eatenState = $(this).text().trim();
        if (eatenState === "Eat Again"){
            var newBurgerState = {
                eaten: false
            };
        }else{
            var newBurgerState = {
                eaten: true
            };
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
                $("#burger").val("");                
            }
            );
    });

    $("#submitBtn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            eaten: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
                $("#burger").val("");
            }
            );
    });

   
});

