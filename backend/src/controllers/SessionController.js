const User = require('../models/User');

// Aqui temos, 5 métodos:
// index: Lista as sessões
// show: Mostra apenas uma sessão
// store: Cria uma sessão
// update: Altera uma sessão
// destroy: Destrói uma sessão

module.exports = {
    async store(req, res) {
        const { email } = req.body; // Pegando o email do corpo da requisição

        let user = await User.findOne({ email }); // Verifica se esse email já está cadastrado...

        if(!user) {
            user = await User.create({ email }); // ...Cria um novo, caso contrário
        }

        return res.json(user);
    }
};