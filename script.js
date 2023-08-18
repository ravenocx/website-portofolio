const downloadButton = document.getElementById("resumeDownloadButton");

downloadButton.addEventListener("click", () => {
  const pdfUrl = 'file/CV_Haris.pdf'; 
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "CV_Haris.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

