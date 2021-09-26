import express from 'express';

const router = express.Router();

// all routes already start with '/users'
router.get('/', (req,res) => {
    res.send('Hello');
});

export default router;