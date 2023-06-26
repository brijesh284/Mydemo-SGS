if (screen.availWidth >= 1024) {
  window.onload = function () {
    let imageBg = window.image_light;
    let screenLogo = window.screen_logo;
    let container = window.container;
    let texture = window.texture_container;
    let bg = window.bg;
    let s1 = window.section1;
    let s1e1 = window.s1e1;
    let s1e2 = window.s1e2;
    let s1e3 = window.s1e3;
    let s1e4 = window.s1e4;

    let s2 = window.section2;
    let s2e1 = window.s2e1;
    let s2e2 = window.s2e2;
    let s2e3 = window.s2e3;
    let s3 = window.section3;
    let s3e1 = window.s3e1;
    let s3e2 = window.s3e2;
    let s3e3 = window.s3e3;

    let screenOpened = false;
    window.comeBack = false;
    let isLight = false;

    texture.style.height = "5300";

    bg.addEventListener("click", (e) => {
      if (e.target === bg.children[0]) {
        if (isLight) {
          imageBg.setAttribute("src", "assets/images/1.png");
          // screenLogo.style.opacity = 0;
          isLight = false;
        } else {
          imageBg.setAttribute("src", "assets/images/2.png");
          screenLogo.style.opacity = 1;
          isLight = true;
        }
      }
    });

    screenLogo.onclick = () => zoomIn();
    const zoomIn = () => {
      window.comeBack = false;
      screenOpened = true;
      container.style.overflow = "hidden";
      screenLogo.style.transition = "5s";
      screenLogo.style.transform = "scale(60)";
      screenLogo.style.left = "-60%";
      setTimeout(() => {
        screenLogo.style.transition = ".1s";
        // screenLogo.style.opacity = "0";
      }, 5000);

      setTimeout(() => {
        texture.style.display = "block";
        initPositions();
      }, 3000);
      setTimeout(() => {
        window.scrollTo(0, 200);
      }, 3500);

      bg.style.position = "fixed";
      bg.style.marginTop = "-7.5vw";
      setTimeout(() => {
        imageBg.style.transform = "scale(1.6)";
        imageBg.style.marginLeft = "12%";
        imageBg.style.marginTop = "-12%";
      }, 500);
    };

    const zoomOut = () => {
      texture.style.display = "none";
      imageBg.style.transform = "scale(1)";
      imageBg.style.marginLeft = "0";
      imageBg.style.marginTop = "0";

      setTimeout(() => {
        screenLogo.style.opacity = "1";
        screenLogo.style.transition = "2s";
        screenLogo.style.transform = "scale(1)";
        screenLogo.style.left = "27vw";
        screenOpened = false;
      }, 100);
      setTimeout(() => {
        bg.style.position = "relative";
      }, 2000);
      setTimeout(() => {
        container.style.overflow = "auto";
        bg.style.marginTop = "0vw";
      }, 3000);
    };

    //===================== section1 ====================
    //1st item "SGS ONE"
    const s1e1Position1 = () => {
      s1e1.style.cssText = ` width: 15%; margin: auto; margin-top: 0vw; transition: 1.5s; opacity: 0;`;
    };
    const s1e1Position2 = () => {
      s1e1.style.cssText = ` width: 25%; opacity: 1;`;
      window.innerWidth < 600
        ? (s1e1.style.marginTop = "7vw")
        : (s1e1.style.marginTop = "5vw");
    };
    const s1e1Position3 = () => {
      s1e1.style.opacity = "0";
      s1e1.style.width = "15%";
      s1e1.style.marginTop = "0vw";
    };

    //2nd item "text1"
    const s1e2Position1 = () => {
      s1e2.style.opacity = 0;
      s1e2.style.transform = "scalr(0.5)";
      s1e2.style.marginTop = "25vw";
    };
    const s1e2Position2 = () => {
      s1e2.style.cssText = `opacity: 1; transform: scale(0.95); margin-top: 7vw;`;
    };
    const s1e2Position3 = () => {
      s1e2.style.cssText = `opacity: .5; transform: scale(0.6); margin-top: 2vw;`;
    };
    const s1e2Position4 = () => {
      s1e2.style.cssText = `opacity: 0; transform: scale(0.3); margin-top: -5vw;`;
    };

    //3rd item "text2"
    const s1e3Position1 = () => {
      s1e3.style.cssText = `
              transform: scale(.5);
              transition: 1s;
              margin-top: 12vw;
              opacity: 1;position:relative ;`;
    };
    const s1e3Position2 = () => {
      s1e3.style.opacity = ".5";
      s1e3.style.transform = "scale(0.5)";
      s1e3.style.marginTop = "9vw";
    };
    const s1e3Position3 = () => {
      s1e3.style.opacity = "1";
      s1e3.style.transform = "scale(0.85)";
      s1e3.style.marginTop = "2vw";
    };
    const s1e3Position4 = () => {
      s1e3.style.opacity = "0";
      s1e3.style.transform = "scale(0.5)";
      s1e3.style.marginTop = "-8vw";
    };

    //4th item "image"
    const s1e4Position1 = () => {
      s1e4.style.opacity = "0";
      s1e4.style.transform = "scale(0.15)";
      s1e4.style.marginTop = "0vw";
    };
    const s1e4Position2 = () => {
      s1e4.style.opacity = "1";
      s1e4.style.marginTop = "-4.5vw";
      s1e4.style.transform = "scale(0.15)";
    };
    const s1e4Position3 = () => {
      s1e4.style.opacity = "1";
      s1e4.style.marginTop = "5vw";
      s1e4.style.transform = "scale(1)";
    };
    const s1e4Position4 = () => {
      s1e4.style.opacity = "0";
      s1e4.style.marginTop = "0vw";
      s1e4.style.transform = "scale(.5)";
    };
    const swapToSection1 = () => {
      s2.style.opacity = 0;
      s2.style.position = "absolute";
      s1.style.opacity = 1;
      s1.style.position = "fixed";
    };
    /*===================== end section1 ==========*/

    /*====================== Section2 ========= */
    const swapToSection2 = () => {
      s1.style.opacity = 0;
      s1.style.position = "absolute";
      s3.style.opacity = 0;
      s3.style.position = "absolute";
      s2.style.opacity = 1;
      s2.style.position = "fixed";
    };

    const s2e1Position1 = () => {
      s2e1.cssText = `
              width: 30%;
              opacity:0;
              margin: auto;
              transition: 1.5s;
              margin-top: 50%;`;
    };
    const s2e1Position2 = () => {
      s2e1.style.marginTop = "4vw";
      s2e1.style.opacity = "1";
      s2e1.style.width = "40%";
    };
    const s2e1Position3 = () => {
      s2e1.style.marginTop = "0vw";
      s2e1.style.opacity = "0";
      s2e1.style.width = "0";
    };
    const s2e2Position1 = () => {
      s2e2.cssText = `
              width: 50%;
              margin: auto;
              transition: 1s; 
              position: relative; 
              margin-top: 9vw; 
              opacity: 0;`;
    };
    const s2e2Position2 = () => {
      s2e2.style.width = "90%";
      s2e2.style.marginTop = "9vw";
      s2e2.style.opacity = "1";
    };
    const s2e2Position3 = () => {
      s2e2.style.marginTop = "0vw";
      s2e2.style.opacity = "0";
      s2e2.style.width = "0";
    };
    const s2e3Position1 = () => {
      s2e3.style.width = " 15%";
      s2e3.style.marginTop = "5vw";
      s2e3.style.opacity = "1";
    };
    const s2e3Position2 = () => {
      s2e3.style.width = "100%";
      s2e3.style.marginTop = " 5vw";
      s2e3.style.opacity = 1;
    };

    /*===================== end section2 ==========*/

    /*=================== Section 3 ============*/
    const swapToSection3 = () => {
      s2.style.opacity = 0;
      s2.style.position = "absolute";
      s3.style.opacity = 1;
      s3.style.position = "fixed";
    };
    const s3e1Position1 = () => {
      s3e1.cssText = `
              width: 30%;
              opacity:0;
              margin: auto;
              transition: 1.5s;
              margin-top: 50%;`;
    };
    const s3e1Position2 = () => {
      s3e1.style.marginTop = "4vw";
      s3e1.style.opacity = "1";
      s3e1.style.width = "20%";
    };
    const s3e1Position3 = () => {
      s3e1.style.marginTop = "0vw";
      s3e1.style.opacity = "0";
      s3e1.style.width = "0";
    };
    const s3e2Position1 = () => {
      s3e2.cssText = `
           width: 20%;
           margin: auto;
           margin-top: 10vw;
           transition: 2s;
           position: relative;
           opaity:0`;
    };
    const s3e2Position2 = () => {
      s3e2.style.width = "90%";
      s3e2.style.opacity = "1";
      s3e2.style.marginTop = "9vw";
    };
    const s3e2Position3 = () => {
      s3e2.style.marginTop = "0vw";
      s3e2.style.opacity = "0";
      s3e2.style.width = "0";
    };

    const s3e3Position1 = () => {
      s3e3.style.width = " 15%";
      s3e3.style.marginTop = " 7vw";
      s3e3.style.opacity = "1";
    };
    const s3e3Position2 = () => {
      s3e3.style.width = "100%";
      s3e3.style.marginTop = " 4vw";
      s3e3.style.opacity = "1";
    };
    /*===================== end section3 ==========*/

    window.addEventListener("scroll", (e) => {
      if (window.scrollY < 30 && !screenOpened) {
        imageBg.setAttribute("src", "assets/images/1.png");
        // screenLogo.style.opacity = 0;
      } else if (window.scrollY < 30 && window.comeBack) {
        zoomOut();
      }
      if (window.scrollY > 30 && window.scrollY < 100) {
        imageBg.setAttribute("src", "assets/images/2.png");
        screenLogo.style.opacity = 1;
      }
      if (window.scrollY > 100 && window.scrollY <= 700) {
        window.comeBack = true;
        s1e1Position2();
        s1e2Position2();
        s1e3Position2();
      } else if (window.scrollY > 700 && window.scrollY <= 1400) {
        s1e1Position2();
        s1e2Position3();
        s1e3Position3();
        s1e4Position2();
      } else if (window.scrollY > 1400 && window.scrollY <= 2100) {
        s1e1Position3();
        s1e2Position4();
        s1e3Position4();
        s1e4Position3();
        swapToSection1();
      } else if (window.scrollY > 2100 && window.scrollY <= 2800) {
        s1e4Position4();
        swapToSection2();
        s2e1Position2();
        s2e2Position2();
        s2e3Position1();
      } else if (window.scrollY > 2800 && window.scrollY <= 3500) {
        s2e3Position2();
        s2e1Position3();
        s2e2Position3();
        swapToSection2();
      } else if (window.scrollY > 3500 && window.scrollY <= 4200) {
        swapToSection3();
        s3e1Position2();
        s3e2Position2();
        s3e3Position1();
      } else if (window.scrollY > 4200) {
        s3e3Position2();
        s3e1Position3();
        s3e2Position3();
      }
    });

    const initPositions = () => {
      s1e1Position1();
      s1e2Position1();
      s1e3Position1();
      s1e4Position1();

      s2e1Position1();
      s2e2Position1();

      s3e1Position1();
      s3e2Position1();
      s3e3Position1();
    };
  };
}
