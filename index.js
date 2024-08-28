document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de soumettre automatiquement

    // Récupération des valeurs du formulaire
    const nom = encodeURIComponent(document.getElementById('nom').value);
    const prenom = encodeURIComponent(document.getElementById('prenom').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const password = encodeURIComponent(document.getElementById('password').value); // Non affiché pour sécurité
    const age = encodeURIComponent(document.getElementById('age').value);
    const gender = encodeURIComponent(document.getElementById('gender-select').value);

    // Affichage des informations dans la console (pour le débogage)
    console.log(`Nom: ${nom}`);
    console.log(`Prénom: ${prenom}`);
    console.log(`Email: ${email}`);
    console.log(`Mot de passe: ${password}`);
    console.log(`Âge: ${age}`);
    console.log(`Genre: ${gender}`);

    // Redirection vers la nouvelle page avec les paramètres URL
    const url = `connecte.html?nom=${nom}&prenom=${prenom}&email=${email}&age=${age}&gender=${gender}`;
    window.location.href = url;
});
