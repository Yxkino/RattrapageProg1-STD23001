import { expect } from "chai";
import { describe } from "mocha";
import { removeWords } from "./exo1.js";
import { getMostPopularPlaces } from "./exo1.js";

describe('removeWords', () => {
    it('should remove specified words from the string', () => {
        expect(removeWords("Hello, ceci est un test", ["ceci", "un"])).to.equal("Hello, est test");
        expect(removeWords("Hello Java", ["java"])).to.equal("Hello Java");
    });
    it('should not remove words that are not specified', () => {
        expect(removeWords("Hello, ceci est un test", ["ceci", "un", "test"])).to.equal("Hello, est");
    });
});

describe('getMostPopularPlaces', () => {
    it('should return the two most popular places', () => {
        expect(getMostPopularPlaces("Analamahitsy", "Analamahitsy", "Itaosy", "Behoririka", "Itaosy", "Itaosy")).to.equal("Itaosy Analamahitsy");
    });
    it('should handle cases where there are less than two unique places', () => {
        expect(getMostPopularPlaces("Analamahitsy", "Analamahitsy")).to.equal("Analamahitsy");
    });
});
