			function setSize(){
				var item = document.getElementsByClassName('parCont');
				var h = window.innerHeight;
				var i = 0;
				do {
					item[i].style.height = h+"px";
					i++;
				}while(item[i] != null);
			}


			function parallax(item,ofset){
				var elem = item;
				var thing = document.getElementById(elem);
				var desp = -(window.pageYOffset/ofset);
				thing.style.top = desp+"px";
			}
			
			function resizeBackground(item){
				var elem = item;
				var w = window.innerWidth;
				var h = window.innerHeight;
				var back = document.getElementById(elem);

				if(w/h < 640/428){
					back.style.height = "130%";
					back.style.width = "auto";
				}else {

					back.style.width = "130%";
				}
			}

			//(function(){
				function parallaxScroll(){
				parallax('layer_1',3);
				parallax('background',1);
				}

				function res(){
					setSize();
					parallaxScroll()
					resizeBackground('bg_img_1');
					resizeBackground('bg_img_2');
				}



			
				window.onload = res;
				window.addEventListener("scroll", parallaxScroll, false);
				window.addEventListener("resize", res, true);


			//})();
			
