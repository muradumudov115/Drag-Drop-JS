let box=document.querySelector(".box");
let dragArea=document.querySelector(".drag-area")

    let id;
    box.ondragstrat=()=>{
    id=document.getElementById("drag").getAttribute("id");
    console.log(id);
}

    box.ondragend=()=>{
    console.log("dragend");
}

    box.ondrag=()=>{
    console.log("on drag");
}


    dragArea.ondragenter=()=>{
    console.log("enter drag");
}

    dragArea.ondragover=(e)=>{
    e.preventDefault();
    console.log("drop over");
}
   
  dragArea.ondrop=function () {
  let dragElement=document.getElementById(id); 
  dragArea.appendChild(dragElement);

       
   }



