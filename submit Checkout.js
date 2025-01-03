
const scriptURL = "https://script.google.com/macros/s/AKfycbyrE6za8TQtzfhR_OhcRkEUUB3KLcGVWYUKhZ5uBQvrez43KazCDQEW_EZBHXCMH9hp_g/exec"

let form = document.getElementById("form_contact");


form.addEventListener("submit" , (e) =>{
    e.preventDefault()

    fetch(scriptURL , {
       method: "POST",
       body: new FormData(form),
    })
    .then((response) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },10)
    })
    .catch((error) => console.error("error!" , error.message))
})