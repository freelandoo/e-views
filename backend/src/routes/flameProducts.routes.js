const { Router } = require("express");
const FlameProductController = require("../controllers/FlameProductController");
const authMiddleware = require("../middlewares/authMiddleware");
const asyncHandler = require("../utils/asyncHandler");

const router = Router();

router.get("/products", asyncHandler(FlameProductController.listProducts));
router.get("/products/:id", asyncHandler(FlameProductController.getProduct));
router.post("/products/:id/checkout", authMiddleware, asyncHandler(FlameProductController.checkout));

module.exports = router;
