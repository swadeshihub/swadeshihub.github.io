function filter() {
	$('.filter-list').hide();
	var selected = [];
	$('input[name="chek-filter"]:checked').each(function() {
    $('.'+$(this).val()).show();
    alert($(this).val());
    selected.push($(this));
    $('.'+$(this).val()).each(function() {
      $(this).show();
    });
  });
  if(selected.length==0)
  	$('.filter-list').show();
}