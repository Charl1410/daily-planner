var times = {
  startHour: 9,
  endHour: 17,
};

getHeaderDate();

// <div class="row">
// <div class="col-sm-2 hour">9AM</div>
// <div class="col-sm-8 row past">
//   <textarea class="col-md-10 description"></textarea>
// </div>
// <div class="col-sm-2">
//   <button class="btn btn-primary saveBtn">Save</button>
// </div>
// </div>

//TODOfunction to generate the time slots
//FOR LOOP
function createTimeSlots() {

    //load the saved data from local storage 

//create for loop to go through and create all elements for the UI
  for (hour = times.startHour; hour <= times.endHour; hour++) {
    var timeSlot = $('<div>').addClass("row");

    var time = $("<div>").addClass('col-sm-2 hour').text(moment(hour, 'h'));
    var desc = $('<textarea>').addClass('col-md-10 description');
    var text = $('<button>').addClass('btn btn-primary saveBtn');
  }

  //add event hsndler to the save button so it saves task to local storage 

 //append them all to the HTML


}

//TODO function to update the color of the time slots
// the classs changes depending on the hour which is realted to a different CSS style IF STATEMENTS

//using moment to get current date at top
function getHeaderDate() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));
}

//allows time to change by second 
setInterval(function() {
    getHeaderDate();

},1000)

//TODO function to save the information entered to local storage
function savePlan() {

}