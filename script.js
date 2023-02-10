var loadFile = function (event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
};

const predict = () => {
  const img = document.getElementById("output");

  img.classList.add("animate-spin");

  mobilenet.load().then((model) => {
    model.classify(img).then((predictions) => {
      console.log("Predictions: ");
      console.log(predictions);
      img.classList.remove("animate-spin");
      displayPredictions(predictions);
    });
  });
};

const displayPredictions = (predictions) => {
  const predictionTableBody = document.getElementById("prediction-table-body");
  predictionTableBody.innerHTML = "";

  // Create header
  const headerRow = document.createElement("tr");
  const classNameHeader = document.createElement("th");
  classNameHeader.textContent = "Class Name";
  headerRow.appendChild(classNameHeader);

  const probabilityHeader = document.createElement("th");
  probabilityHeader.textContent = "Probability";
  headerRow.appendChild(probabilityHeader);

  predictionTableBody.appendChild(headerRow);

  // Add predictions data as rows
  predictions.forEach((prediction) => {
    const row = document.createElement("tr");
    const classNameCell = document.createElement("td");
    classNameCell.classList.add("p-2", "text-center");
    classNameCell.textContent = prediction.className;
    row.appendChild(classNameCell);

    const probabilityCell = document.createElement("td");
    probabilityCell.classList.add("p-2", "text-center");
    probabilityCell.textContent = prediction.probability;
    row.appendChild(probabilityCell);

    predictionTableBody.appendChild(row);
  });
};
