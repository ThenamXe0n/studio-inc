
        var MenuItems = document.getElementById('MenuItems');

        MenuItems.style.maxHeight = "0px";

        function menutoggle() {
            if (MenuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "800px";
            }
            else {
                MenuItems.style.maxHeight = "0px";
            }
        }


window.addEventListener('scroll', () => {
    let content = document.querySelector('.landing-page')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('landing-pageHide');
    } else {
        return
    }
},)

window.addEventListener('scroll', () => {

    let content = document.querySelector('.section')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('active');
    } else {
        content.classList.remove('active')
    }


})

window.addEventListener('scroll', () => {
    let content = document.querySelector('.section1')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('active');
    } else {
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.section2')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('active');
    } else {
        content.classList.remove('active')
    }
})



