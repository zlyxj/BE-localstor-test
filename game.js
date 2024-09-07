function getpoints()
{
   if(localStorage.x){
   localStorage.x=localSotrage.x.times(D(localStorage.x))  
  document.getElementById("pts").innerHTML=localStorage.x
}
else{
   localStorage.x=new D(2)
}
}
function resetpoints()
{
  localStorage.x=new D(2)
}
