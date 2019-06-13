var nav = '<nav class="navbar navbar-expand-lg navbar-light sticky-top" >\
	  	<a class="navbar-brand logo" href="#"><img src="img/logo.png" width="80" ></a>\
	  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
	    	<span class="navbar-toggler-icon"></span>\
	  	</button>\
	  	<div class="collapse navbar-collapse" id="navbarSupportedContent">\
	    	<ul class="navbar-nav mr-auto top">\
		      	<li class="nav-item">\
		        	<a class="nav-link" href="index.html">首頁</a>\
		      	</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				<li class="nav-item dropdown">\
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
			        找鞋子\
			        </a>\
		        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\
		          	<a class="dropdown-item" href="nike-all.html">Nike</a>\
		          	<a class="dropdown-item" href="adidas-all.html">Adidas</a>\
		        </div>\
		      	</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
		      	<li class="nav-item">\
		        	<a class="nav-link" href="hot.html">熱門排行</a>\
		      	</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
		      	<li class="nav-item">\
		        	<a class="nav-link" href="board.html">留言板</a>\
		      	</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
		      	<li class="nav-item">\
		        	<a class="nav-link" href="aboutus.html">關於我們</a>\
		      	</li>\
	    	</ul>\
	    	<ul class="navbar-nav mr-auto top3">\
	    		<li class="nav-item top2">\
		        	<a class="nav-link" href="cart.html"><img src="img/shopping-cart.png" class="shopping-cart"></a>\
		      	</li>\
		    	<li class="nav-item dropdown">\
		        	<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
		        		<img src="img/account.png" class="account">\
		        	</a>\
			        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\
			          	<a class="dropdown-item" href="#" onclick="login()">登入</a>\
			          	<a class="dropdown-item" href="#" onclick="register()">註冊</a>\
			        </div>\
		      	</li>\
	      	</ul>\
			<div>\
		    	<form action="search.html" class="form-inline my-2 my-lg-0">\
		      		<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\
		      		<button class="btn  my-2 my-sm-0" type="submit"><img src="img/search.png" class="search"></button>\
		    	</form>\
	    	</div>\
	  	</div>\
	</nav>';
	document.write(nav);