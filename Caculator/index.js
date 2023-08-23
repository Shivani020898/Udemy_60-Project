const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")
btnEl.addEventListener("click",calculateAge)

function calculateAge(){
   const birthdayValue = birthdayEl.value;
   if(birthdayValue === "")
    {
        alert("Please Enter Your Birthday")
    }
    else
    {
        const age = getAge(birthdayValue)
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
   

}
function getAge(birthdayValue){
    const currentDate = new Date();
    const Birthdate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - Birthdate.getFullYear();
    const month = currentDate.getMonth() - Birthdate.getMonth();
    if(month < 0 || (month === 0 && currentDate.getDate() < Birthdate.getDate()))
    {
        age--;
    }

    return age;
}