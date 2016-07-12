			function setVars(){
				
				var nodeList = document.getElementsByClassName('parCont');
				var bgNodes = document.getElementsByClassName('bg_img');

				Vars = {
				
					sizedElems: Array.prototype.slice.call(nodeList,0),

					parallaxElems : [

						document.getElementById('layer_1'), 
						document.getElementById('background')
					],
					


					backgrounds: Array.prototype.slice.call(bgNodes,0),
				}
			};			



			function setSize(item){

				var h = window.innerHeight;
					item.style.height = h+"px";
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

					Vars.sizedElems.forEach(setSize);
					parallaxScroll();
					Vars.backgrounds.forEach(resizeBackground);
				}

				function set(){
					setVars();
					res();
				}



			
				window.onload = set;
				window.addEventListener("scroll", parallaxScroll, false);
				window.addEventListener("resize", res, true);


			})();
			
