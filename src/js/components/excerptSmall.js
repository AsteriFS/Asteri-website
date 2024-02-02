// excerpt career description to 24 characters
const excerptsSmall = Array.from(document.querySelectorAll(".excerpt-small"));

excerptsSmall.forEach(item => {
    item.innerText = item.innerText.slice(0, 40) + "...";
})
