const mongoose = require('mongoose');

// Criar o esquema do nosso usuário
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);