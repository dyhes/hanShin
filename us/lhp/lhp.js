function change(){
    let page=document.getElementById("mainp")
    page.appendChild(page.firstChild)
}

function locate(s){
    let p=document.getElementById("mainp")
    let aim=document.getElementById(s)
    p.insertBefore(aim,p.firstChild)
}