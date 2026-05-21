/* Client-logos marquee builder */
// Build marquee from client logos
const logos = [
  '1','4','3','2','ax1','nab','olt','aka','kap','oliyy','repub','undp','carl','minis','14','15','16','17','18','19','22','29','30','31'
].map(n => `https://ideal-water.uz/wp-content/uploads/2016/10/05/${n}.jpg`);

const track = document.getElementById('marquee');
const doubled = [...logos, ...logos];
doubled.forEach(src => {
  try { const u = new URL(src); if (u.hostname !== 'ideal-water.uz') return; } catch(e) { return; }
  const img = document.createElement('img');
  img.src = src; img.className = 'client-logo';
  img.loading = 'lazy'; img.alt = 'Клиент';
  track.appendChild(img);
});
