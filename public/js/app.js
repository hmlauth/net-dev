$('#submit').on('click', function(){

    event.preventDefault();
    
    var firstName = $('#first-name').val().trim();
    var lastName = $('#last-name').val().trim();
    var item = $('#item').val().trim();
    var funQuestion = $("#fun-question").val().trim();
    var childhoodQuestion = $("#childhood-question").val().trim();
    var originQuestion = $(".origin-question").val().trim();
    
    myFunction();

    if(firstName !== "" && lastName !== "" && item !== "" && funQuestion !== "" && childhoodQuestion !== "" && originQuestion !== ""){
        $.post('/api/newAttendee', {
            firstName: firstName,
            lastName: lastName,
            item: item,
            funQuestion: funQuestion,
            childhoodQuestion: childhoodQuestion,
            originQuestion: originQuestion
        }).then(function(response){
            console.log(response)
        });
        
        setTimeout(function(){window.location = '/'}, 500);
        
    } else {
        $('#error-message').show()
    }    
})

 // SNACKBAR
 function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
//==============
