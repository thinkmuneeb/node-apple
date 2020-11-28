//we will create routes in a saparate file. for good managment.
const express = require('express');
const router = express.Router();

router.post('ninjas',function(req,res){
  console.log(req.body);
  res.send({type:'POST'});
});

router.get('ninjas',function(req,res){
  console.log(req.body);
  res.send({type:'POST'});  
});