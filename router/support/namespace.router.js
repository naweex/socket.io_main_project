const { NamespaceController } = require("../../app/controller/support/namespace.controller");
const router = require("express").Router();
router.post("/add", NamespaceController.addNamespace)
router.get("/list", NamespaceController.getListOfNamespaces)
module.exports = {
    ApiNamespaceRouter : router
}