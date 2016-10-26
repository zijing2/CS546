const express = require('express');
const router = express.Router();
const data = require("../data");
const events = data.events;
const people = data.people;
const locations = data.locations;

// Single Event Page
router.get("/:id", (req, res) => {
    // Find a event by the provided id, 
    // then display its information
    // As well as listing the names of all the attendees that will be at this event 
    // Each of these attendee names will need to link to their person page
    // You will also list the location of the event, said location's name, and a link to the location page

    // If a event is not found, display the 404 error page
    return events.getEvent(req.params.id).then((event)=>{
            return people.getAllPeople().then((people)=>{
                var peopleList = [];
                for (var i = 0; i < event.attendees.length; i++) {
                    for(var j =0; j < people.length; j++){
                        if(event.attendees[i] == people[j].id){
                            peopleList.push(people[j]);
                            break;
                        }
                    }
                }
                return locations.getAllLocations().then((locationsList)=>{
                    var location;
                    for (var i = 0; i < locationsList.length; i++) {
                        if(locationsList[i].id == event.location){
                            location = locationsList[i];
                        }                        
                    }
                     res.status(200).render("events/single",  { event : event, people : peopleList, location : location } );
                });

               
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
        
    }).catch((e) => {
        res.status(404).render("error/404");
    });
});

// Event Index Page
router.get("/", (req, res) => {
    // Display a list of all events; it can be in an unordered list, or a table
    // Each of these events need to link to the single event page
    
    
    return events.getAllEvents().then((eventsList)=>{
        return people.getAllPeople().then((peopleList)=>{            
            return locations.getAllLocations().then((locationsList)=>{
                for (var i = 0; i < eventsList.length; i++) {
                    var peopleArr = [];
                    var locationsArr = [];
                    for (var j = 0; j < peopleList.length; j++) {
                       if(eventsList[i].attendees.indexOf(peopleList[j].id) >= 0){
                           peopleArr.push(peopleList[j]);
                       }                        
                    }
                    for (var z = 0; z < locationsList.length; z++) {
                        if(eventsList[i].location == locationsList[z].id){
                            locationsArr.push(locationsList[z]);
                        }
                    }
                    eventsList[i].peopleArr = peopleArr;
                    eventsList[i].locationsArr = locationsArr;
                }

                res.render("events/all",  { events : eventsList } );
            })
        });

        
    }).catch((e) => {
        res.status(500).json({ error: e });
    });

});

module.exports = router;