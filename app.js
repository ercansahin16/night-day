
let changeText=()=>{
    var buton=document.getElementById("butons")
    var tema=document.getElementById("tema")
    var icons=document.getElementById("icon")
    var content=document.getElementById("content")

    

    if( icons.className==="fa-regular fa-sun"){
        // Gündüz  modu
        tema.classList.replace("bg-dark", "bg-light");
        icons.className = "fa-regular fa-moon";
        buton.classList.replace("btn-light", "btn-dark");
        content.classList.replace("text-light", "text-dark");
        
    }else{
        // Gece Modu
  

        tema.classList.replace("bg-light", "bg-dark");
        icons.className = "fa-regular fa-sun";
        buton.classList.replace("btn-dark", "btn-light");
        content.classList.replace("text-dark", "text-light");
       
    }
   
}
