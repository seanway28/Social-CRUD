const { Schema, model, Types } = require("mongoose");
const date = require('../utils/date');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (createdAtVal) => date(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Reaction = model('Reaction', ReactionSchema);

module.exports = {Reaction, ReactionSchema};
    