const todos = [
    {
        text : 'Read new book',
        isDone : true,
        id : 0
    }, 
    {
        text : 'Add new bookmark to bookmark list',
        isDone : false,
        id : 1
    },
    {
        text : 'Buy a pet',
        isDone : false,
        id : 2
    },
    {
        text : 'Wash my hands',
        isDone : true,
        id : 3
    }
];

function render(data){
    const list = document.querySelector('.todos-list');
    const doButton = document.querySelector('button.do');



    list.innerHTML = data.map(todo => {
        const className = todo.isDone ? 'class="done"' : '';
        return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
    }).join('');
}

function onTodoClick(ev){
    console.log('click to todo', ev.target);
    console.dir(ev.target);

    const id = +ev.target.dataset.id;

    todos.forEach(todo => todo.id === id ? todo.isDone = !todo.isDone : null);

    render(todos);
}
document.querySelector('.todos-list').addEventListener('click', onTodoClick);

render(todos);

// function loadePage(){
    // const doButton = document.querySelector('button.do');

    // doButton.addEventListener('click', () => {
        // localStorage.setItem('todos-list', ul.innerHTML)
    // })
// }

