const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('modal--hidden');
}

document.querySelector('#showModal').addEventListener('click', toggleModal);

document.querySelector('#form-data').addEventListener('submit',(event) => {
    event.preventDefault();
    toggleModal();
});

document.querySelector('.modal__close-bar span').addEventListener('click', toggleModal);