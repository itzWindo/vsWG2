const container = document.querySelector('.expression-container');
const total = 13;
let index = 1;

document.getElementById('left').onclick = () => {
index = index - 1 || total;
container.dataset.expr = index;
};

document.getElementById('right').onclick = () => {
index = index % total + 1;
container.dataset.expr = index;
};