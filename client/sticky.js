function createSticky(){
    const body=document.querySelector("body");
    const stickyPad=document.createElement("div");
    const navBar=document.createElement("div");
    const writingPad=document.createElement("div");
    const textArea=document.createElement("textarea");
    const minimize=document.createElement("div");
    const closer=document.createElement("div");
    
    stickyPad.setAttribute("class","sticky");
    navBar.setAttribute("class","nav-bar");
    writingPad.setAttribute("class","writing-pad");
    textArea.setAttribute("class","textArea");
    minimize.setAttribute("class","navButton");
    closer.setAttribute("class","navButton");
    minimize.setAttribute("style","background-color:green");
    closer.setAttribute("style","background-color:red");
    writingPad.classList.add("show");
    
    body.appendChild(stickyPad);
    stickyPad.appendChild(navBar);
    stickyPad.appendChild(writingPad);
    writingPad.appendChild(textArea);
    navBar.appendChild(minimize);
    navBar.appendChild(closer);
    
    let isWritingpad=true;
    minimize.addEventListener("click",function(){
        if(isWritingpad==true){

            writingPad.classList.remove("show");
            isWritingpad=false;
        }
        else{
            writingPad.classList.add("show");
            isWritingpad=true;
        }
    })
    closer.addEventListener("click",function(){
        stickyPad.remove();
    })

    let isStickydown=false;
    let initialX=null;
    let initialY=null;
 navBar.addEventListener("mousedown",function(e){
     isStickydown=true;
     initialX=e.clientX;
     initialY=e.clientY;
})
 navBar.addEventListener("mousemove",function(e){
    if(isStickydown==true)
    {
       let finalX=e.clientX;
       let finalY=e.clientY;
       let diffX=finalX-initialX;
       let diffY=finalY-initialY;
       let { left, top }=navBar.getBoundingClientRect();
       stickyPad.style.top = top + diffY + "px";
       stickyPad.style.left= left + diffX + "px";
       initialY=finalY;
       initialX=finalX;
    }
})
 navBar.addEventListener("mouseleave",function(){
     isStickydown=false;
})
}