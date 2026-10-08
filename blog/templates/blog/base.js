const $ = id => document.getElementById(id);
let hue = 160, spd = 1, pc = 45;

setTimeout(function cl() { hue = (hue + spd) % 360; document.documentElement.style.setProperty('--h', hue); setTimeout(cl, 100); }, 100);
setInterval(() => $('clock').textContent = '🇱🇰 ' + new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo' }), 1000);
addEventListener('scroll', () => { $('prog').style.width = scrollY / Math.max(1, document.body.scrollHeight - innerHeight) * 100 + '%'; });

const sid = Math.random().toString(36).slice(2);
const beat = () => fetch('/api/online/?sid=' + sid).then(r => r.json()).then(d => $('on').textContent = d.online).catch(() => {});
beat(); setInterval(beat, 5000);

$('s1').oninput = () => { spd = +$('s1').value; $('v1').textContent = spd; };
$('s2').oninput = () => { hue = +$('s2').value; $('v2').textContent = hue; };
$('s3').oninput = () => { pc = +$('s3').value; $('v3').textContent = pc; };

const bg = $('fx'), bx = bg.getContext('2d');
function sz() { bg.width = innerWidth; bg.height = innerHeight; } sz(); addEventListener('resize', sz);
const D = Array.from({ length: 150 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 3 + 1, s: Math.random() * .6 + .2 }));
(function lp() {
  bx.clearRect(0, 0, bg.width, bg.height);
  D.slice(0, pc).forEach((d, i) => { d.y -= d.s; if (d.y < -5) { d.y = bg.height + 5; d.x = Math.random() * bg.width; } bx.fillStyle = `hsl(${(hue + i * 7) % 360} 80% 65% / .6)`; bx.beginPath(); bx.arc(d.x, d.y, d.r, 0, 6.3); bx.fill(); });
  requestAnimationFrame(lp);
})();