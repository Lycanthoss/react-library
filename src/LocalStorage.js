const BOOKSTORAGEKEY = "books";

function storageAvailable() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");

        return true;
    }
    catch (e) {
        return false;
    }
}

function initStorage() {
    if (storageAvailable()) {
        if (localStorage.getItem(BOOKSTORAGEKEY) === null) {
            let newStorage = {
                [BOOKSTORAGEKEY]: null,
            };
    
            localStorage.setItem(BOOKSTORAGEKEY, JSON.stringify(newStorage));
        }
        return true;
    }
    else {
        console.log("Couldn't initialize local storage," +
        "because of something blocking it or because it is already initialized");

        return false;
    }
}

/** @param {Array.<BookObject>} bookArray */
function saveToStorage(bookArray) {
    if (storageAvailable) {
        let newStorage = {
            [BOOKSTORAGEKEY]: bookArray,
        };

        localStorage.setItem(BOOKSTORAGEKEY, JSON.stringify(newStorage));
    }
    else {
        console.log("Couldn't save to storage.");
    }
}

function getBooksFromStorage() {
    return JSON.parse(localStorage.getItem(BOOKSTORAGEKEY)).books;
}

export { storageAvailable, initStorage, saveToStorage, getBooksFromStorage };