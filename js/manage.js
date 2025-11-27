function loadUserProfiles() {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    const container = document.getElementById('user-profiles-container');
    
    container.innerHTML = '';
    
    if (userProfiles.length === 0) {
        container.innerHTML = '<p>Ви ще не створили жодної анкети</p>';
        return;
    }
    
    userProfiles.forEach((profile, index) => {
        const profileElement = document.createElement('div');
        profileElement.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" width="150" height="150">
            <h3>${profile.name}</h3>
            <p>Вік: ${profile.age}</p>
            <p>${profile.description}</p>
            <button onclick="deleteProfile(${index})">Видалити</button>
        `;
        container.appendChild(profileElement);
    });
}

function deleteProfile(index) {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    userProfiles.splice(index, 1);
    localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
    loadUserProfiles();
}