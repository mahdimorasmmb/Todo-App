const inputTodo = document.querySelector('#input-todo');
const myul = document.querySelector('#myul')
let flag = true;

const addTodo = () => {
    let valueInputTodo = inputTodo.value;
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = "Delete";
    button.setAttribute("class", "btn-list");
    li.textContent = valueInputTodo;
    todoDiv.appendChild(li)
    todoDiv.appendChild(button)
    myul.appendChild(todoDiv);
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
