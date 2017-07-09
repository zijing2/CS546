const express = require('express');
const router = express.Router();
const data = require("../data");
const locations = data.locations;
const events = data.events;

// Single Location Page
router.get("/:id", (req, res) => {
    // Find a location by the provided id, 
    // then display its information
    // As well as listing all events that will be at this location
    // Each of these events need to link to the event page and show the event name
    // If a location is not found, display the 404 error page
    return locations.getLocation(req.params.id).then((location)=>{
        return events.getAllEvents().then((events)=>{
            var eventsList = [];
            for (var i = 0; i < events.length; i++) {
                 if(location.id == events[i].location){
                     eventsList.push(events[i]);
                 }
            }          
            
            res.status(200).render("locations/single",  { location : location , events : eventsList} );
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
    }).catch((e) => {
        res.status(404).render("error/404");
    });
});

// Location Index Page
router.get("/", (req, res) => {
    // Display a list of all locations; it can be in an unordered list, or a table
    // Each of these locations need to link to the single location page

    return locations.getAllLocations().then((locations)=>{
       
        res.render("locations/all",  { locations : locations } );
    }).catch((e) => {
        res.status(500).json({ error: e });
    });

});

module.exports = router;