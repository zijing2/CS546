const jsonFile = require("./jsonFileMod");

let exportedMethods = {
    getAllNotes(){
        return jsonFile.readJSON(global.app_dir+"/file/notes.json").then((data)=>{
            return data;
        });
    },
    createNote(title,due_date,summary,body){
        return this.getAllNotes().then((notes_list)=>{
            if(!title){
                throw "title can not be empty";
            }
            if(!due_date){
                throw "due_date can not be empty";
            }
            if(!summary){
                throw "summary can not be empty";
            }
            if(!body){
                throw "body can not be empty";
            }
            var new_note = {
            "title" : title,
            "due_date" : due_date,
            "summary" : summary,
            "body" : body
            };
            notes_list.push(new_note);
            console.log(notes_list.length);
            
            return jsonFile.writeJSON(global.app_dir+"/file/notes.json",notes_list).then(()=>{
                return notes_list.length;
            });
        });
    }
}

module.exports = exportedMethods;