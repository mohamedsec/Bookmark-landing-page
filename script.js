const showList = document.getElementById('showList')
const listBtnMob = document.getElementById('listBtnMob')
const closebtn = document.getElementById('closebtn')

listBtnMob.addEventListener('click',()=>{
    showList.style.display = "block"
})

closebtn.addEventListener('click',()=>{
    showList.style.display = "none"
})

function handleAccordion(index){
    const content = document.getElementById(`content-${index}`)
    const icon = document.getElementById(`icon-${index}`)
if(content.style.maxHeight && content.style.maxHeight != "0px" ){
    content.style.maxHeight = "0";
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/>`

}else{
    content.style.maxHeight = content.scrollHeight + "px";
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" class="rotate-180"><path fill="none" stroke="red" stroke-width="3" d="M1 1l8 8 8-8"/>`
}


}


const Bookmarking = document.getElementById('one')
const Searching = document.getElementById('two')
const Sharing = document.getElementById('three')
const image = document.getElementById('image')
const header = document.getElementById('header')
const para = document.getElementById('para')

Bookmarking.addEventListener('click',()=>{
    image.innerHTML = `<img src= "./images/illustration-features-tab-1.svg" />`
    header.innerText = "Bookmark in one click";
    para.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
})
Searching.addEventListener('click',()=>{
    image.innerHTML = `<img src= "./images/illustration-features-tab-2.svg" />`
    header.innerText = "Intelligent search";
    para.innerText ="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
})
Sharing.addEventListener('click',()=>{
    image.innerHTML = `<img src= "./images/illustration-features-tab-3.svg" />`
    header.innerText = "Share your bookmarks";
    para.innerText ="  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
})