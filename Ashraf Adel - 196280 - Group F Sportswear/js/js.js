                         //Home Page: transition from one image to another in index page 

$(document).ready(function () {
    $('#cf7_controls span').click(function () {
    $('#cf7 img').removeClass('opaque');
    var newImage = $(this).index();
    $('#cf7 img').eq(newImage).addClass('opaque');
    $('#cf7_controls span').removeClass('selected');
    $(this).addClass('selected');
    });
});


                            //Adults Sportswear products with images

$(document).ready(function () {
  var $selectbox = $("#selectbox");
  // get the image container and store it as '$imageContainer'
  var $imagecontainer = $(".images");
  // get the current image selection
  var selection = $selectbox.data("selected");
  
  // listen for when the selection changes...
  // when it does change, run our `changeImageSelection` function
  $selectbox.on("change", changeImageSelection);
  
  function changeImageSelection() {
    // change the `selection` variable to the selected option
    selection = $selectbox.val();
    // add a '.loading' class to the $imageContainer
    $imagecontainer.addClass("loading");
    // clear the $imageContainer's selected option
    $imagecontainer[0].dataset.selected = null;
  
    // set a timout of 1.5 seconds
    setTimeout(function() {
      // remove the '.loading' class from $imageContainer
      $imagecontainer.removeClass("loading");
      // add the currently selected option to $imageContainer
      $imagecontainer[0].dataset.selected = selection;
    }, 1500);
  }
});


                    // Gather Form Data and display it in confirmation modal
var user_name = "";
var email = "";
var address = "";
var product_choice = "";
var quantity = 0;
var total_price = 0;
function name_form() {
  user_name = $("#form_full_name").val();
  document.getElementById('display_name').innerHTML = "\n" + user_name;
}
function email_form() {
  email = $("#form_email").val();
  document.getElementById('display_email').innerHTML = "\n" + email;
}
function address_form() {
  address = $("#form_address").val();
  document.getElementById('display_address').innerHTML = "\n" + address;
}
function store_choice() {
  product_choice = document.getElementById("selectbox").value;
  document.getElementById('display_product').innerHTML = "\n" + product_choice;
}
function choice_quantity() {

  quantity = $("#quantity").val();
  document.getElementById('display_quantity').innerHTML = "\n" + quantity;
  
  function total_prodcuts_price() {
    if (product_choice.charAt(0) === "N") {total_price = 40;}
    else if (product_choice.charAt(0) === "J") {total_price = 30;}
    else if (product_choice.charAt(0) === "R") {total_price = 20;}
    total_price = total_price * quantity;
    document.getElementById('display_price').innerHTML = total_price;
  }
  
  total_prodcuts_price();

}

//disable page refreshment to be able to show modal
$('#form_adults').on('submit', function(e) {e.preventDefault();});




                                    // Form validation


  function submit_form() {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (user_name === ""  || email === "" || address === "" || product_choice === "") {
        alert('Please fill out all the fields!');
    }
    else if (!(regex.test(email))) {alert('Invalid Email!');}
    else if (quantity < 1  || quantity > 10) {alert("Quantity must be between 1 and 10!")}
    else {modal.style.display = "block";}}
  


                                      // Manipulating the modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("form_submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
window.onload = function() {
  span.onclick = function() {
    $('#myModal').fadeOut(500);
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    $('#myModal').fadeOut(500);
  }
}

// Return to home page upon confirmation
function confirm_and_return() {window.location.href = "../index.html";}

//footer contact us confirmation
function footer_contact_us() {alert('Your message has been sent. We will contact you soon!');}

