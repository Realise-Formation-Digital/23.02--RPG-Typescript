// const test: HTMLElement = document.getElementById('test')
const btnStartGame = document.getElementById('btn-start');
console.log('btn', btnStartGame);
btnStartGame.addEventListener('click', toggleModal);
/**
 * toggle function attr style modal
 * @returns string
 */
function toggleModal() {
    const modal = document.getElementById('myModal');
    console.log('modal', modal.style.display);
    if (modal.style.display === 'none') {
        return modal.style.display = 'block';
    }
    else {
        return modal.style.display = 'none';
    }
}
export {};
//# sourceMappingURL=index.js.map