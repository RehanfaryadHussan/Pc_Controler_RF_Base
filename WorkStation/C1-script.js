document.querySelectorAll('.lofwer').forEach((e)=>{
    let color = Math.floor(Math.random()*16777215);
    e.style.backgroundColor =  `#${color.toString(16)}`
})