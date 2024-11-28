const router = require("express").Router();
const { SupportSectionRouter } = require("./support/support.router");
router.use("/support", SupportSectionRouter)

module.exports = {
    AllRoutes : router
}