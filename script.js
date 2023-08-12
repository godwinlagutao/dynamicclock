let section = document.querySelector("section"),
icons = document.querySelector("section");

icons.onclick = ()=>{
    section.classList.toggle ("dark");
}

// creating a function and calling it in every seconds

setInterval(()=>{

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; // if hour is smaller than 12 it's value will be in AM, if less, then 12 will be subtracted from the value
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 0 : hour;

    console.log(min);

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;

},1000); // 1000 milliseconds = 1s