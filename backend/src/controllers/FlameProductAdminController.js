const FlameProductService = require("../services/FlameProductService");
const { sendServiceResult } = require("../utils/sendServiceResult");

class FlameProductAdminController {
  static async listProducts(req, res) {
    return sendServiceResult(res, await FlameProductService.adminListProducts());
  }

  static async getProduct(req, res) {
    return sendServiceResult(res, await FlameProductService.adminGetProduct(req.params.id));
  }

  static async createProduct(req, res) {
    return sendServiceResult(
      res,
      await FlameProductService.adminCreateProduct(req.body || {}, req.file),
      201
    );
  }

  static async updateProduct(req, res) {
    return sendServiceResult(
      res,
      await FlameProductService.adminUpdateProduct(req.params.id, req.body || {}, req.file)
    );
  }

  static async deleteProduct(req, res) {
    return sendServiceResult(res, await FlameProductService.adminDeleteProduct(req.params.id));
  }

  static async uploadImage(req, res) {
    return sendServiceResult(res, await FlameProductService.adminUploadImage(req.file), 201);
  }
}

module.exports = FlameProductAdminController;
