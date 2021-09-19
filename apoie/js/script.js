function setDonation(c){
    document.getElementById("donation5").style.display = "none"
    document.getElementById("donation15").style.display = "none"
    document.getElementById("donationOth").style.display = "none"
    el = document.getElementById(c)
    el.style.display = "block"

    pos = el.offsetTop
    pos -= 10
    window.scrollTo({top: pos, behavior: 'smooth'});
}
function copyAndPast(n){
    navigator.clipboard.writeText("2278caaf-8210-4d42-943c-6114ce4aa2fc")
    el = document.getElementsByClassName("copied")[n-1]
    el.style.display = "inline-block"
    setTimeout(() => {
        el.style.display = "none"
    }, 1000);
}