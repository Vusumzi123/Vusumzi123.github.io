				function setVars(){
				Vars = {
				sizedElems: document.getElementsByClassName('parCont'),

				parallaxElems : [

					document.getElementById('layer_1'), 
					document.getElementById('background')],
					


				backgrounds :document.getElementsByClassName('bg_img'),
				}};			



			function setSize(){
				var item = Vars.sizedElems;
				var h = window.innerHeight;
				var i = 0;



				do {
					item[i].style.height = h+"px";
					i++;
				}while(item[i] != null);

				console.log(item[0].style.height);
			}


			function parallax(item,ofset){
				//var thing = item;
				//var item = parallaxElems_1;
				var desp = -(window.pageYOffset/ofset);
				item.style.top = desp+"px";
			}
			
			function resizeBackground(item){
				var w = window.innerWidth;
				var h = window.innerHeight;
				var back = item;

				if(w/h < 640/428){
					back.style.height = "100%";
					back.style.width = "auto";
				}else {
					back.style.height = "auto";
					back.style.width = "100%";
				}
			}

			(function(){



				function parallaxScroll(){
					parallax(Vars.parallaxElems[0],2);
					parallax(Vars.parallaxElems[1],8);
				}

				function res(){
					setSize();
					parallaxScroll()
					resizeBackground(Vars.backgrounds[0]);
					resizeBackground(Vars.backgrounds[1]);
				}

				function set(){
					setVars();
					res();
				}



			
				window.onload = set;
				window.addEventListener("scroll", parallaxScroll, false);
				window.addEventListener("resize", res, true);


			})();
			
