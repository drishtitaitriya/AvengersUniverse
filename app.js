document.addEventListener('DOMContentLoaded', function() {
    function addItem(event) {
      const listBox = event.target.closest('.listBox');
      const input = listBox.querySelector('input');
      const ul = listBox.querySelector('ul');
      const newItemText = input.value.trim();
      
      if (newItemText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${newItemText} <button class="delete">delete</button>`;
        ul.appendChild(li);
        input.value = ''; 
      }
    }
    function deleteItem(event) {
      if (event.target.classList.contains('delete')) {
        const li = event.target.closest('li');
        li.remove();
      }
    }
    const addButtons = document.querySelectorAll('.listBox .add');
    addButtons.forEach(button => {
      button.addEventListener('click', addItem);
    });
    const listBoxes = document.querySelectorAll('.listBox');
    listBoxes.forEach(box => {
      box.addEventListener('click', deleteItem);
    });
  });
function submitForm(event){
    event.preventDefault();
    const name= document.getElementById("name");
    alert( ` ${name.value} your feedback is submitted`);
    document.getElementById("feedbackForm").reset();   
}
 const burger=document.querySelector(".burger");
 const navbar = document.querySelector(".navbar");
 const navList= document.querySelector(".nav-list");
  burger.addEventListener("click",()=>{
    navList.classList.toggle('v-class-resp');
  });

