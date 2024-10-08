const express = require("express");
const router = express.Router();
const {
   getAllWheelchairs,
   getAvailableWheelChairs,
   getUnAvailableWheelChairs,
   returnWheelChair,
   updatePersonalWheelChair,
   getWheelChairById,
} = require("../controllers/wheelChairController");

const { authorizer } = require("../middlewares/is_auth"); //Uncomment this line if authentication middleware is needed

/**
 * @desc fetch all wheelChairs
 * @route GET /api/wheelchair/all
 */
router.get("/all", getAllWheelchairs);

/**
 * @desc fetch available WheelChairs
 * @route GET /api/wheelchair/available
 */
router.get("/available", getAvailableWheelChairs);

/**
 * @desc fetch unavailable WheelChairs
 * @route GET /api/wheelchair/unavailable
 */
router.get("/unavailable", getUnAvailableWheelChairs);

/**
 * @desc return wheel Chair Back to closet
 * @route PUT /api/wheelchair/return
 */
router.put("/return", returnWheelChair);

/**
 * @desc update personal wheelchair status
 * @route PUT /api/wheelchair/update
 */
router.put("/update/personal", updatePersonalWheelChair);

/**
 * @desc fetch  Wheel Chair By Id
 * @route GET /api/wheelchair/:wheelChairId
 */
router.get("/:wheelchairId", getWheelChairById);

module.exports = router;
