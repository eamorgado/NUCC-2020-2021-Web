/**
 * Function to get class object
 */
function getClassElement(name) {
    return document.getElementsByClassName(name);
}

/**
 * Function to get id object
 */
function getIdElement(id) {
    return document.getElementById(id);
}

/**
 * Function to get All cells of game-grid
 */
function getAllCells(name) {
    return getClassElement(name).childNodes;
}