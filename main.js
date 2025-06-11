function makeaarons(){
    for(let i = 0; i < 100;i++){
        let aaron = document.createElement('img');
        aaron.src = 'aaron.jpg';
        aaron.classList.add('aaron');
        let x = Math.random()*100;
        let y = Math.random()*100;
        aaron.style.top = y+'%';
        aaron.style.left = x+'%';
        aaron.onclick = function() { aaron.remove(); }
        setInterval(function() {
            let coin = Math.random();
            if (coin > 0.5) {
                x += Math.random() > 0.5 ? 10 : -10;
                aaron.style.left = x+'%';
            } else {
                y += Math.random() > 0.5 ? 10 : -10;
                aaron.style.top = y+'%';
            }
        } ,500)
        document.body.append(aaron);
    }
}

makeaarons();

let h = 0;
let m = 0;
let s = 0;

function tick() {
    s++;
    if (s == 60) { s = 0; m++; } 
    if (m == 60) { m = 0; h++ }
    document.querySelector('h1').textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

setInterval(tick, 1000);
