const inputTodo = document.querySelector('#input-todo');
const myul = document.querySelector('#myul')
let flag = true;

const addTodo = () => {
    let valueInputTodo = inputTodo.value;
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = "Delete";
    button.setAttribute("class", "btn-list");
    li.textContent = valueInputTodo;
    myul.appendChild(button);
    myul.appendChild(li)
    button.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    })
    li.addEventListener("click", (event) => {
        if(flag){
            event.target.classList.add("text-decoration")
            flag =false;
        } else {
            event.target.classList.remove("text-decoration")
            flag = true
        }
    })
    
}
