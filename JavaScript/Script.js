			function setVars(){
				Vars = {
					parallaxElems : [
						document.getElementById('layer_1'),
						document.getElementById('layer_2')
					],
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

			function parallax(item,ofset){

				$('#layer_2').css({
					'transform' : 'translateY(' +Dvars.wHeight/2+ '%)'
				});
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
					parallax(Vars.parallaxElems[1],2);
				}

				function scrl(){
					dynamicVars();
					scrollNav();
					parallaxScroll();
				}

				function res(){
					dynamicVars();
					parallaxScroll();
				}

				function set(){
					setVars();
					res();
					scrl();
				}

			function main(){
				set();
				window.addEventListener("scroll", scrl, false);
				window.addEventListener("resize", res, true);
			};


			(function(){
				window.onload = main;
			})();
