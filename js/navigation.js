function showSection(sectionName) {
    document.getElementById('main-content').style.display = 'block';
    document.querySelector('nav').style.display = 'none';
    

    document.getElementById('add-section').style.display = 'none';
    document.getElementById('liked-section').style.display = 'none';
    document.getElementById('manage-section').style.display = 'none';
    
 
    document.getElementById(sectionName + '-section').style.display = 'block';

    if (sectionName === 'like') {
        loadLikedProfiles();
    } else if (sectionName === 'manage') {
        loadUserProfiles();
    }
}


function startSwiping() {
    window.location.href = 'swipe.html';
}

function goHome() {
    window.location.href = 'index.html';
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('main-content').style.display = 'none';
});