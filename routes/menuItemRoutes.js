const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');



//Post method to add Menu Item
router.post('/', async (req, res) =>{
    try{
        const data = req.body  // Assuming the request body contains the person data

        //Create new person document using the mongoose model
        const newMenu = new MenuItem(data);

        //Save the new person to the database
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//GET method to get the all menuitam data
router.get('/', async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})



router.get('/:tasteType', async(req, res) =>{
    try{
        const tasteType = req.params.tasteType;
        if (tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet'){
            const response = await MenuItem.find({taste: tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid taste type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})



module.exports = router;