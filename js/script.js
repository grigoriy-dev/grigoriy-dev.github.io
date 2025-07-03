// Анимация мигающего курсора
document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    setInterval(() => {
        document.querySelector('.command:last-child span:last-child').textContent = 
            i++ % 2 ? '_' : ' ';
    }, 500);
});
