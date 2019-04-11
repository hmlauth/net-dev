$('#submit').on('click', function(){

    event.preventDefault()
    
    var firstName = $('#first-name').val().trim();
    var lastName = $('#last-name').val().trim();
    var item = $('#item').val().trim();

    if(firstName !== "" && lastName !== "" && item !== ""){
        myFunction();
        $.post('/api/newAttendee', {
            firstName: firstName,
            lastName: lastName,
            item: item
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
