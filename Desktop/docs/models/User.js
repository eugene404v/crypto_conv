const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}], //delete
    favs: [{type: Types.ObjectId, ref: 'Favs'}]
})

module.exports = model('User', schema)