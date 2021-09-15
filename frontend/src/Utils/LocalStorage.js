// saves messages data to local Storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// loads messages data (if it exists) from local Storage
function loadData(key) {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch (err) {
        return undefined;
    }
}

export { loadData, saveData };