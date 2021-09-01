const { Schema, model, Types } = require("mongoose");
const date = require('../utils/date');
const {ReactionSchema} = require("./Reaction")


const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => date(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
    