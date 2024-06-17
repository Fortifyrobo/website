document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

function openModal(articleId) {
    const modal = document.getElementById('news-modal');
    const modalBody = document.getElementById('modal-body');
    
    const articles = {
        'honey-1': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'honey-2': {
            title: 'Another News',
            content: 'This is the full content '
        },
        'Shilajit-1': {
            title: 'World News',
            content: 'This is the full content'
        },
        'Shilajit-2': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Cordyceps-1': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'Cordyceps-2': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'Pashmina-1': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Pashmina-2': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Churpi-1': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Churpi-2': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Technology-1': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'Technology-2': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'Hemp-1': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'Hemp-2': {
            title: 'Breaking News',
            content: 'This is the full content '
        },
        'CHYANGRA-1': {
            title: 'Breaking News',
            content: 'This is the full content'
        },
        'CHYANGRA-2': {
            title: 'Breaking News',
            content: 'This is the full content.'
        },
    };

    const article = articles[articleId];
    if (article) {
        modalBody.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById('news-modal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('news-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
