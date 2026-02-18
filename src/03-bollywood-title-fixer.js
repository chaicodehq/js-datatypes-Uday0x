/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Your code here
  if(typeof title!="string"){
    return ""
  }

  let trimmedString = title.trim()
  if(trimmedString == ""){
    return ""
  }

  let removingspaces = trimmedString.split(" ")
  .filter((s)=>s)

  let upperarray = removingspaces.map((i)=>i.charAt(0).toUpperCase()+i.slice(1))
 
  // let capitalSai = upperarray[0].charAt(0).toUpperCase()+upperarray[0].slice(1)
  
  let sai = upperarray.map((i)=>{
     if(i.length<=3){
      return  i.charAt(0).toLowerCase()+i.slice(1)
    }else{
        return i
    }
})

let final = sai.join(" ")

return final
}
