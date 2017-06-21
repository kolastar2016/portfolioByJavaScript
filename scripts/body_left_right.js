window.onload=function(){
  var menu=document.getElementById("menu");
    menu.onclick=function(event){
      var e=event||window.event;
      var tg=e.target;
        if(tg.id.substr(0,5).toLowerCase()==="btask");{
          changeTask(tg);
        }
    }
    

    function changeTask(tg){
      if(changeTask.currenttask!=undefined){
        changeTask.currenttask.style.display="none";
      }
        changeTask.currenttask=document.getElementById(tg.id.substr(1));
        changeTask.currenttask.style.display="block";
    }
} 