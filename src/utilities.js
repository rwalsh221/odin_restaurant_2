const removeChild = () => {
    const selector = document.querySelector('.content')

    while(selector.firstChild) {
        selector.removeChild(selector.lastChild);
    }
}

export default removeChild