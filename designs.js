// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
    
$('#sizePicker').submit(function makeGrid(event) {  
  $('table tr').remove();                          
var rows=$('#inputHeight').val();                 
var cells=$('#inputWeight').val();                
  for (var i=1;i<=rows;i++) {
    $('table').append("<tr></tr>");
    for (var j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");         
      $('td').attr('class','pixel');
    }
  }
  event.preventDefault();                       
});

$('#pixelCanvas').on('click','.pixel',function(){  
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
});
