// Sélectionner le formulaire et ses champs
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Gérer l'événement de soumission du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Valider les champs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && validatePassword(password)) {
            alert('Connexion réussie!');
            // Redirection vers rencontre.html
            window.location.href = 'rencontre.html';
        } else {
            alert('Veuillez remplir correctement tous les champs.');
        }
    });
});

// Fonction de validation de l'email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email
    return emailPattern.test(email);
}

// Fonction de validation du mot de passe (exemple simple)
function validatePassword(password) {
    // Vous pouvez personnaliser cette validation selon vos besoins (longueur, caractères spéciaux, etc.)
    return password.length >= 6; // Exige un mot de passe d'au moins 6 caractères
}
