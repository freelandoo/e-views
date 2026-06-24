const FlameProductService = require("../services/FlameProductService");
const { sendServiceResult } = require("../utils/sendServiceResult");

class FlameProductController {
  static async listProducts(req, res) {
    return sendServiceResult(res, await FlameProductService.listPublic());
  }

  static async getProduct(req, res) {
    return sendServiceResult(res, await FlameProductService.getPublic(req.params.id));
  }

  static async checkout(req, res) {
    return sendServiceResult(
      res,
      await FlameProductService.createStripeCheckout(req.user, { product_id: req.params.id })
    );
  }
}

module.exports = FlameProductController;
