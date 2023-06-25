const input = document.getElementById("inputText")
const date = document.getElementById("Time")
const myBtn = document.getElementById("btn")
let para = document.getElementById("pg")



const storeData = ()=>{
    const key = input.value
    const value = date.value
    localStorage.setItem(key , value)
    
}


const getData = ()=>{
    
    let data = ""
    for (i=0; i<=localStorage.length; ++i ){
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        data += `${key}:${value}<br/>`
    }
    return data;
}

const updatePara = ()=>{
    
    para.innerHTML = getData()
}




const deleteData = ()=>{
    const key = input.value
    localStorage.removeItem(key)
    updatePara()
}

myBtn.addEventListener("click",()=>{
    storeData()
    getData()
    updatePara()
})