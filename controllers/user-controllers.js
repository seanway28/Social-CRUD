const { User, Thought } = require('../models');
const { param } = require('../routes/api.thought-routes');

const userController = {
    // Get all users / api/users
    getAllUser (req, res) {
        User.find({})
            .populate ({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Get user by id /api/users/:id
    getUserBy
}