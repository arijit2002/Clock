
setInterval(displayTime, 1000);
function displayTime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let dd=date.getDate();
    let years=date.getFullYear();
    let month=date.getMonth()+1;
    let duration="AM";
    if(hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        duration="PM";
    }
    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;

    let time=hours+":"+minutes+":"+seconds+" "+duration;
    document.getElementById("clock").innerHTML=time;

    let date_format=dd+"/"+month+"/"+years;
    document.getElementById("india").innerHTML=date_format;
}
displayTime();