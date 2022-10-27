var times = {
    startHour: 9,
    endHour: 17,
}


// <div class="row">
// <div class="col-sm-2 hour">9AM</div>
// <div class="col-sm-8 row past">
//   <textarea class="col-md-10 description"></textarea>
// </div>
// <div class="col-sm-2">
//   <button class="btm btn-primart saveBtn">Save</button>
// </div>
// </div>

//TODOfunction to generate the time slots 
//FOR LOOP
function createTimeSlots() {




}

//TODO function to update the color of the time slots 
// the classs changes depending on the hour which is realted to a different CSS style IF STATEMENTS

for (hour=times.startHour; hour <= times.endHour; hour++) {
    var time = "";
    var desc =  "" ;
    var text = "";

}

//using moment to get current date at top 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm"));

//TODO function to save the information entered to local storage 