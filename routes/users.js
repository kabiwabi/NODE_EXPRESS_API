import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]

// all routes already start with '/users'
router.get('/', (req, res) => {
    res.send(users);
    res.send('Hello');
});

export default router;