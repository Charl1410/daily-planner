var times = {
  startHour: 9,
  endHour: 17,
};

//TODO function to save the information entered to local storage
function savePlan() {

    //need to tell it where to get the imformation from (event bubbling)


    localStorage.setItem(hour, task);
}




//calls function to impliment the time into page 
getHeaderDate();



//TODOfunction to generate the time slots
function createTimeSlots() {

    // 1. load the saved data from local storage 

// 2. create for loop to go through and create all elements for the UI
  for (hour = times.startHour; hour <= times.endHour; hour++) {
    
    var timeSlot = $('<div>').addClass("row"); //main inner container
    var timeHour = $("<div>").addClass('col-sm-2 hour').text(moment(hour, 'h').format('h A'));
    var outerBox = $('<div>').addClass('col-sm-8 row past');
    var enterText = $('<textarea>').addClass('col-md-10 description');
    var buttonContainer = $('<div>').addClass('col-sm-2');
    var button = $('<button>').addClass('btn btn-primary saveBtn');

    outerBox.append(enterText);
    buttonContainer.append(button);
    timeSlot.append(timeHour);

    $('.container').append(timeSlot);

    console.log(timeSlot)


  }

  //add event handler to the save button so it saves task to local storage 

 //append them all to the HTML


}

createTimeSlots()

//TODO function to update the color of the time slots
// the classs changes depending on the hour which is realted to a different CSS style IF STATEMENTS

//using moment to get current date at top

//TODO create function to impliment the time at the top of page 
function getHeaderDate() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

}

//allows time to change by second 
setInterval(function() {
    getHeaderDate();

},1000)



