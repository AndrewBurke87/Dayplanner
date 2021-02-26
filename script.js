$(document).ready(function () {


    var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    var militaryTime = [09, 10, 11, 12, 13, 14, 15, 16, 17];
    var hour = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentHour = moment().format('HH');
    var saveEvnt = '';
    // var index = 0;

    function calander() {
        hour = $("#currentTime").text(hour)
        // console.log("calanderfired")
        for (let index = 0; index < militaryTime.length; index++) {




            if (militaryTime[index] < currentHour) {
                document.getElementById(militaryTime[index]).classList.add("past")

                console.log(militaryTime[index])
            } else if (currentHour < militaryTime[index]) {
                document.getElementById(militaryTime[index]).classList.add("future")

            } else {
                document.getElementById(militaryTime[index]).classList.add("present")

            }
        }
    }
    $('.saveBtn').click(function () {
        let eventVal = $(this).siblings("textarea").val()
        // console.log($(this))
        // console.log($(this).siblings())
        // console.log($(this).siblings("textarea"))
        // console.log($(this).siblings("textarea").val())
        let key = $(this).attr("data-attribute")
        console.log(key)
        localStorage.setItem("task", eventVal);
        localStorage.setItem("amPm", key)
    })

    calander()
})