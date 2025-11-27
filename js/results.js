function loadLikedProfiles() {
    const likedProfiles = JSON.parse(localStorage.getItem('likedProfiles') || '[]');
    const container = document.getElementById('liked-profiles-container');
    
    container.innerHTML = '';
    
    if (likedProfiles.length === 0) {
        container.innerHTML = '<p>Ще немає сподобаних анкет</p>';
        return;
    }
    
    likedProfiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" width="200" height="200">
            <h3>${profile.name}</h3>
            <p>Вік: ${profile.age}</p>
            <p>${profile.description}</p>
        `;
        container.appendChild(profileElement);
    });
}