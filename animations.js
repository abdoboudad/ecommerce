document.documentElement.style.setProperty('--animate-duration', '2s');

document.querySelectorAll('.fe-box').forEach((a,t)=>{
    a.classList.add('animate__animated')
    a.classList.add('animate__flipInX')
})