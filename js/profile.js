let currentProfileIndex = 0;
let profiles = [
    {
        name: "Мурчик",
        age: "2 роки",
        description: "Ласкавий та грайливий кіт, обожнює гратися з м'ячиком",
        image: "https://placekitten.com/400/400"
    },
    {
        name: "Барсик", 
        age: "3 роки",
        description: "Спокійний та розсудливий, любить спати на сонечку",
        image: "https://placekitten.com/401/401"
    },
    {
        name: "Сніжинка",
        age: "1 рік",
        description: "Енергійна та цікава, завжди готова до пригод",
        image: "https://placekitten.com/402/402"
    }
];

function loadUserProfilesToSwipe() {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    profiles = [...profiles, ...userProfiles];
}

function createProfileCard(profile, index) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
        <img class="profile-image" src="${profile.image}" alt="${profile.name}">
        <h2 class="profile-name">${profile.name}</h2>
        <p class="profile-age">${profile.age}</p>
        <p class="profile-description">${profile.description}</p>
        <div class="card-buttons">
            <button class="dislike-btn" onclick="dislikeProfile()">👎</button>
            <button class="like-btn" onclick="likeProfile()">❤️</button>
        </div>
    `;
    
    // Устанавливаем z-index и классы для каскадного эффекта
    if (index === 0) {
        card.classList.add('active');
    } else if (index === 1) {
        card.classList.add('next');
    } else {
        card.classList.add('hidden');
    }
    
    return card;
}

function displayProfiles() {
    const container = document.getElementById('profile-container');
    container.innerHTML = '';
    
    if (profiles.length === 0) {
        container.innerHTML = '<div class="profile-card active"><p>Немає анкет для перегляду</p></div>';
        return;
    }
    
    // Создаем до 3 карточек для каскадного эффекта
    const cardsToShow = Math.min(profiles.length, 3);
    for (let i = 0; i < cardsToShow; i++) {
        const profileIndex = (currentProfileIndex + i) % profiles.length;
        const card = createProfileCard(profiles[profileIndex], i);
        container.appendChild(card);
    }
}

function likeProfile() {
    const activeCard = document.querySelector('.profile-card.active');
    if (!activeCard) return;
    
    activeCard.classList.add('swipe-right');
    
    setTimeout(() => {
        const likedProfiles = JSON.parse(localStorage.getItem('likedProfiles') || '[]');
        likedProfiles.push(profiles[currentProfileIndex]);
        localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
        
        currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
        displayProfiles();
    }, 300);
}

function dislikeProfile() {
    const activeCard = document.querySelector('.profile-card.active');
    if (!activeCard) return;
    
    activeCard.classList.add('swipe-left');
    
    setTimeout(() => {
        currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
        displayProfiles();
    }, 300);
}

function goHome() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    loadUserProfilesToSwipe();
    displayProfiles();
});