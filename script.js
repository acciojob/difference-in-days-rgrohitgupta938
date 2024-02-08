var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const utcDate1 = Date.UTC(parseInt(date1.slice(0, 4)), parseInt(date1.slice(5, 7)) - 1, parseInt(date1.slice(8)));
    const utcDate2 = Date.UTC(parseInt(date2.slice(0, 4)), parseInt(date2.slice(5, 7)) - 1, parseInt(date2.slice(8)));
    const diffInMilliseconds = utcDate2 - utcDate1;
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
