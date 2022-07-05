const { Router } = require("express");
const { postActivity,getActivity} = require("../controllers");
const router = Router();
router.get("/", async (req,res)=>{
    let response = await  getActivity();
    let status = response ? 200 : 400;
    res.status(status).send(response);})
router.post("/", async (req,res)=>{
    let response = await  postActivity(req.body);
    let status = response ? 200 : 400;
    res.status(status).send(response);})







module.exports = router;