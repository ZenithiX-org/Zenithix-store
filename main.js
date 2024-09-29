document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('file-list');
    const viewSection = document.getElementById('view-section');
    const aboutSection = document.getElementById('about-section');
    const appViewer = document.getElementById('app-viewer');

    let files = [
        {
            category: 'apps',
            name: 'Zen Website maker',
            url: 'https://drive.google.com/file/d/1z8FSp34Qse_Bvpm_nmRyxoDtly36lisK/view?usp=drive_link',
            thumbnail: 'https://via.placeholder.com/200x100?text=App+1',
            viewUrl: 'https://zenithix-org.github.io/Zenwebsite-maker/'
        },
        {
            category: 'apps',
            name: 'Zen beat studio',
            url: 'https://drive.google.com/file/d/11LXO0hKM3K8HVtB06Wg4GZhMougS9gtG/view?usp=drive_link',
            thumbnail: 'https://via.placeholder.com/200x100?text=App+2',
            viewUrl: 'https://zenithix-org.github.io/zenbeatmaker/'
        }, 
        {
            category: 'apps',
            name: 'Zen AI ',
            url: 'https://drive.google.com/file/d/1FD1dhETJ0DlU-CwBW5nyZpRw0mgpPjRR/view?usp=drive_link',
            thumbnail: 'https://via.placeholder.com/200x100?text=App+3',
            viewUrl: 'https://zenithix-org.github.io/Zen-AI/'
        },
        {
            category: 'games',
            name: 'Lost in maze',
            url: 'https://drive.google.com/file/d/1GJ0bZYQ0lP8YNMaNUn8XjV5wZyPvvij9/view?usp=drive_link',
            thumbnail: 'https://via.placeholder.com/200x100?text=Game+1',
            viewUrl: 'https://zenithix-org.github.io/lost-in-maze/'
        },
        {
            category: 'games',
            name: 'World At War',
            url: 'https://drive.google.com/file/d/1D0GVfTPt2hCXO_FwgSbKSBH1cvBTsnRT/view?usp=drive_link',
            thumbnail: '',
            viewUrl: 'https://zenithix-org.github.io/world-at-war/'
        }
    ];

    // Function to display the files
    function displayFiles(filesToDisplay) {
        fileList.innerHTML = '';
        filesToDisplay.forEach(file => addFileCard(file));
    }

    // Function to add file cards to the display
    function addFileCard(file) {
        const fileCard = document.createElement('div');
        fileCard.className = 'app-card';
        fileCard.dataset.name = file.name.toLowerCase();
        fileCard.dataset.category = file.category;

        const fileImage = document.createElement('img');
        fileImage.src = file.thumbnail;
        fileImage.alt = file.name;

        const fileInfo = document.createElement('div');
        fileInfo.className = 'app-info';

        const fileTitle = document.createElement('h3');
        fileTitle.textContent = file.name;

        const fileLink = document.createElement('a');
        fileLink.href = file.url;
        fileLink.download = file.name;
        fileLink.textContent = 'Download';

        const viewLink = document.createElement('a');
        viewLink.href = '#';
        viewLink.textContent = 'View';
        viewLink.className = 'view-button';
        viewLink.onclick = function () {
            loadAppInViewer(file.viewUrl);
            return false;
        };

        fileInfo.appendChild(fileTitle);
        fileInfo.appendChild(viewLink);
        fileInfo.appendChild(fileLink);
        fileCard.appendChild(fileImage);
        fileCard.appendChild(fileInfo);
        fileList.appendChild(fileCard);
    }

    // Function to load the app in the viewer
    function loadAppInViewer(viewUrl) {
        appViewer.src = '';
        viewSection.classList.remove('hidden');
        fileList.classList.add('hidden');
        aboutSection.classList.add('hidden');
        appViewer.src = viewUrl;
    }

    // Show the About section
    function showAbout() {
        aboutSection.classList.remove('hidden');
        fileList.classList.add('hidden');
        viewSection.classList.add('hidden');
    }

    // Function to go back to the file list
    function goBack() {
        viewSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
        fileList.classList.remove('hidden');
        appViewer.src = '';
    }

    // Display initial files
    displayFiles(files);
});

// Search and category functionality
function searchFiles() {
    const searchBar = document.getElementById('search-bar');
    const filter = searchBar.value.toLowerCase();
    const fileCards = document.querySelectorAll('.app-card');

    fileCards.forEach(card => {
        const fileName = card.dataset.name;
        if (fileName.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showCategory(category) {
    const fileCards = document.querySelectorAll('.app-card');

    fileCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

