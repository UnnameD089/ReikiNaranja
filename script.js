document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
function showAlert() {swal("hola, esta es una alerta desde JavaScript");}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
})

/*veificar*/

var inputs = document.getElementsByClassName("formulario__input");

for (var i =0; i < inputs.length; i++) {
    inputs [i] .addEventListener ('keyup', function(){
        if(this.value.length>=1) {
            this.nextelementsibling.classList.add('fijar');
        } else {
            this.nextelementsibling.classList.remove('fijar');
        }
    
    })
}