let fun = () =>{
    let d1=new Date ()
    let inp =new Date(document.getElementById("dat").value);

    let year = parseInt(d1.getFullYear() - inp.getFullYear());
    let month = parseInt(d1.getMonth() - inp.getMonth());
    let date =  parseInt(inp.getDate()-d1.getDate());

    if (month < 0 || (month === 0 && date<0)) {
        year--;
        month += 12;
    }

    if (date< 0) {
        month--;
        let prevMonthDate = new Date(d1.getFullYear(), d1.getMonth() -1, 0).getDate();
        date += prevMonthDate;
    }

    console.log(`Year: ${year}`);
    console.log(`Month: ${month}`);
    console.log(`Date: ${date}`);
    document.getElementById(`yr`).innerHTML=year
    document.getElementById("mon").innerHTML=month
    document.getElementById("day").innerHTML=date

}
document.getElementById("btn").addEventListener('click',fun)
