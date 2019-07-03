$(function(){
  $('.table-sortable').sortable({
    items: '.item',
    update: function(e, ui){
      let item = ui.item;
      let item_data = item.data();
      let params = {_method: 'put'};
      params[item_data.modelName] = { row_order_position: item.index() }

      $.ajax({
        type: 'PUT',
        url: item_data.updateUrl,
        dataType: 'json',
        data: params
      });
    }
  });
});