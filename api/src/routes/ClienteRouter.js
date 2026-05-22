const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

/**
 * @openapi
 * /produto:
 *   post:
 *     tags:
 *         - Produto
 *     summary: Cria um novo produto
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *   get:
 *     tags:
 *         - Produto
 *     summary: Retorna todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 */
router.post('/', clienteController.create);
router.get('/', clienteController.getAll);

/**
 * @openapi
 * /produto/{id}:
 *   get:
 *     tags:
 *         - Produto
 *     summary: Retorna um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *   put:
 *     tags:
 *         - Produto
 *     summary: Atualiza um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *   delete:
 *     tags:
 *         - Produto
 *     summary: Deleta um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 */
router.get('/:id', clienteController.getById);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;
