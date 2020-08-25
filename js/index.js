let head = document.getElementsByTagName("head")[0]
let val = false
let btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        if(val){
            let link = document.getElementById("theme1")
            head.removeChild(link)
        }
        let link1 = document.createElement('link')
        link1.id="theme2"
        link1.href="css/style1.css"
        link1.rel="stylesheet" 
        head.appendChild(link1)
        val = true
    })


let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => {
    if(val){
        let link1 = document.getElementById("theme2")
        head.removeChild(link1)
    }    
    let link = document.createElement('link')
    link.id="theme1"
    link.href="css/style.css"
    link.rel="stylesheet" 
    head.appendChild(link)
    val = true
})







