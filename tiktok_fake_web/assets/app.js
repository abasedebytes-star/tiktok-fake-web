function simulateUpload(){
  const status = document.getElementById('status');
  status.innerText = 'Subiendo a TikTok...';
  setTimeout(()=>{
    status.innerText = 'Video subido como borrador (simulación).';
  },2000);
}
