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
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found by this id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Post new user /api/users
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // Put to update user by id /api/users/:id
    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({ _id: paramas.id }, body, {new: true, runValidators: true}
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found by this id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // Delete to remove user by id /aapi/user/:id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found by this id'});
                    return;
                } else if (dbUserData.thoughts) {
                    return Thought.deleteMany(
                        { _id: { $in: dbUserData.thoughts } }
                    );
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // Friend Related Routes

    // Post to add a new friend to a user;s friend list
}
