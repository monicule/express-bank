export function dataValidation(body) {
    let errorMessage = '';
    if (typeof body !== 'object'
        || Array.isArray(body)
        || body === null) {
        errorMessage = `Netinkamas duomenų tipas, turi būti objektas.`;
    } else if (Object.keys(data).length !== 3) {
        errorMessage = `Objektas turi turėti 3 key/value poras`;
    }
    return errorMessage;
}