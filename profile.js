document.addEventListener("DOMContentLoaded", function() {
    // Exemple de données utilisateur. Dans une vraie application, ces données viendraient du backend ou du localStorage.
    const userProfile = {
        name: "John Doe",
        tagline: "Aventurier dans l'âme, toujours prêt pour de nouvelles expériences!",
        age: "28 ans",
        location: "Paris, France",
        profession: "Développeur Web",
        interests: "Voyages, Cuisine, Technologie",
        profilePic: "profile-pic.jpg" // Remplacez par le chemin réel de l'image
    };

    // Met à jour les éléments du profil avec les données utilisateur
    document.getElementById("profile-name").textContent = userProfile.name;
    document.getElementById("profile-tagline").textContent = userProfile.tagline;
    document.getElementById("profile-age").textContent = userProfile.age;
    document.getElementById("profile-location").textContent = userProfile.location;
    document.getElementById("profile-profession").textContent = userProfile.profession;
    document.getElementById("profile-interests").textContent = userProfile.interests;
    document.getElementById("profile-pic").src = userProfile.profilePic;
});
