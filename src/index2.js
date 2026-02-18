let passenger ={
   from:"UDay",
   to:"satya"
}

let finalForm = passenger.from.charAt(0).toUpperCase()+passenger.from.slice(1).toLowerCase()
let ToForm = passenger.to.charAt(0).toUpperCase()+passenger.to.slice(1).toLowerCase()

console.log(finalForm,ToForm)