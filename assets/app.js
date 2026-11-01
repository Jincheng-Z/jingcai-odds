
(function(){
  function tick(){
    [].forEach.call(document.querySelectorAll('.remain'),function(td){
      var d=new Date(td.getAttribute('data-deadline'));
      var m=Math.floor((d-new Date())/60000);
      if(isNaN(m)){td.textContent='—';return;}
      if(m<=0){td.textContent='已截止';return;}
      td.textContent=m<60?m+' 分钟':
        (Math.floor(m/60)+' 小时 '+String(m%60).padStart(2,'0')+' 分');
    });
  }
  tick();setInterval(tick,30000);
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
