const pw=document.getElementById('pw'),bar=document.getElementById('bar'),label=document.getElementById('strength'),items=document.querySelectorAll('#checks li');
const common=['password','123456','12345678','qwerty','admin','welcome','letmein','iloveyou','abc123'];
const rules=[v=>v.length>=12,v=>/[a-z]/.test(v),v=>/[A-Z]/.test(v),v=>/\d/.test(v),v=>/[^A-Za-z0-9]/.test(v),v=>v.length>0&&!common.some(c=>v.toLowerCase().includes(c))];
const names=['Very weak','Weak','Fair','Good','Strong','Very strong'];
const colours=['#b00020','#b00020','#b36b00','#8a7a00','#1a7f3c','#0a6b35'];
pw.addEventListener('input',()=>{
  const v=pw.value;let score=0;
  rules.forEach((r,i)=>{const ok=r(v);items[i].classList.toggle('ok',ok);if(ok)score++;});
  if(v==='')score=0;
  bar.style.width=(score/6*100)+'%';bar.style.background=colours[score>0?score-1:0];
  label.textContent=v===''?'Type a password to test it. Nothing you type is stored or sent anywhere.':'Strength: '+names[Math.max(score-1,0)];
});
