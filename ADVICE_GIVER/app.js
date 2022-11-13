const advice = document.querySelector(".advice")
const btn = document.querySelector(".submit")


btn.addEventListener('click', function (name) {
    let url = "https://api.adviceslip.com/advice"
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data.slip.id);
        console.log(data.slip.advice);
    })
})
