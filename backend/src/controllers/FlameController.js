const FlameService = require("../services/FlameService");
const { sendServiceResult } = require("../utils/sendServiceResult");

class FlameController {
  static async wallet(req, res) {
    return sendServiceResult(res, await FlameService.getWallet(req.user));
  }

  static async history(req, res) {
    return sendServiceResult(res, await FlameService.history(req.user, req.query || {}));
  }

  static async requestRewardedAd(req, res) {
    return sendServiceResult(res, await FlameService.requestRewardedAd(req.user, req));
  }

  static async completeRewardedAd(req, res) {
    return sendServiceResult(res, await FlameService.completeRewardedAd(req.user, req.body || {}));
  }

  static async spend(req, res) {
    return sendServiceResult(res, await FlameService.spend(req.user, req.body || {}));
  }

  static async adminSettings(req, res) {
    return sendServiceResult(res, await FlameService.getAdminSettings());
  }

  static async updateAdminSettings(req, res) {
    return sendServiceResult(res, await FlameService.updateAdminSettings(req.user, req.body || {}));
  }

  static async adminMetrics(req, res) {
    return sendServiceResult(res, await FlameService.metrics());
  }
}

module.exports = FlameController;
