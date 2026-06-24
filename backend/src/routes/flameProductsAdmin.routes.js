const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const uploadAvatar = require("../middlewares/uploadAvatar");
const FlameProductAdminController = require("../controllers/FlameProductAdminController");
const asyncHandler = require("../utils/asyncHandler");

const router = Router();
const admin = [authMiddleware, roleMiddleware("Administrator")];

router.get("/products", ...admin, asyncHandler(FlameProductAdminController.listProducts));
router.get("/products/:id", ...admin, asyncHandler(FlameProductAdminController.getProduct));
router.post(
  "/products",
  ...admin,
  uploadAvatar.single("image"),
  asyncHandler(FlameProductAdminController.createProduct)
);
router.put(
  "/products/:id",
  ...admin,
  uploadAvatar.single("image"),
  asyncHandler(FlameProductAdminController.updateProduct)
);
router.delete("/products/:id", ...admin, asyncHandler(FlameProductAdminController.deleteProduct));

router.post(
  "/uploads/image",
  ...admin,
  uploadAvatar.single("image"),
  asyncHandler(FlameProductAdminController.uploadImage)
);

module.exports = router;
