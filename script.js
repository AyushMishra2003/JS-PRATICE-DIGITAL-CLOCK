setInterval(fun,1000)

function fun(){
    const hr=document.getElementById("hr")
    const min=document.getElementById("min")
    const sec=document.getElementById("sec")
    const mydate=document.getElementById("date")
    const month=document.getElementById("Month")
    const year=document.getElementById("year")
    // console.log(myHr.getTime())
    console.log(hr);   
    let myHr=new Date()
    let hour=myHr.getHours()
    let unit="am"
    if(hour>12)
    {
        hour=hour-12
        unit="pm"
    }
    hr.innerHTML=`${hour} :`
    min.innerHTML=`${myHr.getMinutes()} :`
    sec.innerHTML=`${myHr.getSeconds()} ${unit}`
    mydate.innerHTML=`${myHr.getDate()}-date`
    month.innerHTML=`${myHr.getMonth()}-month`
    year.innerHTML=`${myHr.getFullYear()}-year`
}