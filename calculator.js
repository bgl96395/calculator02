let filed = document.getElementById("field")

for(let i=0;i<10;i++){
    document.getElementById(String(i)).onclick = () =>{
        filed.value += i
    }
}

document.getElementById("x").onclick = function(){
    filed.value = filed.value.slice(0, -1)
}

document.getElementById("del").onclick = function(){
    filed.value = ""
}

document.getElementById("+").onclick = function(){
    const last_char = filed.value.slice(-1)
    if(last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/" || last_char === "%" || last_char === "."){
        return
    }
    filed.value += "+"
} 

document.getElementById("-").onclick = function(){
    const last_char = filed.value.slice(-1)
    if(last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/" || last_char === "%" || last_char === "."){
        return
    }
    filed.value += "-"
}

document.getElementById("*").onclick = function(){
    const last_char = filed.value.slice(-1)
    if(last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/" || last_char === "%" || last_char === "."){
        return
    }
    filed.value += "*"
}

document.getElementById("/").onclick = function(){
    const last_char = filed.value.slice(-1)
    if(last_char === "+" || last_char === "-" || last_char === "*" || last_char === "/" || last_char === "%" || last_char === "."){
        return
    }
    filed.value += "/"
}

document.getElementById("=").onclick = () =>{
    try{
        filed.value = eval(filed.value)
    }catch{
        filed.value = "Error"
    }
}

document.getElementById(".").onclick = () =>{
    const last_number = filed.value.slice(/[+\-*\/]/).at(-1)
    if(last_number.includes(".") || last_number === ""){
        return
    }
    filed.value += "."
}




