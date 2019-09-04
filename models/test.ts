import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const test = new Schema({
    nameTest : String,
    type : Boolean
})

export const testModel = mongoose.model('test', test)

