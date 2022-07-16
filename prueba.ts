let cambiaso=document.getElementById("chanty");

cambiaso?.addEventListener( "click" , ()=>{
    let colorH1=Array.from(document.getElementsByClassName("bi"));

    for (let index:number=0;index<colorH1.length;index++){
        colorH1[index].style.display= "none";
    }
    

    // let visible=document.getElementsByClassName("bi");
    
    // visible.style.display = "none"


})