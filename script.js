
    document.getElementById('new-todo-item-add').addEventListener('click', function() {
        const newItemText = document.getElementById('new-todo-item-title').value.trim();  // Récupère le texte de l'input et le nettoie des espaces inutiles

        if (newItemText) {
            // Créer un nouvel élément <li>
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;  // Ajoute le texte de l'item à cet élément <li>

            // Ajouter ce nouvel <li> dans la liste <ol>
            document.getElementById('todo-list').appendChild(newItem);

            // Réinitialiser l'input pour que l'utilisateur puisse ajouter un autre item
            document.getElementById('new-todo-item-title').value = '';
        }
    });
