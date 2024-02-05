// excerpt career description to 24 characters
const excerptsSmall = Array.from(document.querySelectorAll(".excerpt-small"));

excerptsSmall.forEach(item => {
    if (item.innerText.length > 40) {
        item.innerText = item.innerText.slice(0, 40) + "...";
    }
})
