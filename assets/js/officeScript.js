window.onload = () => {
  // section one (office)

  let hovered = Array.from(document.getElementsByClassName('hovered-item'));
  hovered.map((item, index) => {
    item.addEventListener('mouseover', e => {
      hovered.map((item, i) => {
        if (i != index) {
          item.style.opacity = 0;
        }
      });
      document.getElementsByClassName('main-h')[0].style.opacity = '0';
      document.getElementsByClassName('main-p')[0].style.display = 'none';
      document.getElementById('title-office').style.color = 'white';
      document.getElementById('logo').setAttribute('src', './assets/images/logo1.png');

      ['bg-red-700', 'bg-white', 'text-red-700', 'text-white'].map(c =>
        document.getElementById('login').classList.toggle(c)
      );
      document.getElementsByClassName('hidden-item')[index].style.display = 'flex';
      e.target.style.textShadow = '1px 1px 3px gray';
      document.getElementById('bg').setAttribute('src', './assets/images/bg1-2.png');
    });
    item.addEventListener('mouseleave', e => {
      hovered.map((item, i) => {
        item.style.opacity = 1;
      });
      document.getElementsByClassName('main-h')[0].style.opacity = '1';
      document.getElementsByClassName('main-p')[0].style.display = 'block';
      ['bg-red-700', 'bg-white', 'text-red-700', 'text-white'].map(c =>
        document.getElementById('login').classList.toggle(c)
      );
      document.getElementsByClassName('hidden-item')[index].style.display = 'none';
      document.getElementById('title-office').style.color = '#fff';
      document.getElementById('logo').setAttribute('src', './assets/images/logo.png');

      e.target.style.textShadow = 'none';
      document.getElementById('bg').setAttribute('src', './assets/images/bg1-1.png');
    });
  });

  // facility
  document.querySelector('.lampshade').addEventListener('mouseover', () => {
    document.querySelector('#text-hovered').classList.add('text-hovered-fadeIn');
    document.querySelector('#text-hovered').classList.remove('text-hovered');
  });

  // front disk
  window.addEventListener('scroll', () => {
    if (window.scrollY > document.getElementById('front').offsetTop - 200) {
      console.log(1);
      document.querySelector('#front .title').classList.remove('title-hide');
    }
  });
};
