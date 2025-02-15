import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// Mock database
const users = [];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.findIndex((user) => user.id === id);

    if (foundUser === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(users[foundUser]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.findIndex((user) => user.id === id);

    if (foundUser === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    users.splice(foundUser, 1);

    res.send(`Usuário ${id} foi deletado com sucesso.`);
});


router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.status(201).send(user);
})

router.put('/:id', (req, res) => {
    const user = req.body;

    const { id } = req.params;

    const foundUser = users.findIndex((user) => user.id === id);

    if (foundUser === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    users[foundUser] = { ...users[foundUser], ...user };
    
    res.send(user);
});

export default router