
const scriptURL = "https://script.google.com/macros/s/AKfycbx-9ChZ_wbcajMoQqHBXl9s6ro69XJWvfin2mTojbi-6iqXqUSZTnTru3xentcpaydi/exec"

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
