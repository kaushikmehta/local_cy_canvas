//Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//Variables
var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;
var tooltype = 'draw';

var recording = false;
var mouseMovements = [];

console.log("yoohooo")

var colorsList = ['black', 'yellow', "red", "green", "blue"]


//Mousedown
canvas.addEventListener('mousedown', function (e) {
    last_mousex = mousex = parseInt(e.clientX - canvasx);
    last_mousey = mousey = parseInt(e.clientY - canvasy);
    mousedown = true;
});

//Mouseup
canvas.addEventListener('mouseup', function (e) {
    mousedown = false;

    const uniqueKey = mouseMovements.length + 1;
    // step
    recording && mouseMovements.push("step")
});


//Mousemove
canvas.addEventListener('mousemove', function (e) {

    mousex = parseInt(e.clientX - canvasx);
    mousey = parseInt(e.clientY - canvasy);
    if (mousedown) {
        ctx.beginPath();
        if (tooltype == 'draw') {
            const mousemove = {
                x: mousex,
                y: mousey
            }

            recording && mouseMovements.push(mousemove);

            ctx.globalCompositeOperation = 'source-over';
            var color = colorsList[Math.floor(Math.random() * colorsList.length)];
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
        } else {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 10;
        }
        ctx.moveTo(last_mousex, last_mousey);
        ctx.lineTo(mousex, mousey);
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.stroke();
    }
    last_mousex = mousex;
    last_mousey = mousey;
    //Output
    $('#output').html('current: ' + mousex + ', ' + mousey + '<br/>last: ' + last_mousex + ', ' + last_mousey + '<br/>mousedown: ' + mousedown);
});

//Use draw|erase
use_tool = function (tool) {
    tooltype = tool; //update
}

//Record
recordMouseActions = function () {
    $('#stop').css({ "display": "inline" })
    $('#record').css({ "display": "none" })

    recording = true;
}

stopRecordingMouseActions = function () {
    $('#record').css({ "display": "inline" })
    $('#stop').css({ "display": "none" })

    recording = false;

    var dataToSend = {
        list: mouseMovements
    };
    console.log("DTS",);
    $.ajax({
        url: "http://localhost:3000/",
        type: "POST",
        data: {val: JSON.stringify(dataToSend.list)},
        success: function (response) {
            //do action  
            mouseMovements = [];
        },
        error: function (error) {
            // do action
            console.log(error)
        }
    });
}
