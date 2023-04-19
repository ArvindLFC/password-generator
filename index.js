const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("output-one")
let passwordTwo = document.getElementById("output-two")
let passLimit = 15

function generatePasswords() {
    let myNewPasswordOne = ""
    let myNewPasswordTwo = ""
    for (i = 0; i < passLimit; i++) {
        let randomPasswordOne = Math.floor( Math.random() * characters.length)
        let randomPasswordTwo = Math.floor( Math.random() * characters.length)
        myNewPasswordOne += characters[randomPasswordOne]
        myNewPasswordTwo += characters[randomPasswordTwo]
        passwordOne.textContent = myNewPasswordOne
        passwordTwo.textContent = myNewPasswordTwo
    }
    return myNewPasswordOne
    return myNewPasswordTwo
}
