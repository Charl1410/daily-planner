var times = {
  startHour: 9,
  endHour: 17,
};

//function to save the information entered to local storage
function savePlan(e) {
  var textEntry = $(e.target).parent().find(".description").val(); 
  var hour = $(e.target).parent().attr("data-hour");

  //stores text entry to local storage under the key of specific hour 
  localStorage.setItem(hour, textEntry);

}

//check time to update the css color by changing the class based on past present future 
function updateColor() {
  var currentHour = moment().hour();

  
  $(".time-block").each(function (index, row) {
    var hour = $(row).attr("data-hour");

    if (hour < currentHour) {
      $(row).find(".description").addClass("past");
    } else if (hour == currentHour) {
      $(row).find(".description").addClass("present");
    } else {
      $(row).find(".description").addClass("future");
    }
  });
}

//TODOfunction to generate the time slots
function createTimeSlots() {

  //create for loop to go through and creates all elements for the UI

  for (var hour = times.startHour; hour <= times.endHour; hour++) {
    var storedItem = localStorage.getItem(hour);
    var timeSlot = $("<div>").addClass("row time-block"); 
    timeSlot.attr("data-hour", hour);
    var timeHour = $("<div>")
      .addClass("col-sm-2 hour")
      .text(moment(hour, "h").format("h A"));
    var outerBox = $("<div>").addClass("col-sm-8 row");
    var enterText = $("<textarea>")
      .addClass("col-sm-12 description")
      .val(storedItem);
    var buttonContainer = $("<div>").addClass(
      "col-sm-2 btn btn-primary saveBtn d-flex align-items-center justify-content-center"
    );
    buttonContainer.on("click", savePlan);
    var button = $("<button>").addClass("fas fa-save");

    //appends elements into each other
    outerBox.append(enterText);
    buttonContainer.append(button);
    timeSlot.append(timeHour);
    timeSlot.append(outerBox);
    timeSlot.append(buttonContainer);

    //appends to HTML into container class 
    $(".container").append(timeSlot);
  }
}

//impliment the time at the top of page
function init() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));
}

//allows time to change by second
setInterval(function () {
  init();
}, 1000);

init();

createTimeSlots();

updateColor();
