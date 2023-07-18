const media= window.matchMedia("(max-width:750px)");
const testos = document.querySelector(".testos");
const pagination = document.querySelector(".pagination");
let i = 0;
let x;
setInterval(()=>{
    // if(media.matches){
        i<testos.childElementCount-1
        ?i++
        :i=0
        x=(testos.scrollWidth/testos.childElementCount)*i
        testos.scrollTo({
            left:x,
            behavior:"smooth",
        })
        for (let i = 0; i < pagination.children.length; i++) {
            pagination.children[i].style.background="transparent"
        }
        pagination.children[i].style.background="#F3603C";
    // }
}, 1500)

const btn = document.querySelector(".navBtn");
const nav = document.querySelector(".M_nav");
const overlay = document.querySelector(".overlay")

const match = window.matchMedia("(max-width:750px)")

function closeNav(){
    nav.dataset.state="close"
    overlay.style.opacity="0"
    overlay.style.pointerEvents="none"
}

function openNav(){
    nav.dataset.state="open"
    overlay.style.opacity="1"
    overlay.style.pointerEvents="fill"
}

btn. addEventListener("click", (e)=>{
    if(match.matches===true){
        if(nav.dataset.state==="close"){
            openNav()
        }else{
            closeNav()
        }
    }
})
match.addEventListener("change", ()=>{
    closeNav()
})

document.body.addEventListener("click", (e)=>{
    if(e.target.matches(".overlay")){
        closeNav()
    }
})
window.addEventListener("scroll", ()=>{
    closeNav()
})

let isValid = /^\w+@[a-zA-Z]+[.][a-zA-Z]+$/g;
const input = document.querySelector("[type='text']");
const submit = document.querySelector("[type='button']")

submit.addEventListener("click", (e)=>{
    let validEm;
    isValid.test(input.value)===true
    ?validEm=true
    :validEm=false;
    if(validEm){
        input.value=""
        document.forms[0].classList.remove("error")
        alert("email is sent!")
    }else{
        input.value=""
        document.forms[0].classList.add("error")
    }
})
document.forms[0].addEventListener("submit", e=>{
    e.preventDefault()
})