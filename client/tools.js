let isActive="pencil";
let pencilOptions=document.querySelector(".pencil-options");
let eraserOptions=document.querySelector(".eraser-options");
let undoer=document.querySelector(".undo-img");
let redo=document.querySelector(".redo-img");
// let resize=document.getElementById("ps1");

function handler(tool){
    if(tool=='pencil'){
     if(isActive=="pencil"){
         pencilOptions.classList.add("show");
     }
     else{
         isActive='pencil';
         eraserOptions.classList.remove("show");
        }  
     ctx.strokeStyle="black";
     ctx.lineWidth=5;
    }  

    else if(tool=='eraser'){
     if(isActive=="eraser"){
         eraserOptions.classList.add("show");
     }
     else{
         isActive='eraser';
         pencilOptions.classList.remove("show"); 
        }
     ctx.strokeStyle="white";
     ctx.lineWidth=10;
    }
    else if(tool=='sticky'){
        createSticky();
        socket.emit("sticky",true);
    }
    // else if(tool=='undo')
    // {
    //     undo();
    // }
    // else if(tool=='redo')
    // {
    //     redo();
    // }
}
function colorP(color)
{
    
     ctx.strokeStyle=color;
    socket.emit("color",color);
}
let last=[];

undoer.addEventListener("mousedown",function(){
    interval =setInterval(function(){
        {   
            if(undostack.length>1){
                last.push(undostack.pop());
            }
            ctx.clearRect(0,0,board.width,board.height);
            for(var i=0;i<undostack.length;i++)
            {
                let {pointx,pointy,type,color}=undostack[i];
                ctx.strokeStyle=color;
                if(type=="start")
                {
                    ctx.beginPath();
                    ctx.moveTo(pointx,pointy);
                }
                if(type=="move")
                {
                    ctx.lineTo(pointx,pointy);
                    ctx.stroke();
                }
            }
        
        }    
    },50)   
})
undoer.addEventListener("mouseup",function(){
    clearInterval(interval);
})
redo.addEventListener("mousedown",function(){
    interval2=setInterval(function(){
        for(var i=last.length-1;i>=0;i++)
        {
            let {pointx,pointy,type,color}=last[i];
            ctx.strokeStyle=color;
            if(type=="start")
            {
                ctx.beginPath();
                ctx.moveTo(pointx,pointy);
            }
            if(type=="move")
            {
                ctx.lineTo(pointx,pointy);
                ctx.stroke();
            }
            undostack.push(last.pop());
        }
    
    },50)
})
redo.addEventListener("mouseup",function(){
    clearInterval(interval2);
})
    // ctx.lineTo(pointx,pointy);
    // ctx.stroke();