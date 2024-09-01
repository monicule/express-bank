import { firstNonAllowedSymbol, textContainsOnlyAllowedSymbols } from './helpers.js';

export function isSurname(str) {
    const surnameMinSize = 2;
    const surnameMaxSize = 20;
    const surnameAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta pavardės';
    } else if (str.length < surnameMinSize) {
        errorMessage = `Pavardė per trumpa, turi būti minimum ${surnameMinSize} raidės`;
    } else if (str.length > surnameMaxSize) {
        errorMessage = `Pavardė per ilga, negali viršyti ${surnameMaxSize} raidžių`;
    } else if (!textContainsOnlyAllowedSymbols(str, surnameAllowedABC)) {
        errorMessage = `Pavardėje rasta neleistina raidė "${firstNonAllowedSymbol(str, surnameAllowedABC)}"`;
    } else if (str[0].toUpperCase() !== str[0]) {
        errorMessage = `Pavardė turi prasidėti didžiąja raide`;
    }

    return errorMessage;
}