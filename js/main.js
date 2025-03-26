document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inputText").addEventListener("input", convertText);
});

function convertText() {
    let input = document.getElementById("inputText").value;
    let output = input.replace(/a/g, "aga")
                      .replace(/i/g, "igi")
                      .replace(/u/g, "ugu")
                      .replace(/e/g, "ege")
                      .replace(/o/g, "ogo")
                      // Kapital
                      .replace(/A/g, "Aga")
                      .replace(/I/g, "Igi")
                      .replace(/U/g, "Ugu")
                      .replace(/E/g, "Ege")
                      .replace(/O/g, "Ogo");

    document.getElementById("outputText").value = output;
}
