document.getElementById("feedbackForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || rating === "" || message === "")
    {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("successMsg").innerText =
    "Thank you! Your feedback has been submitted.";

});