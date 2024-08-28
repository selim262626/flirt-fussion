document.addEventListener('DOMContentLoaded', function () {
    // Lire les paramètres d'URL
    const urlParams = new URLSearchParams(window.location.search);
    const profileName = urlParams.get('profile');

    if (profileName) {
        // Obtenir les informations du profil correspondant
        const matchedProfile = getProfileByName(profileName);
        
        // Mettre à jour les informations du profil
        document.getElementById('profile-image').src = matchedProfile.image;
        document.getElementById('profile-name').textContent = matchedProfile.name;
        document.getElementById('profile-age-location').textContent = `${matchedProfile.age}, ${matchedProfile.location}`;

        // Mettre à jour les messages
        const chatBox = document.getElementById('chat-box');
        matchedProfile.messages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.type}`;
            messageDiv.innerHTML = `<p>${message.text}</p>`;
            chatBox.appendChild(messageDiv);
        });

        // Gestion de l'envoi des messages
        document.getElementById('send-button').addEventListener('click', function () {
            const messageInput = document.getElementById('message-input');
            const messageText = messageInput.value.trim();
            if (messageText) {
                const userMessageDiv = document.createElement('div');
                userMessageDiv.className = 'message sent';
                userMessageDiv.innerHTML = `<p>${messageText}</p>`;
                chatBox.appendChild(userMessageDiv);

                // Ajouter la réponse automatique en fonction du profil
                const responseMessageDiv = document.createElement('div');
                responseMessageDiv.className = 'message received';
                responseMessageDiv.innerHTML = `<p>${matchedProfile.autoReply}</p>`;
                chatBox.appendChild(responseMessageDiv);

                // Nettoyer le champ de saisie
                messageInput.value = '';
                chatBox.scrollTop = chatBox.scrollHeight; // Faire défiler vers le bas
            }
        });
    } else {
        console.error('Aucun profil spécifié.');
    }
});

// Fonction simulée pour obtenir un profil par nom
function getProfileByName(name) {
    // Ceci est un exemple. Vous pouvez récupérer ces informations d'une base de données ou d'une API.
    const profiles = {
        cyrine: {
            image: 'photo2.jpg',
            name: 'Cyrine Khiari',
            age: '24 ans',
            location: 'Dubai',
            messages: [
                { type: 'received', text: 'Salut ! Comment ça va ?' },
                { type: 'sent', text: 'Bonjour ! Ça va bien, merci. Et toi ?' }
            ],
            autoReply: 'Super content de te parler ! Comment se passe ta journée ?'
        },
        malek: {
            image: 'photo1.jpg',
            name: 'Malek Sahli',
            age: '20 ans',
            location: 'Miami',
            messages: [
                { type: 'received', text: 'Hey ! Comment ça va ?' },
                { type: 'sent', text: 'Salut ! Tout va bien, merci. Et toi ?' }
            ],
            autoReply: 'Salut ! Tout est bien ici. Quoi de neuf de ton côté ?'
        },
        linda: {
            image: 'https://i.pinimg.com/736x/43/c6/fb/43c6fb38eb5577eb58f9c5f3ec8b02c4.jpg',
            name: 'Linda',
            age: '22 ans',
            location: 'New York',
            messages: [
                { type: 'received', text: 'Salut ! Quoi de neuf ?' },
                { type: 'sent', text: 'Bonjour Linda ! Pas grand-chose, et toi ?' }
            ],
            autoReply: 'Content de te voir ici ! Raconte-moi tout !'
        },
        youssef: {
            image: 'photo3.jpg',
            name: 'Youssef Mili',
            age: '26 ans',
            location: 'Tunisie',
            messages: [
                { type: 'received', text: 'Salut ! Comment ça se passe en Tunisie ?' },
                { type: 'sent', text: 'Bonjour Youssef ! Tout va bien, merci. Et toi ?' }
            ],
            autoReply: 'Bonjour ! Tout va bien ici, merci. Et toi ?'
        },
        helena: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7DmonwxisQfFN0BP8KgLHvEn5kMZ454pKQ&s',
            name: 'Helena',
            age: '20 ans',
            location: 'Sweden',
            messages: [
                { type: 'received', text: 'Hello! How’s it going?' },
                { type: 'sent', text: 'Hi Helena! Everything is great, thanks. How about you?' }
            ],
            autoReply: 'Hi there! Everything is going well here. What about you?'
        },
        stephan: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulQpVS4u3gxegX3l4Q_Be0APidaKqRae7Uw&s',
            name: 'Stephan',
            age: '24 ans',
            location: 'Allemagne',
            messages: [
                { type: 'received', text: 'Hi! How’s Germany?' },
                { type: 'sent', text: 'Hello Stephan! Everything is fine here, thanks. And you?' }
            ],
            autoReply: 'Hello! Everything is great here. How is everything with you?'
        },
        ahmed: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmiUhgvyBVEw-yvsWeRo1zWfqF4jT4rRkKg&s',
            name: 'Ahmed',
            age: '21 ans',
            location: 'Qatar',
            messages: [
                { type: 'received', text: 'Hey! How’s everything?' },
                { type: 'sent', text: 'Hi Ahmed! All is good here. What about you?' }
            ],
            autoReply: 'Hey there! Everything is fine here. How about you?'
        },
        mouhamed: {
            image: 'med.jpg',
            name: 'Mouhamed Brahem',
            age: '23 ans',
            location: 'Tunisie',
            messages: [
                { type: 'received', text: 'Salut ! Comment ça va ?' },
                { type: 'sent', text: 'Bonjour Mouhamed ! Ça va bien, merci. Et toi ?' }
            ],
            autoReply: 'Bonjour ! Tout va bien ici, merci. Et toi ?'
        }
    };

    return profiles[name] || {
        image: '',
        name: 'Profil inconnu',
        age: '',
        location: '',
        messages: [],
        autoReply: 'Merci pour ton message !'
    };
}
