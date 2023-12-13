const first = document.querySelector(".first")

const randomCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const colorText ="abcdef1234567890"

first.onclick= (e)=>{

const mycircle = document.createElement('div')

mycircle.setAttribute('class' , 'circle')
first.append(mycircle)

mycircle.style.left  = e.clientX -'13' + 'px'
mycircle.style.top  = e.clientY -'13' + 'px'



let hash = "#"
let colorSplitted = colorText.split("")
// let colorSplitted = colorText.charAt('')

mycircle.style.backgroundColor = `${hash}${colorSplitted[Math.floor(Math.random()*colorText.length)]}${colorSplitted[Math.floor(Math.random()*colorText.length)]}${colorSplitted[Math.floor(Math.random()*colorText.length)]}`




// mycircle.style.backgroundColor = hash + color
const splitted = randomCharacter.split("")
mycircle.textContent = splitted[Math.floor(Math.random()*randomCharacter.length)]
    // console.log(mycircle.textContent)
}


