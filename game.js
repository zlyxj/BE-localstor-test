function getpoints()
{
  if(localstorage.x)
  {
  x=x.times(x)
  }
  else{
    localstorage.x=D(4)
  }
  document.getElementById("pts").innerHTML=x
}
function resetpoints()
