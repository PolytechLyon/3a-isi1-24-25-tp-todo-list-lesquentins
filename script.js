document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');  // Récupère l'élément <ol> par son ID
    const addButton = document.getElementById('new-todo-item-add');  // Récupère le bouton "Add"
    const inputField = document.getElementById('new-todo-item-title');  // Récupère l'input où l'utilisateur tape son item

    // Fonction pour ajouter un item
    addButton.addEventListener('click', function() {
        const newItemText = inputField.value.trim();  // Récupère le texte de l'input et le nettoie des espaces inutiles

        if (newItemText) {
            // Créer un nouvel élément <li>
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;  // Ajoute le texte de l'item à cet élément <li>

            // Ajouter ce nouvel <li> dans la liste <ol>
            todoList.appendChild(newItem);

            // Réinitialiser l'input pour que l'utilisateur puisse ajouter un autre item
            inputField.value = '';
        }
    });
});