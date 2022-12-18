bank9 = [
['story','LightStain'],
];
var daftarOpsi = ['A','B','C','D'];

function storyMode(cerita){
  //Light Stain----------------
  

  if ((cerita == 'LightStain')){
   if (stained==true){
   
   buatSoal(); 
   return
   }
   soal = 'A mysterious man want to sell you a suspicious amulet. Do you want to buy it?';
      opsiA = 'y';
      opsiB = 'n';
      document.getElementById('soal').innerHTML = soal;
      for (var i = 0; i < daftarOpsi.length;i++){
        var pilihanOpsi = daftarOpsi[i];
        document.getElementById('opsi'+pilihanOpsi).innerHTML =  '';
        if (i == 0){
          document.getElementById('opsi'+pilihanOpsi).innerHTML =  '<button class="btn" type="button" id = "opsiTom'+pilihanOpsi+'" onmouseover="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" onmouseout="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" style="background-color: '+getRandomColor()+'" onclick="SMlightStain(\''+pilihanOpsi+'\')">Yes</button>';
        }
        if (i == 1){
          document.getElementById('opsi'+pilihanOpsi).innerHTML =  '<button class="btn" type="button" id = "opsiTom'+pilihanOpsi+'" onmouseover="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" onmouseout="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" style="background-color: '+getRandomColor()+'" onclick="SMlightStain(\''+pilihanOpsi+'\')">No</button>';
        }
      }
  }
  //------------------

}

function SMlightStain(jawaban){
  if (jawaban == 'y'){
    document.getElementById('soal').innerHTML = 'You got cursed!';
    achievement.push('Light Stain');
    achievementUpdate();
    stained = true()
    banyakHati += 1;
    updateHati();
    for (var i = 0; i < daftarOpsi.length;i++){
      var pilihanOpsi = daftarOpsi[i];
      document.getElementById('opsi'+pilihanOpsi).innerHTML =  '';
      if (pilihanOpsi == 'A'){
        document.getElementById('opsi'+pilihanOpsi).innerHTML =  '<button class="btn" type="button" id = "opsiTom'+pilihanOpsi+'" onmouseover="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" onmouseout="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" style="background-color: '+getRandomColor()+'" onclick="buatSoal();">Next question</button>';;
      }
    }
  return
  }
  document.getElementById('soal').innerHTML = '\"I will see you again\", he said.';
  for (var i = 0; i < daftarOpsi.length;i++){
      var pilihanOpsi = daftarOpsi[i];
     document.getElementById('opsi'+pilihanOpsi).innerHTML =  '';
     if (pilihanOpsi == 'A'){
       document.getElementById('opsi'+pilihanOpsi).innerHTML =  '<button class="btn" type="button" id = "opsiTom'+pilihanOpsi+'" onmouseover="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" onmouseout="document.getElementById(\'opsiTom'+pilihanOpsi+'\').style.backgroundColor=\''+getRandomColor()+'\';" style="background-color: '+getRandomColor()+'" onclick="buatSoal();">Next question</button>';;
     }
   }   
}