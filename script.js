var date = new Date('May 26 2024 11:04:00');
function Counts(){
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;
    if(gap < 0){
        days = days + 7;
     hours = hours + 24;
     minutes = minutes + 60;
     seconds = seconds + 60;
    }else{
    
    }
    document.getElementById('d').innerText = days + ' Days'
    document.getElementById('h').innerText = hours + '  Hours'
    document.getElementById('m').innerText = minutes +' Minutes'
    document.getElementById('s').innerText = seconds + ' Seconds'
}


setInterval(Counts, 1000);