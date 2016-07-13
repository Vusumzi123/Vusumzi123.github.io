			function setVars(){
				
				var nodeList = document.getElementsByClassName('parCont');
				var bgNodes = document.getElementsByClassName('bg_img');

				Vars = {
				
					sizedElems: Array.prototype.slice.call(nodeList,0),

					parallaxElems : [

						document.getElementById('layer_1'),
						document.getElementById('layer_2'),
						document.getElementById('background')
					],
					


					backgrounds: Array.prototype.slice.call(bgNodes,0),

					navBar : document.getElementById('navb'),
				}
			};

			function dynamicVars(){

				Dvars = {
				hOfset : window.pageYOffset,
				height : window.innerHeight,
				widht : window.innerWidth,

				}
			}



			function setSize(item){
					item.style.height = Dvars.height+"px";
			}


			function parallax(item,ofset){
				//var thing = item;
				//var item = parallaxElems_1;
				//var desp = -(window.pageYOffset/ofset);
				item.style.top = -(Dvars.hOfset/ofset)+"px";
			}
			
			function resizeBackground(item){
				//var w = window.innerWidth;
				//var h = window.innerHeight;
				var back = item;

				if(Dvars.widht/Dvars.height < 640/428){
					back.style.height = "100%";
					back.style.width = "auto";
				}else {
					back.style.height = "auto";
					back.style.width = "100%";
				}
			}

			function scrollNav(){
				if (Dvars.hOfset > 100) {
					Vars.navBar.className = "navbar navbar-default_2";
				}else {
					Vars.navBar.className = "navbar navbar-default";
				}
			}

			



				function parallaxScroll(){
					parallax(Vars.parallaxElems[0],1);
					parallax(Vars.parallaxElems[1],23);
					parallax(Vars.parallaxElems[2],12);
				}

				function scrl(){
					dynamicVars();
					scrollNav();
					parallaxScroll();
				}

				function res(){
					dynamicVars();
					Vars.sizedElems.forEach(setSize);
					parallaxScroll();
					Vars.backgrounds.forEach(resizeBackground);
				}

				function set(){
					setVars();
					res();
				}



			function main(){

				set();
				window.addEventListener("scroll", scrl, false);
				window.addEventListener("resize", res, true);


			};
			


			(function(){
				window.onload = main;
			})();
			
