window.addEventListener('scroll',()=>{
    let content = document.querySelector('.section')
    let contentPosition =content.getBoundingClientRect().top;
    let screenPosition =window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active')
    }
})

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.section1')
    let contentPosition =content.getBoundingClientRect().top;
    let screenPosition =window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.section2')
    let contentPosition =content.getBoundingClientRect().top;
    let screenPosition =window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active')
    }
})