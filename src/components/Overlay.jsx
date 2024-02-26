export default function Overlay() {

    document.addEventListener("mousemove", function(event) {
        const x = event.pageX - 10;
        const y = event.pageY - 10;
        const cursor = document.querySelector("#cursor");
        const stalker = document.querySelector("#stalker");


        if (cursor) {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }
        if (stalker) {
            stalker.style.left = x + "px";
            stalker.style.top = y + "px";
        }
    });
  return( 
    <>
    <span id="cursor"></span>
    <span id="stalker"></span>
    </>
  ) ;
}