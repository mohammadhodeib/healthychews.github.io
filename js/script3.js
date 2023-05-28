

const herbs =  {named:'herbs' , calories:190 ,fat:10 , maxserving:70 , type:1 , v:1,m:2, contradiction:[], sc:'images/vegetables.jpg'};
 const garlic = {named:'garlic' , calories:20 , fat:70 , maxserving:20 ,type:3 ,v:1,m:1 ,contradiction:[] , sc:'images/garlic.jpg'} ;
 const creme = {named:'creme' ,calories:80 , fat:40 , maxserving:20 , type:2 ,v:1,m:1 ,contradiction:[], sc:'images/creme.jpg'};
 const wheat = {named:'wheat' ,calories:399 , fat:100 , maxserving:30 , type:5,v:1 ,m:1,contradiction:[], sc:'images/wheat.jpg'};
 const chicken = {named:'chicken' ,calories:133 , fat:200, maxserving:65, type:1,v:2 ,m:2,contradiction:[], sc:'images/chicken.jpg'};
 const tuna = {named:'tuna' ,calories:830 , fat:200, maxserving:65, type:1,v:2 ,m:2,contradiction:[], sc:'images/tuna.jpg'};
 const meat =  {named:'meat' ,calories:999 , fat:500, maxserving:65, type:1,v:2 ,m:1,contradiction:[], sc:'images/meat.jpg'};
 const olive =  {named:'olive' ,calories:44 , fat:120, maxserving:15, type:2,v:1,m:1 ,contradiction:[], sc:'images/olive.jpg'};
 const mayonaise = {named:'mayonaise' ,calories:55 , fat:500, maxserving:15, type:2,v:2,m:2, contradiction:[], sc:'images/mayonaise.jpg'};
 const tomato = {named:'tomato' ,calories:77 , fat:50, maxserving:30, type:2,v:1,m:1,contradiction:[], sc:'images/tomato.jpg'};
 const salt = {named:'salt' ,calories:3 , fat:1, maxserving:3, type:4,v:1,m:1, contradiction:[], sc:'images/saltpinch.jpg'};
 const dough = {named:'dough' ,calories:700 , fat:15, maxserving:27, type:5,v:1,m:1 , contradiction:[], sc:'images/dough.jpg'};
 const basil = {named:'basil' ,calories:70 , fat:15, maxserving:10, type:3,v:1 ,m:1, contradiction:[], sc:'images/basil.jpg'};

var arrayfood = [herbs , garlic , creme , wheat ,chicken, tuna , meat,  olive , 
mayonaise , tomato , salt , dough  , basil ] ; 

herbs.contradiction = [olive] ;
garlic.contradiction= [mayonaise,meat]; 
creme.contradiction= [tuna]; 
wheat.contradiction= [dough]; 
chicken.contradiction=[tuna, meat]; 
tuna.contradiction = [chicken,meat,basil]; 
meat.contradiction= [tuna, chicken ,garlic]; 
olive.contradiction=[salt]; 
mayonaise.contradiction=[garlic]; 
tomato.contradiction=[tuna]; 
salt.contradiction=[olive]; 
dough.contradiction=[wheat]; 
basil.contradiction=[tuna]; 

var postfinalclone = []; 
var meatarray = [] ; 
var veganarray = [] ; 



function changeselection() {
    let mealtype = document.getElementById('mealtype');     
     mealtype.selectedIndex ; 
}
function changeselection1 () {
    let restriction = document.getElementById('restriction'); 
    restriction.selectedIndex ; 
}
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
function calorisator(postfinalclone, cal) { 
    var rest = 200 ;   
     rest  = cal  ;    
    var firsttype = 0 ; 
    var secondtype =0 ; 
    var thirdtype = 0 ; 
    var fourthtype =0 ; 
    var fifthtype = 0 ; 
    var itiration =0 ; 
    var counter = 0 ; 
   var portion = 0 ; 

    while (rest>0) {    
    for (var i=0; i<5; i++) { 
      
      portion=0 ; 
     var maxi = postfinalclone[i].maxserving; 
     if(i==0)
     portion =  cal*maxi/postfinalclone[i].calories*0.3/100;
      if(i==1)
      portion =   cal*maxi/postfinalclone[i].calories*0.1/100;
         if(i==2)
      portion =   cal*maxi/postfinalclone[i].calories*0.05/100;
         if(i==3)
      portion =   cal*maxi/postfinalclone[i].calories*0.01/100;
         if(i==4)
      portion =   cal*maxi/postfinalclone[i].calories*0.2/100;
      rest-=portion; 
      
    if (i==0)  firsttype+=portion ;  
    if (i==1)  secondtype+=portion ; 
    if (i==2)  thirdtype+=portion ; 
    if (i==3)  fourthtype+=portion ; 
    if (i==4)  fifthtype+=portion ; 
    if (rest<0) break ; 
    itiration++ ; 

   }}
   var sum =firsttype+ secondtype+ thirdtype + fourthtype + fifthtype ; 
   if (sum>cal) {
   fifthtype -= cal-sum ; 
   }
   var typeoneweight = firsttype
   return [ firsttype, secondtype, thirdtype , fourthtype , fifthtype] ; 


 } 



