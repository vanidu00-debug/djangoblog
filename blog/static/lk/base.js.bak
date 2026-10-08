const $ = id => document.getElementById(id);

/* navbar shadow + top progress bar */
addEventListener('scroll', () => {
  $('prog').style.width = scrollY / Math.max(1, document.body.scrollHeight - innerHeight) * 100 + '%';
  document.querySelector('nav').classList.toggle('sh', scrollY > 10);
});

/* live Sri Lanka clock */
setInterval(() => { $('clock').textContent = '🇱🇰 ' + new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' }); }, 1000);

/* live visitors online (asks Python every 5 seconds) */
const sid = Math.random().toString(36).slice(2);
const beat = () => fetch('/api/online/?sid=' + sid).then(r => r.json()).then(d => { $('on').textContent = d.online; if ($('on2')) $('on2').textContent = d.online; }).catch(() => {});
beat(); setInterval(beat, 5000);

/* fade-in when scrolling */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
