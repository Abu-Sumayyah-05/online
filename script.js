function onClick() {
    btn = document.getElementsByClassName("btn")
    
    if (btn.length >0){
        btn[0].addEventListener("click" , function(event){
            alert("BarakaLlahu feekum")
        })
    }
}
onClick()