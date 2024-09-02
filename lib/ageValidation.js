export function ageValidation(dob) {
    let errorMessage = '';
    if (typeof dob !== 'string') {
        return errorMessage = 'Gimimo data turi būti stringas';
    } else if (dob.trim().length <= 0) {
        return errorMessage = 'Įrašykite gimimo datą';
    }
    const bDay = dob.split('-');
    if (bDay[0].length !== 4 || bDay[1].length !== 2 || bDay[2].length !== 2) {
        return errorMessage = 'Gimimo datos formatas: "YYYY-MM-DD"';
    } else if (parseInt(bDay[0]) < 1900) {
        return errorMessage = 'Gimimo metai turi būti vėlesni nei 1900';
    } else if (isNaN(new Date(dob))) {
        return errorMessage = 'Gimimo datos formatas: "YYYY-MM-DD"';
    }
    bDay[0] = parseInt(bDay[0]) + 18 + '';
    if (new Date(bDay) > new Date()) {
        return errorMessage = 'Sąskaitą atsidaryti galima tik pilnamečiams asmenims nuo 18 metų';
    }
    return errorMessage;
}