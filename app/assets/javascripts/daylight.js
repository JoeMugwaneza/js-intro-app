function changeDocumentColorOne(onePress) {
  console.log(onePress);
  if (changeDocumentColorOne) {
    document.body.style["background-color"] = "Yellow";
    document.getElementById("daylight-title").innerHTML = "Morning";
  }
}

function changeDocumentColorTwo(onePress) {
  console.log(onePress);
  if (changeDocumentColorTwo) {
    document.body.style["background-color"] = "orange";
    document.getElementById("daylight-title").innerHTML = "Afternoon";

  }
}

function changeDocumentColorThree(onePress) {
  console.log(onePress);

  if (changeDocumentColorThree) {
    document.body.style["background-color"] = "black";
    document.getElementById("daylight-title").innerHTML = "Evening"
  }
}