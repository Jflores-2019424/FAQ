const btn = document.querySelectorAll(".btn")

btn.forEach(toggle =>{
    toggle.addEventListener('click', ()=>{
        toggle.parentNode.classList.toggle('active')
    })
})