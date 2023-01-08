const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

//set interval used to scale with picture opacity as set interval count-
//scales up opacity also scales up 
let int = setInterval(blurring, 30)

function blurring() {
    load++
//stops the set interval when reaches 100 count
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText=`${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }