bank10 = [
['urutkan']
];

function buatSoalUrutkan(levelSoalUrutkan){
  var hasil = [0,0]
  if (levelSoalUrutkan == 1){
    hasil[0] = Math.floor(1/(1-Math.random()));
    hasil[1] = Math.floor(1/(1-Math.random()));
    if (hasil[0] == hasil[1]){hasil = buatSoalUrutkan(levelSoalUrutkan)}
  }
  if (levelSoalUrutkan == 2){
    hasil[0] = Math.floor(1/(1-Math.random()))-1;
    hasil[1] = Math.floor(1/(1-Math.random()))-1;
    if (Math.random() < 1/2){hasil[0] = -hasil[0];}
    if (Math.random() < 1/2){hasil[1] = -hasil[1];}   
    if (hasil[0] == hasil[1]){hasil = buatSoalUrutkan(levelSoalUrutkan)}
  }
  return hasil
}