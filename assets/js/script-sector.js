window.onload = function () {

    let s0 = window.section0;

    let s1 = window.section1;
    let s1e1 = window.s1e1;
    let s1e2 = window.s1e2;
 
    let s2 = window.section2;
    let s2e1 = window.s2e1;
    let s2e2 = window.s2e2;
  
    let s3 = window.section3;
    let s3e1 = window.s3e1;
    let s3e2 = window.s3e2;

    let s4 = window.section4;
    let s4e1 = window.s4e1;
    let s4e2 = window.s4e2;
   
    let s5 = window.section5;
    let s5e1 = window.s5e1;
    let s5e2 = window.s5e2;

    let s6 = window.section6;
    let s6e1 = window.s6e1;
    let s6e2 = window.s6e2;

    let s7 = window.section7;
    let s7e1 = window.s7e1;
    let s7e2 = window.s7e2;

    let s8 = window.section8;
    let s8e1 = window.s8e1;
    let s8e2 = window.s8e2;

    let s9 = window.section9;
    let s9e1 = window.s9e1;
    let s9e2 = window.s9e2;

    let s10 = window.section10;
    let s10e1 = window.s10e1;
    let s10e2 = window.s10e2;

    let s11 = window.section11;
    let s11e1 = window.s11e1;
    let s11e2 = window.s11e2;

    let s12 = window.section12;
    let s12e1 = window.s12e1;
    let s12e2 = window.s12e2;

    let s13 = window.section13;
    let s13e1 = window.s13e1;
    let s13e2 = window.s13e2;

    let s14 = window.section14;
    let s14e1 = window.s14e1;
    let s14e2 = window.s14e2;

    // texture.style.height = "10000";

  

    //===================== section1 ====================;

    const s0Show=()=>{
        s0.style.opacity = "1";
        s0.style.marginTop = "0vw";
    }
    const s0Hide=()=>{
        s0.style.opacity = "0";
        s0.style.marginTop = "-10vw";
    }
    

    const sectionShow = (section , title , text)=>{
        title.style.transform = "scale(1)";
        text.style.marginTop = "0vw";
        section.style.marginTop = "0vw";
        section.style.opacity = "1";
        section.style.paddingTop = "0vw";
    }

    const sectionHideDown=(section , title)=>{
        title.style.transform = "scale(.5)";
        section.style.marginTop = "30vw";
        section.style.paddingTop = "30vw";
        section.style.opacity = "0";

    } 
    const sectionHideTop=(section , title , text)=>{
        title.style.transform = "scale(.5)";
        text.style.marginTop = "-30vw";
        section.style.marginTop = "-30vw";
        section.style.opacity = "0";
    } 

    let step = 700;
    const frame= (frameNo)=>{
        if(window.scrollY > (frameNo-1)*step && window.scrollY <= frameNo*step)
        return true;
        return false;
    }   

    let sections = Array.from(document.querySelectorAll('.section')); 
    const hideAllExcept =(section)=>{
        sections.map((s)=>{
            if(s!=section){
                s.style.opacity='0'
            }
        })
    }

    s0Show()
    window.addEventListener("scroll", (e) => {
        if (frame(1)) {
            s0Hide(); 
            sectionShow(s1,s1e1 , s1e2);
            sectionHideDown(s2,s2e1);
            hideAllExcept(s1);
            handleActiveTab(0);
        } else if (frame(2)) {
            sectionHideTop(s1,s1e1,s1e2);
            sectionShow(s2,s2e1 , s2e2);
            sectionHideDown(s3,s3e1);    
            hideAllExcept(s2);
            handleActiveTab(1);
        } else if (frame(3) ) {
            sectionHideTop(s2,s2e1,s2e2);
            sectionShow(s3,s3e1 , s3e2);
            sectionHideDown(s4,s4e1);
            hideAllExcept(s3);
            handleActiveTab(2);
        } else if (frame(4)) {
            sectionHideTop(s3,s3e1,s3e2);
            sectionShow(s4,s4e1,s4e2);
            sectionHideDown(s5,s5e1); 
            hideAllExcept(s4);
            handleActiveTab(3);
        } else if (frame(5)) {
            sectionHideTop(s4,s4e1,s4e2);
            sectionShow(s5,s5e1 , s5e2);
            sectionHideDown(s6,s6e1); 
            hideAllExcept(s5);
            handleActiveTab(4);
        } else if (frame(6)) {
            sectionHideTop(s5,s5e1,s5e2);
            sectionShow(s6,s6e1 , s6e2);
            sectionHideDown(s7,s7e1);  
            hideAllExcept(s6);
            handleActiveTab(5);
        } else if (frame(7)) {
            sectionHideTop(s6,s6e1,s6e2);
            sectionShow(s7,s7e1 , s7e2);
            sectionHideDown(s8,s8e1);    
            hideAllExcept(s7);
            handleActiveTab(6);
        } else if (frame(8)) {
            sectionHideTop(s7,s7e1,s7e2);
            sectionShow(s8,s8e1 , s8e2);
            sectionHideDown(s9,s9e1);  
            hideAllExcept(s8);
            handleActiveTab(7);
        } else if (frame(9)) {
            sectionHideTop(s8,s8e1,s8e2);
            sectionShow(s9,s9e1 , s9e2);
            sectionHideDown(s10,s10e1);    
            hideAllExcept(s9);
            handleActiveTab(8);
        } else if (frame(10)) {
            sectionHideTop(s9,s9e1,s9e2);
            sectionShow(s10,s10e1 , s10e2);
            sectionHideDown(s11,s11e1); 
            hideAllExcept(s10);
            handleActiveTab(9);
        } else if (frame(11)) {
            sectionHideTop(s10,s10e1,s10e2);
            sectionShow(s11,s11e1 , s11e2);
            sectionHideDown(s12,s12e1);
            hideAllExcept(s11);
            handleActiveTab(10);
        } else if (frame(12)) {
            sectionHideTop(s11,s11e1,s11e2);
            sectionShow(s12,s12e1 , s12e2);
            sectionHideDown(s13,s13e1);  
            hideAllExcept(s12);
            handleActiveTab(11);
        } else if (frame(13)) {
            sectionHideTop(s12,s12e1,s12e2);
            sectionShow(s13,s13e1 , s13e2);
            sectionHideDown(s14,s14e1);  
            hideAllExcept(s13);
            handleActiveTab(12);
        } else if (frame(14)) {
            sectionHideTop(s13,s13e1,s13e2);
            sectionShow(s14,s14e1 , s14e2);
            hideAllExcept(s14);
            handleActiveTab(13);
        }
        
    });

    let tabs = Array.from(document.getElementsByClassName('tab'));

    tabs.map((t,i)=>{
        t.addEventListener('click',()=>{
            window.scrollTo(0, i*step+10 );
          handleActiveTab(i)
        })
    });

    const handleActiveTab = (index)=>{
        tabs.map((t)=>{
            t!= tabs[index] && t.classList.remove('active-tab');
        })
        tabs[index].classList.add('active-tab')
    }

};
