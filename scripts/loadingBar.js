
const kine = document.getElementById('kinetic')        
        
function createLoad()
{
    const k = document.createElement('div')
    kine.appendChild(k)
    k.classList.add('kinetic')
} 
function removeLoad()
{
    kine.remove()
} 
/*
for (let i=0 ; i<13; i++)
{
    setInterval(createLoad())  
}
*/

/*//////////////////////////////////////////////////////////////////////////// */


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        createLoad()
        elem.innerHTML=""
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}