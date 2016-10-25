const express = require('express');
const router = express.Router();
const data = require("../data");
const people = data.people;
const events = data.events;

// Single Person Page
router.get("/:id", (req, res) => {
    // Find a person by the provided id, 
    // then display their information
    // As well as listing all events that they will be attending
    // Each of these events need to link to the event page, and show the event name
    // If a person is not found, display the 404 error page
    return people.getPerson(req.params.id).then((person)=>{
        return events.getEventsForAttendee(req.params.id).then((eventsForAttendee)=>{
            
            var dataObj = {
                "person" : person,
                "evnentsForAttendee" : eventsForAttendee
            };            
            //res.render("misc/debug", { debug: true, modelData: { something: dataObj } });
            res.status(200).render("people/single",  { dataObj : dataObj } );
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
    }).catch((e) => {
        res.status(404).render("error/404");
    });
    
});

// People Index Page
router.get("/", (req, res) => {
    // Display a list of all people; it can be in an unordered list, or a table
    // Each of these people need to link to the single person page
 
    return people.getAllPeople().then((peopleList)=>{
        //res.render("people/all", { debug: true, modelData: { peopleList : peopleList } });
        res.render("people/all",  { people : peopleList } );
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
    
});

module.exports = router;