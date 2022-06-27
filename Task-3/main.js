const taskName = document.querySelector('#name')
const add = document.querySelector('#add')
const list = document.querySelector('#list')

add.addEventListener('click', () => {
    console.log(taskName)
    if (taskName.value != '') {
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-start border border-3 rounded-3 p-2 mb-4">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${taskName.value}</div>
            </div>
            <button class="btn btn-danger delete">X</button>
        </li>
        `;

        taskName.value = '';

        var deleteBtn = document.querySelectorAll('.delete')
        deleteBtn.forEach((val) => {
            val.addEventListener(('click'), () => {
                val.parentElement.remove();
            });
        });
    }
})
