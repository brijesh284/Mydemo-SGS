
// jQuery(document).ready(function() {

    var _this = this;

    class ScrollHandler {
        
        constructor(containerSelector,scroll_section_parts) {
            
            var _this = this;

          _this.xDown = null;
          _this.yDown = null;        

            this.container = document.querySelector(containerSelector);
            console.log(this.container);
            this.addEventListeners();
        
            _this.handleScroll = "end";
            _this.handletouch = 'end';
            _this.scroll_index = 0;

        }

        function_call(){
            var _this = this;
            // for (let i = 0; i < arguments.length; i++) {
            //   var callback_name = arguments[i]; 
            //   callback_name();
            // }
            _this.function_call = arguments;

        }

        addEventListeners() {

            if(screen.availWidth >= 1024){
                this.container.addEventListener('wheel', this.handleScroll.bind(this));
            }else{
                this.container.addEventListener('touchstart', this.handleTouchStart.bind(this));
                this.container.addEventListener('touchmove', this.handleTouchMove.bind(this));
                // this.container.addEventListener('touchend', this.handleTouchEnd.bind(this));
            }
        }

        handleScroll(event) {
            var _this = this;

            event.preventDefault();
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if (_this.handleScroll == "end") {

                _this.handleScroll = 'start';
                
                if (delta > 0) {
                    // Scroll Up Condition
                    console.log('upppp');
                    // if (this.shouldScrollUp()) {
                    //     this.container.scrollBy(0, delta * 30);
                    // }
                    if (!_this.scroll_index <= 0) {
                        _this.scroll_index--;
                    }

                    _this.function_call[_this.scroll_index]("preview");
                    setTimeout(function () {
                        _this.handleScroll = "end";
                    }, 500);
                } else {
                    console.log('downnnn');
                    // Scroll Down Condition
                    // if (this.shouldScrollDown()) {
                    //     this.container.scrollBy(0, delta * 30);
                    // }
                    if (_this.scroll_index != _this.function_call.length - 1) {
                        _this.scroll_index++;
                    }

                    _this.function_call[_this.scroll_index]("next");
                    setTimeout(function () {
                        _this.handleScroll = "end";
                    }, 500);
                }
            }
        }

        getTouches(evt) {
          return (
            evt.touches || // browser API
            evt.originalEvent.touches
          ); // jQuery
        }

        handleTouchStart(evt) {
            var _this = this;
          const firstTouch = _this.getTouches(evt)[0];
          _this.xDown = firstTouch.clientX;
          _this.yDown = firstTouch.clientY;
        }

        handleTouchMove(evt) {
            var _this = this;
                  
              if (!_this.xDown || !_this.yDown) {
                return;
              }

              var xUp = evt.touches[0].clientX;
              var yUp = evt.touches[0].clientY;

              var xDiff = _this.xDown - xUp;
              var yDiff = _this.yDown - yUp;

              // console.log('handletouch');
              // console.log(_this.handletouch);
            if (_this.handletouch == "end") {

                _this.handletouch = 'start';
               
               console.log(xDiff);

                if (Math.abs(xDiff) > Math.abs(yDiff)){

                }else{

                    if (yDiff > 0) {

                        console.log('m downnnn');

                        if (_this.scroll_index != _this.function_call.length - 1) {
                            _this.scroll_index++;
                        }

                        _this.function_call[_this.scroll_index]("next",_this);
                        setTimeout(function () {
                            _this.handletouch = "end";
                        }, 500);                
                    } else {
                        console.log('m upppp');

                        if (!_this.scroll_index <= 0) {
                            _this.scroll_index--;
                        }

                        _this.function_call[_this.scroll_index]("preview",_this);
                        setTimeout(function () {
                            _this.handletouch = "end";
                        }, 500);
                    }
                }
                  /* reset values */
                  _this.xDown = null;
                  _this.yDown = null;

            }    

        }

        shouldScrollUp() {
            // Add your custom condition for scrolling up
            // Return true if scrolling up is allowed, false otherwise
            // Example: return someVariable > 0;
            return true;
        }

        shouldScrollDown() {
            // Add your custom condition for scrolling down
            // Return true if scrolling down is allowed, false otherwise
            // Example: return someVariable < 100;
            return true;
        }
    }


    // Usage
    window.ScrollHandler = ScrollHandler;
    
    // const scrollHandler = new ScrollHandler('body');
    // scrollHandler.function_call(one,two,three);

    // function one(){
    //     console.log('one');
    // }
    
    // function two(){
    //     console.log('two');
    // }
    
    // function three(){
    //     console.log('three');
    // }
// });

