export default {
	data: function(){
		return {
			open:true,
		}
	},
	methods: {
		openClose:function () {
			var img=document.querySelector("#imgNavbar");
			open ? (open=false, navbar.setAttribute('style','display:none'), img.src='/icon/menu.svg') : (open=true, navbar.setAttribute('style','display:true'), img.src='/icon/menu_open.svg');
		},
		setStyle: function(page){
			switch (page) {
				case 'home':
					document.querySelector("#home").setAttribute('class','active')
					break;
				case 'cv':
					document.querySelector("#cv").setAttribute('class','active')
					break;
			}
		}
	},
	template: 
		`
		<table id="tabNav">
		<tr>
			<td>
				<div id="navbar">
					<a id="home" href="/index.html">Accueil</a>
					<a id="cv" href="/src/pages/curriculum-vitae.html">CV</a>
					<a @click="setStyle" id="home" href="#galerie">Galerie</a>
					<a id="home" href="#contact">Contact</a>
				</div>
			</td>
			<td>
				<button id='openMenu' @click="openClose">
					<img id='imgNavbar' src="/icon/menu_open.png">
				</button>
			</td>
		</tr>
	  </table>
	  <span>{{page}}</span>
		`
}