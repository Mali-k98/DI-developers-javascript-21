const text = document.getElementById('text');

const addTask = document.getElementById('add')

addTask.addEventListener('click', () =>{
    if(text.value.trim() != 0){
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if(localItems === null){
            taskList = []
        } else{
            taskList = localItems;
        }
        taskList.push(text.value)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    
    showList();
})

function showList (){
    let outPut = '';
    let todoList = document.querySelector('.todo')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []
    } else{
        taskList = localItems;
    }
    taskList.forEach((e,i) => {
        outPut += `
        <div class='todoItem'>
        <p class='p'>${e}</p>
        <button class='delete' onClick='dltItm(${i})'>X</button>
        </div>`
    });

    todoList.innerHTML = outPut

}
showList();

function dltItm (i){
    taskList.splice(i, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList();
}

