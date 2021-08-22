const dtList = document.querySelectorAll('.content-faq dt');
const firstDt = document.querySelector('dt');

function activeDd(dd){
  dd.classList.toggle('active-dd');
}

function activeDt(dt){
  dt.classList.toggle('active-dt');
}

function removeDd(dd){
  if (dd !== null){
    dd.classList.remove('active-dd');
  }
}

function removeDt(dt){
  if (dt !== null){
    dt.classList.remove('active-dt');
  }
}

function toggleDl(dt) {
  const activeDtClass = document.querySelector('.active-dt');
  const activeDdClass = document.querySelector('.active-dd');
  removeDt(activeDtClass);
  removeDd(activeDdClass);
  if (activeDtClass !== dt.target) {
    activeDt(dt.target);
    activeDd(dt.target.nextElementSibling);
  }
}

window.onload = () => {
  activeDt(firstDt);
  activeDd(firstDt.nextElementSibling);
  for (let i = 0; i < dtList.length; i += 1){
    dtList[i].addEventListener('click', (event)=> {
      toggleDl(event);
    })
  }
}