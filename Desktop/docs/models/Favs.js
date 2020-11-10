const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    link: {type: String, required: true},
    title: {type: String, required: true},
    owner:{type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Favs', schema)