document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');

    //Bouton
    const addButton = document.getElementById('new-todo-item-add');
    const confirmEditButton = document.getElementById('edit-todo-item-confirm');
    const cancelEditButton = document.getElementById('edit-todo-item-cancel');

    //Label
    const inputField = document.getElementById('new-todo-item-title');
    const inputEdit = document.getElementById('edit-todo-item-title')
    const editTaskPanel = document.getElementById('edit-item');
    const NewPanel = document.getElementById('new-item')


        // Fonction pour ajouter un item
    addButton.addEventListener('click', function() {
        const newItemText = inputField.value.trim();

        if (newItemText) {

            const newItem = document.createElement('li');
            const deleteButton = document.createElement('button');
            const editButton = document.createElement('button')

            deleteButton.textContent = 'Supprimer'
            editButton.textContent = 'Editer'
            newItem.textContent = newItemText

            newItem.append(deleteButton)
            newItem.append(editButton)
            todoList.appendChild(newItem)

            deleteButton.addEventListener('click',function () {
                newItem.remove() // Supprimer l'élément de la liste
            });

            editButton.addEventListener('click',function () {
                editTaskPanel.hidden = false
                NewPanel.hidden = true

                confirmEditButton.addEventListener('click',function () {
                    const newItemText = inputEdit.value.trim();
                })

                cancelEditButton.addEventListener('click', function () {
                    editTaskPanel.hidden = true
                    NewPanel.hidden = false
                })
            });

            // Réinitialiser l'input pour que l'utilisateur puisse ajouter un autre item
            inputField.value = ''
        }
    });
});

