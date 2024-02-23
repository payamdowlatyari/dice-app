export default function Overlay() {

    document.addEventListener("mousemove", function(event) {
        const x = event.pageX - 10;
        const y = event.pageY - 10;
        const cursor = document.querySelector("#cursor");

        if (cursor) {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }
    });

  return <div id="cursor"/> ;
}