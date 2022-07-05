const { Router } = require("express");
const { getGames,getDetails } = require("../controllers");
const router = Router();

router.get("/", async (req,res)=>{
    const {name} = req.query
    let response = await getGames(name);
    res.status(200).send(response);
});

router.get("/:id", async (req,res)=>{
    let { id } = req.params;
    let response = await getDetails(id);
    let status = response ? 200 : 400;
    res.status(status).send(response);
});





module.exports = router;