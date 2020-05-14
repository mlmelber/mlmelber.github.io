(() => {
    /* */
    if (document.querySelector(".menu_toggle")) {
      document.querySelectorAll(".menu_toggle").forEach(function(obj) {
        obj.addEventListener("click", function() {
          document.body.classList.toggle("menu_hidden");
        });
      });
    }
  })();

 

  (() => {
    	if( document.querySelector(".my-slider") ){
        var slider = tns({
          container: ".my-slider",
          items: 1,
          slideBy: "page",
          autoplay: false
        });
      }
  })();