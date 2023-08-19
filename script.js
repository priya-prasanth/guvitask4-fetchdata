const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function populateGrid() {
    const gridContainer = document.getElementById('gridContainer');
    const data = await fetchData();

    data.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Username:</strong> ${item.username}</p>
            <p><strong>Address:</strong> ${item.address.city}, ${item.address.street}, ${item.address.suite}</p>
        `;
        gridContainer.appendChild(gridItem);
    });
}

populateGrid();

