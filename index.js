
fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
.then(res => res.json())//response type
.then(json => {
  //render DataTable
  $(document).ready( function () {
    $('#meteoriteData').DataTable();
  });
  //fill out table w data
  var table = document.getElementById('meteoriteData')

  json.forEach(function(object){
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + object.name + '</td>' +
    '<td>' + object.id + '</td>' +
    '<td>' + object.nametype + '</td>' +
    '<td>' + object.recclass + '</td>' +
    '<td>' + object.mass + '</td>' +
    '<td>' + object.fall + '</td>' +
    '<td>' + object.year + '</td>' +
    '<td>' + object.geolocation.latitude + '</td>' +
    '<td>' + object.geolocation.longitude + '</td>';
    $('table tbody').append(tr);
  });
});
