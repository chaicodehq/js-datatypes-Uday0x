// let string = " a     space to fel quickly at easr"
// let arraystring = string.split(" ").filter((s)=>s).join(" ")
// console.log(arraystring)
// let captial = arraystring.map((i)=>i[0].toUpperCase())
// // console.log(captial)

let b = ["happy" ,"bi" ,"brother"]
let uday=b.map((i)=>i.charAt(0).toUpperCase()+i.slice(1))
let capitalSai = uday[0].charAt(0).toUpperCase()+uday[0].slice(1)
let sai = uday.map((i)=>{
     if(i.length<=2 && i[0]){
      return  i.charAt(0).toLowerCase()+i.slice(1)
    }else{
        return i
    }
})

// console.log(uday)
console.log(sai)
console.log(capitalSai)
// console.log(typeof(uday))