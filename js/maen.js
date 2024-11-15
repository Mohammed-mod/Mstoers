  //  <!-- ------------ js for toggle menu--------- -->
var MenuItems = document.getElementById("MenuItems");
              MenuItems.style.maxHeight = "0px";
              function menutoggle(){
                  if(MenuItems.style.maxHeight == "0px")
                  {
                    MenuItems.style.maxHeight="200px";
                  }
                  else
                  {
                    MenuItems.style.maxHeight="0px";
                  }
              }


// ------- js toggel form--------

var LoginForm = document.getElementById("LoginForm");
var RgForm = document.getElementById("RgForm");
var In = document.getElementById("In");

function Register() {
  RgForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  In.style.transform = "translateX(150px)";
}

function Login() {
  RgForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  In.style.transform = "translateX(50px)";
}



// -----sengel product-------
// var ProductImg = document.getElementById("ProductPmg");
//         var SmollImg = document.getElementsByClassName("smoll-img");

//         SmollImg[0].onclick = function () {
//             ProductImg.src = SmollImg[0].src;
//         }

//         SmollImg[1].onclick = function () {
//             ProductImg.src = SmollImg[1].src;
//         }

//         SmollImg[2].onclick = function () {
//             ProductImg.src = SmollImg[2].src;
//         }

