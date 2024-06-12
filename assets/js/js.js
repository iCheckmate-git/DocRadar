$(document).ready(function(){

    
const faq_links = document.querySelectorAll('.list-item-link');

faq_links.forEach(item => {
    item.addEventListener('click', function(e) {
        this.classList.toggle('active');
        const content = this.parentNode.querySelector('.content');

        content.classList.toggle('active')
    });
});

const img1 = document.querySelector('.before');
const img2 = document.querySelector('.after');

// Устанавливаем начальные src для изображений
let img1Src = img1.src;
let img2Src = img2.src;

// Функция для замены изображений с эффектами fade-in и fade-out
function switchImages() {
    // Удаляем классы fade-in и fade-out, если они есть
    img1.classList.remove('fade-in', 'fade-out');
    img2.classList.remove('fade-in', 'fade-out');

    // Добавляем класс fade-out к обоим изображениям
    img1.classList.add('fade-out');
    img2.classList.add('fade-out');

    // Ждем завершения анимации fade-out перед сменой src и добавлением fade-in
    setTimeout(() => {
        // Меняем src у изображений
        const tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;

        // Удаляем класс fade-out и добавляем fade-in к обоим изображениям
        img1.classList.remove('fade-out');
        img2.classList.remove('fade-out');
        img1.classList.add('fade-in');
        img2.classList.add('fade-in');
    }, 500); // 500 мс должно соответствовать времени анимации fade-out в CSS
}

// Добавляем класс fade к изображениям
img1.classList.add('fade');
img2.classList.add('fade');

// Запускаем смену изображений каждые 5 секунд
setInterval(switchImages, 5000);


const safer_btn = document.querySelectorAll('.safer_btn');

safer_btn.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
    
        const modal_safer = document.querySelector('.modal.safer');
        const overlay = document.querySelector('.overlay');
        modal_safer.classList.add('active');
        overlay.classList.add('active');
    
        const close = modal_safer.querySelector('.close');
        close.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.remove('active');
            modal_safer.classList.remove('active');
        });
    });
})


const org_btn = document.querySelectorAll('.org_btn');

org_btn.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
    
        const modal_org = document.querySelector('.modal.organiz');
        const overlay = document.querySelector('.overlay');
        modal_org.classList.add('active');
        overlay.classList.add('active');
    
        const close = modal_org.querySelector('.close');
        close.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.remove('active');
            modal_org.classList.remove('active');
        });
    });
})


})