function composer () { 
let mealtype = document.getElementById('mealtype');
mealtype.addEventListener("change", changeselection() ) ;
let calories = document.getElementById('calories') ; 
let restriction= document.getElementById('restriction'); 
restriction.addEventListener("change", changeselection1() ) ;
let suggestion = document.getElementById('suggestion1') ;
var img1 = document.getElementById('first'); 
var img2 = document.getElementById('second');
var img3 = document.getElementById('third');
var img4 = document.getElementById('fourth');
var img5 = document.getElementById('fifth');
var portion1 = document.getElementById('portion1'); 
var portion2 = document.getElementById('portion2'); 
var portion3 = document.getElementById('portion3'); 
var portion4 = document.getElementById('portion4'); 
var portion5 = document.getElementById('portion5'); 




if (mealtype.selectedIndex == 0) {        
    for(var i=0 ; i<arrayfood.length ;i++) {
    var w = arrayfood[i].v ; 
        if (w ==1) 
        veganarray.push(arrayfood[i]); }
        for(var o=0 ; o<veganarray.length; o++)


for(var i=0 ; i<veganarray.lenght; i++)  {         
if (veganarray[i].named ==  restriction.value) { veganarray.splice(i,1) ;i-- ;}
}  


let typeonevegan = []; 
let typetwovegan = []; 
let typethreevegan= []; 
let typefourvegan=[]; 
let typefivevegan =[]; 

  
for(var i=0 ; i<veganarray.length ; i++) { 
    if(veganarray[i].type ==1) typeonevegan.push(veganarray[i]); 
    if(veganarray[i].type ==2) typetwovegan.push(veganarray[i]) ; 
    if(veganarray[i].type ==3) typethreevegan.push(veganarray[i]) ; 
    if(veganarray[i].type ==4) typefourvegan.push(veganarray[i]); 
    if(veganarray[i].type ==5) typefivevegan.push(veganarray[i]);
}


let postfinal = [] ;

 postfinal.push(getRandomItem(typeonevegan)) ;
 postfinal.push(getRandomItem(typetwovegan)) ; 
 postfinal.push(getRandomItem(typethreevegan)) ; 
 postfinal.push(getRandomItem(typefourvegan)) ; 
 postfinal.push( getRandomItem(typefivevegan)); 
 var result = "as a main component we chose for you " + postfinal[0].named +
 "with " + postfinal[1].named +" on top for better taste that will bee even better with " +
 postfinal[2].named + " a small pinch of " + postfinal[3].named + " as carbs you will need some "
 + postfinal[4].named  ; 


suggestion.innerText = result ;  

img1.src=postfinal[0].sc; 
img2.src = postfinal[1].sc; 
img3.src = postfinal[2].sc ; 
img4.src = postfinal[3].sc; 
img5.src =postfinal[4].sc ; 

postfinalclone = postfinal ; 
var portionsarray = calorisator(postfinal , calories.value);  

portion1.innerHTML = portionsarray[0]; 
portion2.innerHTML = portionsarray[1]; 
portion3.innerHTML = portionsarray[2]; 
portion4.innerHTML = portionsarray[3]; 
portion5.innerHTML = portionsarray[4]; 
}



else if (mealtype.selectedIndex==1)    {  
 for(var i=0 ; i<arrayfood.length ;i++) {
    var t = arrayfood[i].m ; 
        if (t ==1) 
    meatarray.push(arrayfood[i]); }
        console.log(meatarray); 

var res = restriction.value; 
for (var j=0 ; j<meatarray.length ; j++ ) { 
var miti = meatarray[j].named.toString(); 
 

}



let typeonemeat = []; 
let typetwomeat = []; 
let typethreemeat= []; 
let typefourmeat=[]; 
let typefivemeat =[]; 

  
for(var i=0 ; i<meatarray.length ; i++) { 
    if(meatarray[i].type ==1) typeonemeat.push(meatarray[i]); 
    if(meatarray[i].type ==2) typetwomeat.push(meatarray[i]) ; 
    if(meatarray[i].type ==3) typethreemeat.push(meatarray[i]) ; 
    if(meatarray[i].type ==4) typefourmeat.push(meatarray[i]); 
    if(meatarray[i].type ==5) typefivemeat.push(meatarray[i]);
}


let postfinal = [] ;

 postfinal.push(getRandomItem(typeonemeat)) ;
 postfinal.push(getRandomItem(typetwomeat)) ; 
 postfinal.push(getRandomItem(typethreemeat)) ; 
 postfinal.push(getRandomItem(typefourmeat)) ; 
 postfinal.push( getRandomItem(typefivemeat)); 
 var result = "as a main component we chose for you " + postfinal[0].named +
 " with " + postfinal[1].named +" on top for better taste that will bee even better with " +
 postfinal[2].named + " a small pinch of " + postfinal[3].named + "and as carbs you will need some "
 + postfinal[4].named  ; 


suggestion.innerText = result ;  

img1.src= postfinal[0].sc; 
img2.src = postfinal[1].sc; 
img3.src = postfinal[2].sc ; 
img4.src = postfinal[3].sc; 
img5.src =postfinal[4].sc ; 

postfinalclone = postfinal ; 
var portionsarray = calorisator(postfinal , calories.value);  

portion1.innerHTML = portionsarray[0]; 
portion2.innerHTML = portionsarray[1]; 
portion3.innerHTML = portionsarray[2]; 
portion4.innerHTML = portionsarray[3]; 
portion5.innerHTML = portionsarray[4]; 
}
}
   

