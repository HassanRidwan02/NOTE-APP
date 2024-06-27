let addTask = document.getElementById('add-task')
let modal = document.getElementById('modal')
let cancel = document.getElementById('cancel')
let title = document.getElementById('title')
let date = document.getElementById('date')
let description = document.getElementById('description')
let taskAdd = document.getElementById('task-add')
let container = document.getElementById('container')
let html = ``
let form = document.getElementById('form')
let error = document.getElementById('error')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    formValidation()
})

function deleteData(e){
    e.parentElement.parentElement.remove()
}

function editData(e){
    e.parentElement.parentElement.remove()
    modal.style.display = 'flex'
    title.value = data.title
    date.value = data.date
    description.value = data.description
}

function formValidation(){
    if(title.value === ""){
        error.textContent = "Task cannot be empty!"
    }else{
        error.textContent = ""
        saveData()
        html += `
            <div class="task-2 task">
                <h3>${data.title}</h3>
                <p>${data.date}</p>
                <p>${data.description}</p>
                <div class="btns">
                    <button onClick=editData(this) type="button">Edit</button>
                    <button onClick=deleteData(this) type="button">Delete</button>
                </div>
            </div>
        `
        container.innerHTML = html
        title.value = ''
        date.value = ''
        description.value = ''
        modal.style.display = 'none'
    }
}

let data = {}
function saveData(){
    data.title = title.value
    data.date = date.value
    data.description = description.value
    console.log(data)
}

addTask.addEventListener('click', ()=>{
    modal.style.display = 'flex'
})
cancel.addEventListener('click', ()=>{
    modal.style.display = 'none'
})









