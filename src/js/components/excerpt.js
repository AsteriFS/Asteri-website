// excerpt career description to 24 characters
const excerpts = Array.from(document.querySelectorAll(".excerpt"));

excerpts.forEach(item => {
    if (item.innerText.length > 130) {
        item.innerText = item.innerText.slice(0, 130) + "...";
    }
})
