window.onload = () => {
  let hexa = Array.from(document.querySelectorAll('.hexa-image'));
  let hexaMain = document.getElementById('hexa-main');
  let wheelCont = document.getElementById('wheel-cont');
  let headTitle = document.getElementById('head-title');

  hexa.map((h, i) => {
    h.addEventListener('mouseover', e => {
      e.target.classList.add('pos', 'pos' + i);
      e.target.parentElement.parentElement.classList.add('z100');
      e.target.setAttribute('src', `assets/images/vector${i}-hover.png`);
    });
    h.addEventListener('mouseleave', e => {
      if (h != hexaMain) {
        e.target.classList.remove('pos', 'pos' + i);
        e.target.parentElement.parentElement.classList.remove('z100');
        e.target.setAttribute('src', `assets/images/vector${i}.png`);
      }
    });

    hexaMain.addEventListener('mouseover', () => {
      h.style.opacity = 1;
      headTitle.style.opacity = 0;
    });
    wheelCont.addEventListener('mouseleave', () => {
      hexaMain.classList.remove('pos', 'pos' + 3);
      headTitle.style.opacity = 1;
      hexaMain.setAttribute('src', `assets/images/vector${3}.png`);
      h != hexaMain && (h.style.opacity = 0);
    });
  });
};
