export function removeWords(original, wordsToRemove) {
    const wordsSet = new Set(wordsToRemove);
    return original.split(' ').filter(word => !wordsSet.has(word)).join(' ');
}

export function getMostPopularPlaces(...places) {
    const placeCount = places.reduce((acc, place) => {
        acc[place] = (acc[place] || 0) + 1;
        return acc;
    }, {});

    const sortedPlaces = Object.entries(placeCount).sort(([, countA], [, countB]) => countB - countA).slice(0, 2).map(([place]) => place);

    return `${sortedPlaces[1]} ${sortedPlaces[0]}`; 
}

console.log(removeWords("Hello, ceci est un test", ["ceci", "un"])); 
console.log(removeWords("Hello Java", ["java"])); 
console.log(getMostPopularPlaces("Analamahitsy", "Analamahitsy", "Itaosy", "Behoririka", "Itaosy", "Itaosy")); 