var r_arr=[];
function extractIds(data){
  if(!data.items) return;
  else {
    if(data.hasOwnProperty('id')) r_arr.push(data['id']);
    if(data.hasOwnProperty('items')) {
      for(var i=0;i<items.length;i++) {
        extractIds(items[i]);
      }
    }
  }
  return r_arr;
}