const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require ('../../controllers/thought-controller');

router
    .route('/') 
    .get(getAllThoughts)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtID/reactions')
    .post(newReaction);

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
