const downloadBtn = document.getElementById('downloadBtn');
const progress = document.getElementById('progress');
const percentage = document.getElementById('percentage');

downloadBtn.addEventListener('click', () => {
  downloadBtn.disabled = true;
  downloadBtn.textContent = "Downloading...";
   
  let width = 0;

  const interval = setInterval(() => {
    if(width >= 100){
      clearInterval(interval);
      percentage.textContent = "Completed!";
      downloadBtn.disabled = false;
      downloadBtn.textContent = "Download Again";
    } else {
      width++;
      progress.style.width = width + '%';
      percentage.textContent = width + '%';
    }
  }, 50);
});
