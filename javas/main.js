console.log("s");

function change(selectedValue){
    var pourcentage =selectedValue.value;
    document.getElementById('text').style.fontSize = pourcentage ;

}
function police(selectedValue){
   var grandeur =selectedValue.value;
   
   document.getElementById('text').style.fontFamily=grandeur;
}

function color(selectedValue){
   var coloir =selectedValue.value;
   
   document.getElementById('text').style.color=coloir;

}
function quali(selectedValue){
    var qual=selectedValue.value;
    // console.log(selectedValue , selectedValue.value)
    document.getElementById('text').style.textDecoration=qual;
}

function gra(selectedValue){
    var gras =selectedValue.value;
    
    document.getElementById('text').style.fontWeight=gras;
 
 }