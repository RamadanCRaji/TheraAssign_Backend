const express = require("express");
const router = express.Router();
const {
   getAllRooms,
   getRoomById,
   changePatientRoom,
   swapRoom,
   getAvailableRooms,
} = require("../controllers/roomController");

const { authorizer } = require("../middlewares/is_auth"); // Uncomment this line if authentication middleware is needed

/**
 * @desc Fetch all rooms in the hospital
 * @route GET /api/rooms/all
 */
router.get("/all", getAllRooms);

/**
 * @desc Fetch all availablerooms in the hospital
 * @route GET /api/rooms/available
 */
router.get("/available", getAvailableRooms);

/**
 * @desc Swap room
 * @route PUT /api/rooms/swapRoom
 */
router.put("/swapRoom", swapRoom);

/**
 * @desc Update a single room
 * @route PUT /api/rooms/updateRoom/:roomId
 */
router.put("/changePatientRoom", changePatientRoom);

/**
 * @desc Fetch room by ID
 * @route GET /api/rooms/:roomId
 */
router.get("/:roomId", getRoomById);

module.exports = router;
