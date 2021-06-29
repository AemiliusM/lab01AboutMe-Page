export function isYes(word){
    word = word.toLowerCase();
    if (word === 'yes' || word === 'y' || word === 'yeah'){
        return true;
    } else {
        return false;
    }
}
export function isNo(word){
    word = word.toLowerCase();
    if (word === 'no' || word === 'n' || word === 'nope'){
        return true;
    } else {
        return false;
    }
}
