export function dataValidation(body) {
    let errorMessage = '';
    if (typeof body !== 'object'
        || Array.isArray(body)
        || body === null) {
        errorMessage = `Netinkamas duomenų tipas.`;
    }
    return errorMessage;
}