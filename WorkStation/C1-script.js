document.querySelectorAll('.lofwer').forEach((e) => {
    let color = Math.floor(Math.random() * 16777215);
    e.style.backgroundColor = `#${color.toString(16)}`
})



let s1 = s('input');
s1.style.color = `red`;
con(Object.prototype)
s('nav ol').hide();
s('nav ol').show('flex')

s('.c').addEventListener("click",()=>{
    let pm = document.querySelector('.pm');
    let r,s;
    s = window.getSelection();s
    r = document.createRange();
    r.selectNodeContents(pm);
    s.removeAllRanges()
    s.addRange(r)
})
