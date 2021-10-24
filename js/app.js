const navbar = document.querySelector(".navbar");
const chooseItem = document.querySelectorAll(".choose-item");
const voteItem = document.querySelectorAll(".vote-item");
const dotList = document.querySelectorAll(".vote-dot");
const voteList = document.querySelector(".vote-list");
let index = 0;
const tabNext = document.querySelector(".tabnext");
const tabPrev = document.querySelector(".tabpre");
// xu li khi click vao choose Item
Array.from(chooseItem).forEach(item => item.addEventListener("click", function(e) {
    if(item.classList.contains("highligh-border")) {
        item.classList.remove("highligh-border");
        return;   
    }   
    [...chooseItem].forEach(item => item.classList.remove("highligh-border"));
    item.classList.add("highligh-border");
}))  

//Xu khi khi click vao vote item
Array.from(voteItem).forEach(item => item.addEventListener("click" , function(e) {
    if(item.classList.contains("highligh-border")) {
        item.classList.remove("highligh-border");
        return;   
    }   
    [...voteItem].forEach(item => item.classList.remove("highligh-border"));
    item.classList.add("highligh-border");
}))

// Xu li khi click vao cac dots
Array.from(dotList).forEach(item => item.addEventListener("click" , function(e) {
    let indexName = item.getAttribute("name") - 1;
    index = indexName;
    let trans = -82 * indexName;
    [...dotList].forEach(item => item.classList.remove("changeWidth"));
    e.target.classList.add("changeWidth");
    voteList.style.transform = `translateX(${trans}vw)`
    
}))
//Xu li khi click vao tabnext 
tabNext.addEventListener("click" , function(e) {
    e.preventDefault();
    if(index > 2) return;
    ++index;
    let trans = -82 * index;
    [...dotList].forEach(item => item.classList.remove("changeWidth"));
    [...dotList].forEach(item => {
        if(item.getAttribute("name") == index + 1) item.classList.add("changeWidth");
    })
    voteList.style.transform = `translateX(${trans}vw)`
})
tabPrev.addEventListener("click" , function(e) {
    e.preventDefault();
    if(index <= 0) return;
    --index;
    let trans = -82 * index;
    [...dotList].forEach(item => item.classList.remove("changeWidth"));
    [...dotList].forEach(item => {
        if(item.getAttribute("name") == index+1) item.classList.add("changeWidth");
    })
    voteList.style.transform = `translateX(${trans}vw)`
})

// xu li khi scroll
window.addEventListener("scroll" , function(e) {
    // console.log(123);
    if(scrollY > 0) {
        navbar.classList.add("changeNavbar");
    }
    else {
        navbar.classList.remove("changeNavbar");
    }
})