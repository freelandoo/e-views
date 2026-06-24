const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const asyncHandler = require("../utils/asyncHandler");
const FlameController = require("../controllers/FlameController");

const router = Router();
const auth = [authMiddleware];

router.get("/wallet", ...auth, asyncHandler(FlameController.wallet));
router.get("/history", ...auth, asyncHandler(FlameController.history));
router.post("/rewarded-ad/request", ...auth, asyncHandler(FlameController.requestRewardedAd));
router.post("/rewarded-ad/complete", ...auth, asyncHandler(FlameController.completeRewardedAd));
router.post("/spend", ...auth, asyncHandler(FlameController.spend));

module.exports = router;
