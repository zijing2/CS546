const express = require('express');
const router = express.Router();
const data = require("../data");
const notes = data.notes;
const xss = require('xss');

router.get("/new", (req, res) => {
    res.render("notes/new",{note_new:1});
});

router.post("/new", (req, res) => {
    var postData = req.body;
    notes.createNote(postData.title,postData.due_date,postData.summary,postData.body).then((rtn)=>{
        res.status(200).json({created:1,current_note:rtn-1});
    }).catch((e)=>{
        res.status(200).json({created:0,error:e});
    });
});

router.get("/:note", (req, res) => { 
    notes.getAllNotes().then((notes_list)=>{
        var note = notes_list[req.params.note];
        note['summary'] = xss(note['summary']);
        note['body'] = xss(note['body']);
        var next = 0;
        var previous = 0;
        if(typeof(notes_list[parseInt(req.params.note)+1])!="undefined"){
            next = 1;
        }
        if(typeof(notes_list[parseInt(req.params.note)-1])!="undefined"){
            previous = 1;
        }

        //page render
        if(!req.xhr){
            var render_data = {
                "note":note,
                "next":next,
                "previous":previous,
                "current_note":parseInt(req.params.note)
            }
            res.render("notes/note",render_data);
        }else{
            //ajax
            var render_data = {
                "note":note,
                "next":next,
                "previous":previous,
                "current_note":parseInt(req.params.note)
            }
            res.status(200).json(render_data);
        }
    }).catch((e)=>{
        res.status(500).json({error:e.message});    
    });
    
});

router.get("/", (req, res) => {
    notes.getAllNotes().then((notes_list)=>{
        //filter xss
        for (var index = 0; index < notes_list.length; index++) {
            notes_list[index].summary = xss(notes_list[index].summary);
            notes_list[index].index = index;
        }
        //sort by due_date using buble sort 
        var temp = {};
        for (var i = 0; i < notes_list.length; i++) {
            for (var j = 0; j<notes_list.length-i-1; j++) {
                var timestamp1 = Date.parse(new Date(notes_list[j+1].due_date));
                var timestamp2 = Date.parse(new Date(notes_list[j].due_date));
                if(timestamp1>timestamp2){
                    temp = notes_list[j];
                    notes_list[j] = notes_list[j+1];
                    notes_list[j+1] = temp;
                }
            }
        }
        //console.log(notes_list);
        res.render("notes/list",{note_list:1,"notes_list":notes_list});
    }).catch((e)=>{
        res.status(500).json({error:e.message});
    });
});

module.exports = router;