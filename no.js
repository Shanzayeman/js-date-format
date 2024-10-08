const d=new Date();
document.getElementById('demo1').innerHTML=d;
document.getElementById('demo2').innerHTML=d.getFullYear();
const e=new Date("2021-05-21");
document.getElementById('demo3').innerHTML=e.getDate();
const f=new Date("2021-07-21");
document.getElementById('demo4').innerHTML=f.getHours();
document.getElementById('demo5').innerHTML=d.getMonth();
const v=["jan , feb , march , april , may , june , july , august , sep , october , nov , dec"];
let y = new Date("2023-12-06");
document.getElementById('demo6').innerHTML=y.getMonth();

