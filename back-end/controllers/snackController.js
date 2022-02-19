const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks");
const { checkName, capitalization } = require("../validations/checkSnacks.js");
const confirmHealth = require("../confirmHealth.js");
const res = require("express/lib/response");


snacks.get("/", async (request, response) => {
    try{
        const allSnacks = await getAllSnacks(); 
        if(allSnacks[0]) { 
            const result = {success: true, payload: allSnacks}
            response.status(200).json(result);
        } else {
            response.status(500).json({ success: false, payload: "server error" });
        }
    } catch (error) {
        console.lof(error)
    }
});

snacks.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await getSnack(id);
        if(snack.id) {
            response.status(200).json({success:true, payload:snack});
        } else {
            response.status(404).json({success: false, payload: "Snack not found"});
        }
    } catch (error) {
        console.log(error);
    }
});

snacks.post("/", async (request, response) => {
    let { body } = request;
    try {
        if(!body.name){
            res.status(422).json({success: false, payload: "Must include name field"})
            return;
        }
        if(!body.image){
            body = {...body, image:"https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"}
        }
        body = {...body, name: capitalization(body.name), is_healthy:confirmHealth(body)};
        const createdSnack = await createSnack(body);
        if (createdSnack.id) {
            response.status(200).json({success: true, payload: createdSnack});
        } else {
            response.status(500).json({success: false, payload: "Snack create error"});
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.delete("/:id", async(req, res)=>{
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id){
        res.status(200).json({success: true, payload: deletedSnack});
    } else {
        res.status(404).json({success: false, payload: "Snack not found"});
    }
})

snacks.put("/:id", async(req, res)=>{
    const { id } = req.params;
    let { body } = req;
    body = {...body, is_healthy: confirmHealth(body), name: capitalization(body.name)}
    const updatedSnack = await updateSnack(id, body);
    if(updatedSnack.id){
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({error: "Snack not found"});
    }
})

module.exports = snacks;