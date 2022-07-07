function sound1() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hwbq8BS34/model.json', modelReady);
}

function modelReady() {
    console.log("Hack has been deployed");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        var rnr = Math.floor(Math.random() * 255) + 1;
        var rng = Math.floor(Math.random() * 255) + 1;
        var rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";

        var img = document.getElementById("alien1");
        var img1 = document.getElementById("alien2");
        var img2 = document.getElementById("alien3");
        var img3 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        } else if (results[0].label == "Tap") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        } else if (results[0].label == "Snap") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        } else {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }
    }

}