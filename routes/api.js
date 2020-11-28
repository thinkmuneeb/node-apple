//we will create routes in a saparate file. for good managment.
const express = require('express');
const router = express.Router();

//we need to tell app to use these routes

//get list of ninjas from DB
router.get('/ninjas',function(req,res){ // www.url.com/api/ninjas
  console.log(req.body);
  res.send({type:'GET'});  
});

//add a ninja to DB
router.post('/ninjas',function(req,res){
  console.log(req.body);
  res.send({type:'POST'});
});

//update ninja in DB
router.put('/ninjas:id',function(req,res){
  console.log(req.body);
  res.send({type:'PUT'});  
});

//delete ninja from DB
router.delete('/ninjas:id',function(req,res){
  console.log(req.body);
  res.send({type:'DELETE'});  
});

module.export = router; //module is built in, folderize concept