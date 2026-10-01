document.querySelectorAll('.expression-container').forEach(container => {
    const total = container.querySelectorAll('.sprite img').length;
    let index = 1;

    container.querySelector('.left').onclick = () => {
        index = index - 1 || total;
        container.dataset.expr = index;
    };

    container.querySelector('.right').onclick = () => {
        index = index % total + 1;
        container.dataset.expr = index;
    };
});