const dietslist = [
    ["Ketogenic diet", 6, "nada","images/keto.jpg" ],
  ["Mediterranean diet", 7, "lea" , "images/meditterean.jpg" ],
   ["Gluten-free diet", 5, "mona", "images/lowfat.jpg"],
   ["Veganism", 8, "mariam", "images/carnivore.jpg"],
   ["Vegetarianis",12, "lyn", "images/caveman.jpg"]
   
   ] ; 

function fill() {

let select = document.getElementById("selection"); 
for(var i=0 ; i<dietslist.length ; i++) {
let dietoption = document.createElement("option"); 
dietoption.innerHTML = dietslist[i][0]; 
select.appendChild(dietoption);
} 
select.addEventListener("change", changeselection() ) ; 
}
function changeselection() {
    let select = document.getElementById("selection"); 
    select.selectedIndex ; 
}


function explain() {
    let weight  = document.getElementById("weight"); 
    let dob =document.getElementById("birthday"); 
    let age =document.getElementById("age");
    let dietplan =document.getElementById('dietplan'); 
    let payment = document.getElementById('amount'); 
    let choice = document.getElementById('selection'); 
    let image = document.getElementById('dietphoto'); 
    image.src = dietslist[choice.selectedIndex][3] ; 
   let gender = document.getElementById('gender').value; 
   if (gender == "female")
   var days = age.value*dietslist[choice.selectedIndex][1]*weight.value/100 ; 
   else  days = age.value*dietslist[choice.selectedIndex][1]*weight.value/200;
   console.log(days);
   dietplan.innerText= "your diet is going to be " + days + " days long, miss " + dietslist[choice.selectedIndex][2] + " is an experienced dietitian specialised in " + dietslist[choice.selectedIndex][0] +
   " and you can contact her after payment ";
    payment.innerText = "save 50% and get your full diet for only " + days*2 + " dolars !";
    let book = document.getElementById('bookinglink1'); 
    book.innerHTML = "book diet"; 
}