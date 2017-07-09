// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function ($, localStorage, location) {

    //interval times
    var firstInput = $("#total_interval_tr");
   
    if(!localStorage["total_iteration_times"]){
        localStorage["total_iteration_times"] = 0;
    }else{
        $("#total_interval_tr").children()[1].innerText = localStorage["total_iteration_times"];
    }    
    
    var intervalId = window.setInterval(function () {
        localStorage["total_iteration_times"]++;
        $("#total_interval_tr").children()[1].innerText = localStorage["total_iteration_times"];
    }, 1500);
    $("#total_interval_tr").children()[1].innerText = localStorage["total_iteration_times"];
     
    //form submit
    if(!localStorage["form_submit_times"]){
        localStorage["form_submit_times"] = 0;
    }else{
         $("#submit_times_tr").children()[1].innerText = localStorage["form_submit_times"];
    }    
    $("form").submit(function(e){
        localStorage["form_submit_times"]++;
        $("#submit_times_tr").children()[1].innerText = localStorage["form_submit_times"];
    });
    

    //last inputed value
    if(!localStorage["last_inputed_value"]){
        localStorage["last_inputed_value"] = '';
    }else{
         $("#last_inputed_value_tr").children()[1].innerText = localStorage["last_inputed_value"];
    }

    $("input").keydown(function(text){
        localStorage["last_inputed_value"] = text.key;
        $("#last_inputed_value_tr").children()[1].innerText = localStorage["last_inputed_value"];
    });

    $("#reset_local_storage").click(function(){
        localStorage["total_iteration_times"] = 0;
        localStorage["form_submit_times"] = 0;
        localStorage["last_inputed_value"] = '';
        localStorage['location_hash_arr'] = JSON.stringify([location.hash]);

         $("#total_interval_tr").children()[1].innerText = localStorage["total_iteration_times"];
         $("#submit_times_tr").children()[1].innerText = localStorage["form_submit_times"];
         $("#last_inputed_value_tr").children()[1].innerText = localStorage["last_inputed_value"];
         $("#last_location_hash_tr").children()[1].innerHTML = location.hash;  
    });

    //location hash    
    if(!localStorage["location_hash_arr"]){
        if(location.hash){
            localStorage['location_hash_arr'] = JSON.stringify([location.hash]);
        }else{
            localStorage['location_hash_arr'] = JSON.stringify([]);
        }
          $("#last_location_hash_tr td")[1].innerHTML = location.hash;
    }else{
        var read=JSON.parse(localStorage['location_hash_arr']);
        var innerHtml = "";
        for(var i=0;i<read.length;i++){
            innerHtml += read[i] + "<br/>";
        }
         $("#last_location_hash_tr td")[1].innerHTML = innerHtml;
    }

    function locationHashChanged(event){
        var read=JSON.parse(localStorage['location_hash_arr']);
        read.push(location.hash);
        var innerHtml = "";
        for(var i=0;i<read.length;i++){
            innerHtml += read[i] + "<br/>";
        }
        localStorage['location_hash_arr'] = JSON.stringify(read); 

         $("#last_location_hash_tr td")[1].innerHTML = innerHtml;
    }
    window.addEventListener("hashchange", locationHashChanged, false);

    $("#change_location_hash").click(function(){
        var timestamp = new Date().getTime();
        location.hash = timestamp;
    });

})(jQuery, window.localStorage, window.location);
// jQuery is exported as $ and jQuery