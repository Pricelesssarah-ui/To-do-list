    /*Query the button, input and list container*/

var generalList = document.querySelector('.general-list');
var input = document.querySelector('input');
var btn = document.querySelector('.btn-add');


    /*Add event Listerner to the add button, create a new list and text, then append the children*/

btn.addEventListener('click', () => {
    var newList = document.createElement('li');
    newList.className = 'btnDelete';
    var text = document.createTextNode(input.value);
    input.value = "";
    generalList.appendChild(newList);
    newList.appendChild(text);
    

    /*Create an element for delete button*/

var trash = document.createElement('button');
    trash.innerHTML = 'Delete';
    newList.appendChild(trash);
    
    
    /*Loop through the list and add event listener to the delete button*/

var close = document.querySelectorAll('.btnDelete');
for(let i=0; i<close.length; i++){
    trash.addEventListener('click', () => {
       close[i].style.display = 'none';
       close[i].remove();
       
    })
}  

    })
    

  
    

 