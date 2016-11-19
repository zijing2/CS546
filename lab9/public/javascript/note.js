(function ($) {
    var prev_button = $("#note_prev");
    var next_button = $("#note_next");
    var current_note = $("#current_note");
    var title = $("#title");
    var due_date = $("#due_date");
    var summary = $("#summary");
    var body = $("#body");

    prev_button.click(function () {
        if($.inArray("disabled", this.classList)==-1){
            var prev_note = parseInt(current_note.val())-1;
            var requestConfig = {
            method: "GET",
            url: "/"+prev_note,
            contentType: 'application/json',
            data: {}
        };
        $.ajax(requestConfig).then(function (resObj) {
            var note = resObj.note;
            current_note[0].value = resObj.current_note;
            if(resObj.previous==0){
                if($.inArray("disabled", prev_button[0].classList)==-1){
                    prev_button.addClass("disabled");
                }
            }else if(resObj.previous==1){
                if($.inArray("disabled", prev_button[0].classList)==1){
                    prev_button.removeClass("disabled");
                }
            }
            if(resObj.next==0){
                if($.inArray("disabled", next_button[0].classList)==-1){
                    next_button.addClass("disabled");
                }
            }else if(resObj.next==1){
                if($.inArray("disabled", next_button[0].classList)==1){
                    next_button.removeClass("disabled");
                }
            }
            
            title[0].innerText = note.title;
            due_date[0].innerText = note.due_date;
            summary[0].innerHTML = note.summary;
            body[0].innerHTML = note.body;
            
        });
        }
    });

    next_button.click(function () {
        if($.inArray("disabled", this.classList)==-1){
            var next_note = parseInt(current_note.val())+1;
            var requestConfig = {
            method: "GET",
            url: "/"+next_note,
            contentType: 'application/json',
            data: {}
        };
        $.ajax(requestConfig).then(function (resObj) {
            var note = resObj.note;
            current_note[0].value = resObj.current_note;
            if(resObj.previous==0){
                if($.inArray("disabled", prev_button[0].classList)==-1){
                    prev_button.addClass("disabled");
                }
            }else if(resObj.previous==1){
                if($.inArray("disabled", prev_button[0].classList)==1){
                    prev_button.removeClass("disabled");
                }
            }
            if(resObj.next==0){
                if($.inArray("disabled", next_button[0].classList)==-1){
                    next_button.addClass("disabled");
                }
            }else if(resObj.next==1){
                if($.inArray("disabled", next_button[0].classList)==1){
                    next_button.removeClass("disabled");
                }
            }
            title[0].innerText = note.title;
            due_date[0].innerText = note.due_date;
            summary[0].innerHTML = note.summary;
            body[0].innerHTML = note.body;
        });
        }
    });


})(jQuery);