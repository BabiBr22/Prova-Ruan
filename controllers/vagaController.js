const Vaga = require('../models/Vaga');

// POST /vagas: Adicionar uma nova vaga
exports.createVaga = async (req, res) => {
  try {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
    return res.status(201).json(vaga);
  } catch (error) {
    return res.status(422).json({ error: 'Erro ao criar vaga. Verifique os dados enviados.' });
  }
};

// GET /vagas: Listar todas as vagas
exports.getVagas = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ attributes: ['id', 'titulo'] });
    return res.status(200).json(vagas);
  } catch (error) {
    return res.status(503).json({ error: 'Serviço temporariamente indisponível. Tente novamente mais tarde.' });
  }
};

// GET /vagas/:id: Detalhes de uma vaga específica
exports.getVagaById = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (vaga) {
      return res.status(200).json(vaga);
    } else {
      return res.status(404).json({ error: 'Vaga não encontrada.' });
    }
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao buscar vaga. Verifique o ID informado.' });
  }
};

// PUT /vagas/:id: Atualizar uma vaga
exports.updateVaga = async (req, res) => {
  try {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    const vaga = await Vaga.findByPk(req.params.id);
    if (vaga) {
      await vaga.update({ titulo, descricao, cargo, cidade, salario });
      return res.status(200).json(vaga);
    } else {
      return res.status(404).json({ error: 'Vaga não encontrada.' });
    }
  } catch (error) {
    return res.status(422).json({ error: 'Erro ao atualizar vaga. Verifique os dados enviados.' });
  }
};

// DELETE /vagas/:id: Remover uma vaga
exports.deleteVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (vaga) {
      await vaga.destroy();
      return res.status(200).json({ message: 'Vaga removida com sucesso.' });
    } else {
      return res.status(404).json({ error: 'Vaga não encontrada.' });
    }
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao remover vaga. Verifique o ID informado.' });
  }
};

// GET /cargo/:cargo: Filtrar vagas por cargo
exports.getVagasByCargo = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
    return res.status(200).json(vagas);
  } catch (error) {
    return res.status(503).json({ error: 'Serviço temporariamente indisponível. Tente novamente mais tarde.' });
  }
};

// GET /localizacao/:cidade: Filtrar vagas por cidade
exports.getVagasByCidade = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
    return res.status(200).json(vagas);
  } catch (error) {
    return res.status(503).json({ error: 'Serviço temporariamente indisponível. Tente novamente mais tarde.' });
  }
};
