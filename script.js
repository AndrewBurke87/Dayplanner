var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var militaryTime = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var hour = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('HH');
console.log(currentHour)
var index = 0;
function calander() {
    console.log("calanderfired")

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


calander()