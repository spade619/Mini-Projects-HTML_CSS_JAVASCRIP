// var books = document.querySelectorAll('#book-list li .name')
// Array.from(books).forEach(function(book){

    // to overwrite the textContent written completely--------------
    // book.textContent = 'test'

    //to append or add without deleting----------------------------
  //  book.textContent += '(book title)'
//})

// to change the html tag---------------------------------
// const bookList = document.querySelector('#book-list')
// console.log(bookList.innerHTML)
// to change the html completely------------------------------
// bookList.innerHTML = '<h2>BOOKS AND MORE BOOKS...</H2> '
// to append to the html not to completely delete it------------------------------------
// bookList.innerHTML += '<p>BOOKS AND MORE BOOKS...</p> '


// DOM NODES// 

// const banner = document.querySelector('#page-banner')
// determines the node type ------------------------------------------
// console.log('#page-banner node type is:', banner.nodeType)
// determines the node name--------------------------------
// console.log('#page-banner node type is:', banner.nodeName)
// determine if this node has a children. returns true or false--------------
// console.log('#page-banner node type is:', banner.hasChildNodes())
// clone a node true: if all the children inside it is included/ false if only the parent node
// const clonedBanner = banner.cloneNode(true)
// console.log(cloneBanner)


//EVENTS//

// delete an element on the dom using click event-------------

// var btns = document.querySelectorAll('book-list .delete')

//cycle through an array of node elements
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
        //target the parent element of the child node to be removed------------------------------
        //const li = e.target.parentElement
        
 //get a reference from the parent node first, then orders to remove the child which is passed as an arguement
        
//         li.parentNode.removeChild(li)
//     })
// })



// filter books
// const searchBar = forms['search-books'].querySelector('input');
// searchBar.addEventListener('keyup', (e) => {
//   const term = e.target.value.toLowerCase();
//   const books = list.getElementsByTagName('li');
//   Array.from(books).forEach((book) => {
//     const title = book.firstElementChild.textContent;
//     if(title.toLowerCase().indexOf(e.target.value) != -1){
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
//   });
// });


// tabbed content
// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');
// tabs.addEventListener('click', (e) => {
//   if(e.target.tagName == 'LI'){
//     const targetPanel = document.querySelector(e.target.dataset.target);
//     Array.from(panels).forEach((panel) => {
//       if(panel == targetPanel){
//         panel.classList.add('active');
//       }else{
//         panel.classList.remove('active');
//       }
//     });
//   }
// });
