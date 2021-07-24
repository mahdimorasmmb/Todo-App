const inputTodo = document.querySelector('#input-todo');
const myul = document.querySelector('#myul')


const addTodo = () => {
    let valueInputTodo = inputTodo.value;
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = "Delete";
    button.setAttribute("class", "btn-list");
    li.textContent = valueInputTodo;
    li.appendChild(button);
    myul.appendChild(li)
}
