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

function copyToClipboard(id) {
    const textarea = document.getElementById(id);
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!',
        showConfirmButton: false,
        timer: 2000
    });
  }