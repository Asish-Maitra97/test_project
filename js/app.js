"use strict"

$(document).ready(function(){
    var resultlist=$("#resultlist");
resultlist.text("Injected by jquery");

var toggleButton=$("#toggleButton");
toggleButton.on("click",function(){
    console.log("Button clicked");
    resultlist.toggle(800);
    if(toggleButton.text() == "Hide"){
        toggleButton.text("Show");
    }else{
        toggleButton.text("Hide");
    }
     
    });



    var result = [];

function displayResults(result){
    resultlist.empty();

    $.each(result, function(i, item){
        var newResult = $("<div class='result'>"+
            "<div clasa='title'>"+item.title + "</div>" +
            "<div>" + "Level :" + item.level + "<div>" + 
            "<div>" + "Learner :" + item.learner +"</div>" +
            "</div>");
    
            resultlist.append(newResult);
    
            newResult.hover(function(){
                $(this).css("background-color","lightgray");
            }, function(){
                $(this).css("background-color", "transparent");
    
            }
            )
        });
        
    }

$("#loginform").on("submit",function(){
    var username=$("#username").val();
    var password=$("#password").val();

    if(username && password){
        $.post("/api/login", {}, function(data){
            console.log("succes :: " + data);
            displayResults(data);
            
            $("#loginform").hide();
            $("#logoutsection").show();

            $("#errormsg").empty();
        })
        .fail(function(data){
            $("#errormsg").text("something bad happen!");
        })
        .done(function(){
    
        })
    } else{
        $("#errormsg").text("Username and Password are mandatory!");
    }

        return false;
    });

    $("#logoutbutton").on('click',function(){
        $("#loginform").show();
        $("#logoutsection").hide();
        resultlist.empty();
        result.text("Please login to see all courses.");
    })

});




/*var msg="hello asish";
console.log(msg);
    
var resultDiv=document.getElementById("results");
resultDiv.innerHTML = "<p> Massege injected by JS</p>";


var result={
    title: "java",
    instructor: "asish",
    level: "beginner"
};
console.log(result);*/