(function ($,location) {
    var new_form = $("#new_form");
    var note_title = $("#note_title");
    var note_due_date = $("#note_due_date");
    var note_summary = $("#note_summary");
    var note_body = $("#note_body");
    var form_submit_err = $("#form_submit_err");

    note_title.focusout(function(){
        if(!note_title.val()){
            form_submit_err[0].innerText = "title can't be empty";
            form_submit_err.show();
        }else{
            form_submit_err.hide();
        }
    });

    note_summary.focusout(function(){
        if(!note_summary.val()){
            form_submit_err[0].innerText = "summary can't be empty";
            form_submit_err.show();
        }else{
            form_submit_err.hide();
        }
    });

    note_body.focusout(function(){
        if(!note_body.val()){
            form_submit_err[0].innerText = "body can't be empty";
            form_submit_err.show();
        }else{
            form_submit_err.hide();
        }
    });

     new_form.submit(function (event) {
        event.preventDefault();
        if(!note_title.val()){
            form_submit_err[0].innerText = "title can't be empty";
            form_submit_err.show();
            return;
        }else if(!note_due_date.val()){
            form_submit_err[0].innerText = "due date can't be empty";
            form_submit_err.show();
            return;
        }else if(!note_summary.val()){
            form_submit_err[0].innerText = "summary can't be empty";
            form_submit_err.show();
            return;
        }else if(!note_body.val()){
            form_submit_err[0].innerText = "body can't be empty";
            form_submit_err.show();
            return;
        }
        var requestConfig = {
                method: "POST",
                url: "/new",
                contentType: 'application/json',
                data: JSON.stringify({
                    title: note_title.val(),
                    due_date: note_due_date.val(),
                    summary: note_summary.val(),
                    body: note_body.val()
                })
        };

        $.ajax(requestConfig).then(function (resObj) {
                if(resObj.created==1){
                    location.href = "/"+resObj.current_note;
                }else{
                    $("#form_submit_err")[0].innerText = resObj.error;
                    $("#form_submit_err").show();
                }
            });
     });
})(jQuery,window.location);