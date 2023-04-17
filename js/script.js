let input = document.getElementById('result')
let button = document.querySelectorAll('button')
let string = ""
let list = Array.from(button)
list.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML ==='='){
            string = eval(string)
            input.value = string + " ="
            localStorage.setItem("ans",string)
        }
        else if(e.target.innerHTML === 'AC'){
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML === 'CE'){
            string = string.substring(0,string.length-1)
            input.value = string
        }
        else if(e.target.innerHTML === 'prv'){
            if(localStorage.getItem("ans") !== null ){
            string = localStorage.getItem("ans")
            input.value = string
            }
            else{
                string = "0"
                input.value = string
            }
        }
        else{
            string += e.target.innerHTML
        input.value = string
        }
    })
})