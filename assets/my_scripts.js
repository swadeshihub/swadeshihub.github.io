function filter() {
	$('.filter-list').hide();
	var selected = [];    
	var fill = [];
	$('input[name="chek-filter"]:checked').each(function() {
    alert($(this).val());
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