// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123)
// })

//function buttonClick(e){
//     console.log('Button clicked')
//     document.getElementById('header-title').textContent = 'changed'
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     console.log(e)
//    -------------------------------------

//    console.log(e.target)
//    console.log(e.target.id)
//    console.log(e.target.className)
//    console.log(e.target.classList)
//    var output = document.getElementById('output')
//    output.innerHTML = '<h3>'+e.target.id+'</h3>'

//     to know what event used
//     console.log(e.type)

//     mouse position from window Reference
//     console.log(e.clientX)
//     console.log(e.clientY)

//     mouse position from element Reference
//     console.log(e.offsetX)
//     console.log(e.offsetY)

        // to know if altkey,ctrl,shift is being hold by the user
        // console.log(e.altKey)
        // console.log(e.ctrlKey)
        // console.log(e.shiftKey)
//}

//MOUSE EVENT ACTION

// var button = document.getElementById('button')
// var box = document.getElementById('box')

//button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)

    //output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>'

    // change backgroundcolor of box element
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

    // change background color of the whole window body
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

//}


//BUTTON EVENTS ACTION----------------------------------------------------------------------

//var itemInput = document.querySelector('input[type="text"]')
//var form = document.querySelector('form')
//drop down event -----------------------------------------
//var select = document.querySelector('select')

//fires event when you press a key-----------------------
//itemInput.addEventListener('keydown', runEvent)

//fires when key being hold is released--------------------------
//itemInput.addEventListener('keyup', runEvent)

//fires when key is pressed------------------------------
//itemInput.addEventListener('keypress', runEvent)

//fires when input element is focused------------------------
//itemInput.addEventListener('focus', runEvent)

//fires when input element is unfocused---------------------------
//itemInput.addEventListener('blur', runEvent)

//fires when cut & paste action is performed-------------------------
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

//fires when all kinds of input is performed on the input element------------------------------
//itemInput.addEventListener('input', runEvent)

//fires when you select from a dropdown-------------------------------
// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

//fires when the submit button on the form is clicked
//form.addEventListener('submit', runEvent)

//function runEvent(e){
    //prevents default browser behavior of refreshing when submit button is clicked-----------------------
    //e.preventDefault()
  //  console.log('EVENT TYPE: '+e.type)

    // console.log(e.target.value)

    // outputs whatever you type on the dom-------
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

//}








