import { firstNonAllowedSymbol, textContainsOnlyAllowedSymbols } from './helpers.js';

export function isName(str) {
    const nameMinSize = 2;
    const nameMaxSize = 20;
    const nameAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta vardo';
    } else if (str.length < nameMinSize) {
        errorMessage = `Vardas per trumpas, turi būti minimum ${nameMinSize} raidės`;
    } else if (str.length > nameMaxSize) {
        errorMessage = `Vardas per ilgas, negali viršyti ${nameMaxSize} raidžių`;
    } else if (!textContainsOnlyAllowedSymbols(str, nameAllowedABC)) {
        errorMessage = `Varde rasta neleistina raidė "${firstNonAllowedSymbol(str, nameAllowedABC)}"`;
    } else if (str[0].toUpperCase() !== str[0]) {
        errorMessage = `Vardas turi prasidėti didžiąja raide`;
    }

    return errorMessage;
}