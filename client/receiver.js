socket.on("colorE",function(color){
    ctx.strokeStyle=color;
})

socket.on("pencilDraw",function(undostack){
    for(var i=0;i<undostack.length;i++){
        
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
    
})
socket.on("stickyC",function(status){
    if(status==true){
        createSticky();
    }
})