const first = document.querySelector(".first")

first.onclick= (e)=>{

const mycircle = document.createElement('div')

mycircle.setAttribute('class' , 'circle')
first.append(mycircle)

mycircle.style.left  = e.clientX + 'px'
mycircle.style.top  = e.clientY + 'px'

    // console.log('hello')
}