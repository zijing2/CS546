const express = require('express');
const router = express.Router();
const data = require("../data");
const aboutMeData = data.aboutMe;

router.get("/education", (req, res) => {
    let eduInfo = aboutMeData.getEdu();
    if(!eduInfo){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: eduInfo});  
    }        
});

router.get("/education/highschool", (req, res) => {
    let highschool = aboutMeData.getHighschool();
    if(!highschool){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: highschool});
    }
        
});

router.get("/education/undergrad", (req, res) => {
    let undergrad = aboutMeData.getUndergrad();
    if(!undergrad){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: undergrad}); 
    }
       
});

router.get("/hobbies", (req, res) => {
    let hobbies = aboutMeData.getHobbies();
    if(!hobbies){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: hobbies});   
    }
     
});

router.get("/hobbies/:hobby", (req, res) => {
    let hobbiesDetail = aboutMeData.getHobbiesDetail(req.params.hobby);
    if(!hobbiesDetail){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: hobbiesDetail});  
    }
      
});

router.get("/classes", (req, res) => {
    let classes = aboutMeData.getClasses();
    if(!classes){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: classes});   
    }
     
});

router.get("/classes/details", (req, res) => {
    let classDetail = aboutMeData.getClassesDetail(req.query.code);
    if(!classDetail){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: classDetail});  
    }
      
});

router.get("/", (req, res) => {
    let eduInfo = aboutMeData.getEdu();
    if(!eduInfo){
        res.status(404).json({error: "Not found"});
    }else{
        res.status(200).json({information: eduInfo});  
    }        
});

module.exports = router;