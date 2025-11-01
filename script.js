function toggleMenu(){
  const ul = document.querySelector('nav ul');
  if(!ul) return;
  ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
  ul.style.flexDirection = 'column';
  ul.style.position = 'absolute';
  ul.style.right = '20px';
  ul.style.top = '64px';
  ul.style.background = 'var(--card)';
  ul.style.padding = '12px';
  ul.style.borderRadius = '10px';
  ul.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
}

function donate(){
  const amount = document.getElementById('amount').value;
  if(!amount || amount <= 0){
    alert('من فضلك أدخل مبلغ تبرع صحيح');
    return;
  }
  alert('شكراً! تم استلام طلب التبرع بمبلغ ' + amount + ' د.أ — سيتم تحويل المستخدم لصفحة الدفع.');
}

function submitVolunteer(e){
  e.preventDefault();
  const name = document.getElementById('vname').value;
  const contact = document.getElementById('vphone').value;
  const role = document.getElementById('vrole').value;
  alert('شكراً ' + name + '! سنراسل ' + contact + ' قريباً للمشاركة كـ ' + role + '.');
  e.target.reset();
}

function submitHelp(e){
  e.preventDefault();
  const name = document.getElementById('hname').value;
  const contact = document.getElementById('hcontact').value;
  const msg = document.getElementById('hmsg').value;
  alert('تم إرسال طلب المساعدة بنجاح، ' + name + '. سنتواصل معك عبر ' + contact + '.');
  e.target.reset();
}

function openContact(){
  location.href = '#contact';
}

// Animate stats
document.addEventListener('DOMContentLoaded', ()=>{
  animateNumber('s1',12430,1200);
  animateNumber('s2',98,900);
  animateNumber('s3',3400,1000);
});

function animateNumber(id, target, duration){
  const el = document.getElementById(id);
  if(!el) return;
  const start = 0; const range = target - start;
  let startTime = null;
  function step(timestamp){
    if(!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime)/duration,1);
    el.textContent = Math.floor(progress * range + start).toLocaleString('ar-EG');
    if(progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
