import * as state from "./state.js";
import * as ui from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    const input = document.querySelector('input'); // Comilla simple por convención
    const addBtn = document.getElementById('addBtn');
    const list = document.getElementById('taskList');
    const tasks = await state.getTasks();
    ui.render(tasks);

    addBtn.addEventListener('click', async () => {
        if (!input.value.trim()) {
            return;
        }
        await state.addTask(input.value);
        input.value = "";
        ui.render(state.tasks);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    list.addEventListener('click', (e) => {
        const id = parseInt(e.target.closest("li").dataset.id);
        if (e.target.classList.contains("btn-delete")) {
            state.deleteTask(id);
        } else if (e.target.classList.contains("btn-edit")) {
            const task = state.tasks.find(t => t.id === id);
            const newText = prompt("Editar: ", task.text);
            if (newText) {
                state.editTask(id, newText)
            }
        } else if (e.target.tagName !== "BUTTON") {
            state.toggleTask();
        }
        ui.render(state.tasks);
    })
})
