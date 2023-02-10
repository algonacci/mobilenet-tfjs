const img = document.getElementById("img");
mobilenet.load().then((model) => {
  model.classify(img).then((predictions) => {
    console.log("Predictions: ");
    console.log(predictions);
    const prediction = document.createElement("p");
    const text = document.createTextNode("Prediction: ");
    const node = document.createTextNode(predictions[0].className);
    const space = document.createElement("br");
    const node2 = document.createTextNode(predictions[0].probability);

    prediction.appendChild(text);
    prediction.appendChild(node);
    prediction.appendChild(space);
    prediction.appendChild(node2);
    const element = document.getElementById("prediction");
    element.append(prediction);
  });
});
