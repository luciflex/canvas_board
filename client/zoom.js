let zoomin=document.querySelector(".zoomin");
let zoomout=document.querySelector(".zoomout");

zoomin.addEventListener("click",function(){
    ctx.scale(1.1,1.1);
    ctx.translate(-60,-20);
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
                
})
zoomout.addEventListener("click",function(){
    ctx.scale(0.9,0.9);
    ctx.translate(60,20);
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
                
})