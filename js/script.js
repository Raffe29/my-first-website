const el = document.querySelector("#text");
const text = "promover a inclusão social";
const interval = 300;

function showText(el, text, interval) {
    const char = text.spit("").reverse();
  const typer = setInterval(() => {

    if(!char.lenght){
        return clearInterval(typer);
    }

    const next = char.pop();
    el.innerHTML += next;
    
  }, (interval));

}

showText(el, text, interval);