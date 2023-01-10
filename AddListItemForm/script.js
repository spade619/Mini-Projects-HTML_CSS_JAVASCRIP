// var btns = document.querySelectorAll('#book-list .delete')

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){

//         const li = e.target.parentElement

//         li.parentNode.removeChild(li)
//     })
// })



//DELETE ITEM EVENT
//selects the className
const list = document.querySelector('#book-list ul')
//adding an event listener
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    }
})

//ADD ITEM EVENT

//grab the add form id of add-book
const addForm = document.forms['add-book']
//adds an event listener
addForm.addEventListener('submit', function(e){
    e.preventDefault()

    const value = addForm.querySelector('input[type="text"]').value
    //create elements

    //to create an <li> tag
    const li = document.createElement('li')
    //to create a <span> tag for the book name 
    const bookName = document.createElement('span')
   //to create a <span> tag for the delete button
    const deleteButton = document.createElement('span')


    //add text content to the created elements
    deleteButton.textContent='delete'
    bookName.textContent=value

    //add classes to add css styling
    //add className of 'name' to bookname
    bookName.classList.add('name')
     //add className of 'delete' to delete button
    deleteButton.classList.add('delete') 

    //append to dom
    li.appendChild(bookName)
    li.appendChild(deleteButton)
    list.appendChild(li)
})

//HIDE ITEMS USING RADIO BUTTON
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', function(e){
    //use if statement to change css display style whether 
    //condition is true or false
    if(hideBox.checked){
        list.style.display='none'
    }else{
        list.style.display='initial' 
    }
})

//FILTER ITEMS USING SEARCH BOX//
//targets the search bar id on the form
const searchBar=document.forms['search-books'].querySelector('input')
//adding an event listener of key pressed-released on the input form
searchBar.addEventListener('keyup', function(e){
    //converts all the letters inputted to lower case
    const term = e.target.value.toLowerCase()
    //grabs all the li elements on the dom
    const books = list.getElementsByTagName('li')

    //turn all the li into an array from being an html collection
    Array.from(books).forEach(function(book){
       //grabs the first element child of the li which is the book title 
       //and puts a text content on the book title
        const title = book.firstElementChild.textContent
        //checks if term is equals to the title by referencing the index of the term variable declared 
        if(title.toLowerCase().indexOf(term)!= -1){
            book.style.display='block'
        }else {
            book.style.display='none'
        }
    })
})


//TABBED CONTENT

const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function(e){

    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target)
    
    panels.forEach(function(panel){
        if(panel == targetPanel){
            panel.classList.add('active')
        }else{
            panel.classList.remove('active')
        }
    })
    }
})


