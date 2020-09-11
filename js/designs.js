const table = $("#pixel_canvas");
 
function makeGrid() {
   
   let userRow = $("#input_height").val();  
   let userCol = $("#input_width").val();
   table.children().remove();  
  //Reset
  
  for (let i = 0; i < userRow; i++) {
    table.append("<tr></tr>");
    
    for (let j = 0; j < userCol; j++) {
      table.children()
        .last()
        .append("<td></td>");
    }
}
}

function colorPick() {
  	$('tr').children().on('click', function(){
    let color = $("#colorPicker").val();
		$(this).css('background', color);
		});
}


$('#subm').click( function(event){
  event.preventDefault(); //In order to prevent Reloading page while submit
  makeGrid(); 
  colorPick();


});
