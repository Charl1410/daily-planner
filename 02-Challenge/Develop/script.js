var times = {
  startHour: 9,
  endHour: 17,
};

//TODO function to save the information entered to local storage
function savePlan() {
  //     //need to tell it where to get the imformation from (event bubbling)
  // console.log('hello')
  // var hour = " ";
  // var textEntry = $(document).$('.description').val();
  // localStorage.setItem(hour, textEntry);
  //   console.log(textEntry);
}

//calls function to impliment the time into page

//TODO create function to check time and change the css of the boxes past present future 

function updateColor() {

var currentHour = moment().hour();

console.log(currentHour);


$(".row").each(function () {
  var hour = $(this).attr("data-hour", hour);

  if (hour < currentHour) {
    //add class ".past"
    $(this).find(".description").addClass("past");
    //if its equal to the current hour
  } else if (hour == currentHour) {
    //add class ".present"
    $(this).find(".description").addClass("present");
    //if its over the current hour
  } else {
    //add class ".future"
    $(this).find(".description").addClass("future");
  }
});

}






//TODOfunction to generate the time slots
function createTimeSlots() {
  // 1. load the saved data from local storage

  //create for loop to go through and create all elements for the UI
  for (hour = times.startHour; hour <= times.endHour; hour++) {
    var timeSlot = $("<div>").addClass("row"); //main inner container
    timeSlot.attr("data-hour", hour);
    var timeHour = $("<div>")
      .addClass("col-sm-2 hour")
      .text(moment(hour, "h").format("h A"));
    var outerBox = $("<div>").addClass("col-sm-8 row past");
    var enterText = $("<textarea>").addClass("col-md-10 description");
    var buttonContainer = $("<div>").addClass(
      "col-sm-2 btn btn-primary saveBtn d-flex align-items-center justify-content-center"
    );
    buttonContainer.on("click", savePlan);
    var button = $("<button>").addClass("fas fa-save");

    outerBox.append(enterText);
    buttonContainer.append(button);
    timeSlot.append(timeHour);
    timeSlot.append(buttonContainer);
    timeSlot.append(outerBox);

    $(".container").append(timeSlot);
  }

  //add event handler to the save button so it saves task to local storage

  //append them all to the HTML
}

createTimeSlots();

//TODO function to update the color of the time slots
updateColor()
//using moment to get current date at top

//TODO create function to impliment the time at the top of page
function getHeaderDate() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));
}

//allows time to change by second
setInterval(function () {
  getHeaderDate();
}, 1000);

getHeaderDate();
