import express from "express";
import { accounts } from '../data/accounts.js';
import { isName } from '../lib/nameValidation.js';
import { isSurname } from '../lib/surnameValidation.js';
import { ageValidation } from '../lib/ageValidation.js';
import { dataValidation } from '../lib/dataValidation.js';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodykite konkretų API endpoint\'ą'
    };
    return res.json(data);
});

/*const accounts = [
    {
        name: 'John',
        surname: 'Doe',
        dob: '2000-01-01',
        balance: 1000,
    },
    {
        name: 'Tom',
        surname: 'Smith',
        dob: '2002-02-02',
        balance: 100,
    },
];*/

function findAccount(fullName) {
    const [name, surname] = fullName.split('-');
    return accounts.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase()
        && acc.surname.toLowerCase() === surname.toLowerCase()
    );
}

function doesAccountExist(name, surname) {
    return accounts.find(acc => acc.name.toLowerCase() === name.toLowerCase()
        && acc.surname.toLowerCase() === surname.toLowerCase())
}

apiRouter.get('/api/account', (req, res) => {
    return res.json(accounts);
});

apiRouter.post('/api/account', (req, res) => {
    const { name, surname, dob } = req.body;
    if (!name || !surname || !dob) {
        return res.json({ message: 'Įveskite visus nurodytus duomenis.' });
    }

    const ageNow = calculateAge(dob);
    if (ageNow < 18) {
        return res.json({ message: 'Sąskaitą gali susikurti tik pilnamečiai asmenys (18m. ir daugiau).' })
    }

    if (doesAccountExist(name, surname)) {
        return res.json({ message: 'Sąskaita su tokiu vardu jau egzistuoja.' });
    }

    function createAccount(name, surname, dob) {
        const newAccount = { name, surname, dob, balance: 0 };
        accounts.push(newAccount);
    }
    createAccount(name, surname, dob);

    return res.json({ message: 'Jūsų paskyra sėkmingai sukurta.' });
});

apiRouter.get('/api/account/:fullName', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({
        name: account.name,
        surname: account.surname,
        dob: account.dob
    });
});

apiRouter.delete('/api/account/:fullName', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }


    if (account.balance > 0) {
        return res.json({ message: 'Sąskaitos ištrinti negalima, nes balansas nėra lygus nuliui.' });
    }

    const index = accounts.indexOf(account);
    accounts.splice(index, 1);

    return res.json({ message: 'Sąskaita sėkmingai ištrinta.' });
});


apiRouter.get('/api/account/:fullName/name', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({ name: account.name });
});

apiRouter.get('/api/account/:fullName/surname', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({ surname: account.surname });
});

apiRouter.get('/api/account/:fullName/dob', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({ dob: account.dob });
});