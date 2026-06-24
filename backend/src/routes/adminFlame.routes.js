const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const asyncHandler = require("../utils/asyncHandler");
const FlameController = require("../controllers/FlameController");

const router = Router();
const admin = [authMiddleware, roleMiddleware("Administrator")];

router.get("/settings", ...admin, asyncHandler(FlameController.adminSettings));
router.put("/settings", ...admin, asyncHandler(FlameController.updateAdminSettings));
router.get("/metrics", ...admin, asyncHandler(FlameController.adminMetrics));

module.exports = router;
