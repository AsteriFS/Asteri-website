// excerpt career description to 24 characters
const excerpts = Array.from(document.querySelectorAll(".excerpt"));

excerpts.forEach(item => {
    item.innerText = item.innerText.slice(0, 24) + "...";
})
