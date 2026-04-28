const list = document.getElementById('taskList');

export const render = (tasks) => {
    list.innerHTML = '';
    tasks.forEach(t => {
        const li = document.createElement('li');
        // Usamos template strings solo donde hay lógica dinámica
        li.className = `task-item ${t.complete ? 'completed' : ''}`;
        li.dataset.id = t.id;

        const span = document.createElement('span');
        span.textContent = t.text;

        const actions = document.createElement('div');
        actions.className = 'actions';

        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn-edit';
        btnEdit.textContent = 'e';

        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete';
        btnDelete.textContent = 'x';

        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);
        li.appendChild(span);
        li.appendChild(actions);
        list.appendChild(li);
    });
}