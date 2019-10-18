const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: String,
    role: {type: String, enum: ['user', 'adm'], default: 'user'},
    email: String,
    password: String,
  },
  {
    timestamps: true
  }
);
adminSchema.plugin(findOrCreate);

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;