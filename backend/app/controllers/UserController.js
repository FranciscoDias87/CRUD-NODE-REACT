const { User } = require('../models');

module.exports = {
  index(req, res) {
    User.findAll({}) //buscar todos os usuários
      .then(users => res.json({
        error: false,
        data: users
      }))
      .catch(error => res.json({
        error: true,
        data: [],
        error: error
      }));
  },

  create(req, res) { //criar novo usuários
    const { name, username } = req.body;
    User.create({ name, username })
      .then(user => res.status(201).json({
        error: false,
        data: user,
        message: 'Novo usuário foi criado'
      }))
      .catch(error => res.json({
        error: true,
        data: [],
        error: error
      }))
  },

  update(req, res) { //atualizar usuário existente
    const { user_id } = req.params.id;

    const { name, username } = req.body;

    User.update({ name, username },
      {
        where: { id: user_id }
      })
      .then(user => res.status(201).json({
        error: false,
        data: user,
        messagem: 'Usuário foi atualizado com sucesso'
      }))
      .catch(error => res.json({
        error: true,
        error: error
      }))
  },

  destroy(req, res) { //deletar usuário existente
    const user_id = req.params.id;
    User.destroy({ where: { id: user_id } })
      .then(status => res.status(201).json({
        error: false,
        message: 'Usuário excluído com sucesso'
      }))
      .catch(error => res.json({
        error: true,
        error: error
      }))
  }

}