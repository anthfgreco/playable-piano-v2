var pageNum = 0
var pageMax = 112
path = "images/"
const mainImg = document.getElementById("main-img");
const pageDisplay = document.getElementById("page-display");

setPage()

function pageForward() {
    if (pageNum == pageMax) pageNum = 0
    else pageNum++
    setPage()
}

function pageBack() {
    if (pageNum == 0) pageNum = pageMax
    else pageNum--
    setPage()
}

function setPage() {
    mainImg.src = `${path}${pageNum}.jpg`
    pageDisplay.innerHTML = `${pageNum+1}/${pageMax+1}`
}