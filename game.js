function getpoints()
{
   if(D(localStorage.x)){
   localStorage.x=D(localStorage.x).times(D(localStorage.x))  
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
