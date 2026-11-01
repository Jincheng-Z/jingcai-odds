
(function(){
  var box=document.getElementById('q');
  if(!box) return;
  var rows=[].slice.call(document.querySelectorAll('tr[data-search]'));
  box.addEventListener('input',function(){
    var v=box.value.trim().toLowerCase();
    rows.forEach(function(r){
      r.style.display=(!v||r.getAttribute('data-search').toLowerCase().indexOf(v)>=0)?'':'none';
    });
  });
})();
