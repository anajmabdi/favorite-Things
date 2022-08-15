  window.addEventListener("load", function(event){
  const form = document.getElementById("things");
  form.addEventListener("submit", submitInput);
});    

  function handleSubmission(event){
    const fav1=document.getElementById("favThing1").value.toLowerCase();
    const fav2=document.getElementById("favThing2").value.toLowerCase();
    const fav3=document.getElementById("favThing3").value.toLowerCase();
    const fav4=document.getElementById("favThing4").value.toLowerCase();
    console.log(fav1);

    favorites = [fav1, fav2, fav3, fav4];
    console.log("array working");
    return favorites;
};

function submitInput(event){
  event.preventDefault();
  favorites = handleSubmission();
}  

window.addEventListener("load", function(event){
  const form = document.getElementById("things");
  form.addEventListener("submit", submitInput);
});    