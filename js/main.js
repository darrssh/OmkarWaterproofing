// slider, counters, menu, whatsapp form
var slides=document.querySelectorAll('.hero-slides img');
var si=0;
if(slides.length){setInterval(function(){slides[si].classList.remove('on');si=(si+1)%slides.length;slides[si].classList.add('on');},2500);}
var counters=document.querySelectorAll('[data-count]');
if('IntersectionObserver' in window && counters.length){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;var end=parseInt(el.dataset.count,10);var c=0;var step=Math.max(1,Math.round(end/60));var t=setInterval(function(){c+=step;if(c>=end){c=end;clearInterval(t);}el.textContent=c+'+';},30);io.unobserve(el);}})},{threshold:.4});
  counters.forEach(function(c){io.observe(c);});
}else{
  counters.forEach(function(el){el.textContent=el.dataset.count+'+';});
}
var menuBtn=document.getElementById('menuBtn');
var navLinks=document.getElementById('navLinks');
if(menuBtn&&navLinks){
  menuBtn.addEventListener('click',function(){navLinks.classList.toggle('open');});
  navLinks.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){navLinks.classList.remove('open');});});
}
function quoteToWhats(e){
  e.preventDefault();
  var f=new FormData(e.target);
  var lines=['New Enquiry - Omkar Waterproofing','Name: '+(f.get('name')||''),'Phone: '+(f.get('phone')||''),'Location: '+(f.get('location')||''),'Service: '+(f.get('service')||''),'Message: '+(f.get('message')||'')];
  window.open('https://wa.me/918660090050?text='+encodeURIComponent(lines.join('\n')),'_blank');
  return false;
}
window.quoteToWhats=quoteToWhats;
