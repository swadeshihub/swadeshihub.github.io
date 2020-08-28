function filter() {
  alert("filtered");
	$('.filter-list').hide();
	var selected = [];    
	var fill = [];
	$('.searchbar-checkbox:checked').each(function() {
    selected.push($(this));
  });
  if(selected.length==0)
  	$('.filter-list').show();
  var i=0;
  for(i=0;i<selected.length;i++) {
    $('.'+selected[i].val()).each(function() {
    	$(this).show();
    });
  }
}