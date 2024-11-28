const { RoomController } = require("../../app/controller/support/room.controller");
const { uploadFile } = require("../../app/utils/multer");
const router = require("express").Router();
router.post("/add",uploadFile.single("image"), RoomController.addRoom)
router.get("/list", RoomController.getListOfRooms)
module.exports = {
    ApiRoomRouter : router
}