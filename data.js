var categories = [];

categories.push({
	title: "starter template",
	items: [{
		title: "starter template",
		code: "<!doctype html>" +
			"\r\n<html lang=\"en\">" +
			"\r\n<head>" +
			"\r\n<!-- Required meta tags -->" +
			"\r\n<meta charset=\"utf-8\">" +
			"\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">"

			+
			"\r\n<!-- Bootstrap CSS -->" +
			"\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">"

			+
			"\r\n<title>Hello, world!</title>" +
			"\r\n</head>" +
			"\r\n<body>" +
			"\r\n<h1>Hello, world!</h1>"

			+
			"\r\n<!-- Optional JavaScript -->" +
			"\r\n<!-- jQuery first, then Popper.js, then Bootstrap JS -->" +
			"\r\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>" +
			"\r\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>" +
			"\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>" +
			"\r\n</body>" +
			"\r\n</html>"
	}]
})

categories.push({
	title: "alerts",
	items: [{
			title: "alert-primary",
			code: "<div class=\"alert alert-primary\" role=\"alert\">" +
				"\r\n 	<strong>Well done!</strong> You successfully read this" +
				"\r\n 	important alert message." +
				"\r\n</div>"
		},

		{
			title: "alert-secondary",
			code: "<div class=\"alert alert-secondary\" role=\"alert\">" +
				"\r\n 	<strong>Well done!</strong> You successfully read this" +
				"\r\n 	important alert message." +
				"\r\n</div>"
		},

		{
			title: "alert-success",
			code: "<div class=\"alert alert-success\" role=\"alert\">" +
				"\r\n 	<strong>Well done!</strong> You successfully read this" +
				"\r\n 	important alert message." +
				"\r\n</div>"
		},

		{
			title: "alert-info",
			code: "<div class=\"alert alert-info\" role=\"alert\">" +
				"\r\n 	<strong>Heads up!</strong> This alert needs your attention," +
				"\r\n 	but it's not super important." +
				"\r\n</div>"
		},

		{
			title: "alert-warning",
			code: "<div class=\"alert alert-warning\" role=\"alert\">" +
				"\r\n 	<strong>Warning!</strong> Better check yourself, you're not looking too good." +
				"\r\n</div>"
		},

		{
			title: "alert-danger",
			code: "<div class=\"alert alert-danger\" role=\"alert\">" +
				"\r\n 	<strong>Oh snap!</strong> Change a few things up and try submitting again." +
				"\r\n</div>"
		},

		{
			title: "alert-light",
			code: "<div class=\"alert alert-light\" role=\"alert\">" +
				"\r\n 	<strong>Well done!</strong> You successfully read this" +
				"\r\n 	important alert message." +
				"\r\n</div>"
		},

		{
			title: "alert-dark",
			code: "<div class=\"alert alert-dark\" role=\"alert\">" +
				"\r\n 	<strong>Well done!</strong> You successfully read this" +
				"\r\n 	important alert message." +
				"\r\n</div>"
		},

		{
			title: "alert-link",
			code: "<div class=\"alert alert-danger\" role=\"alert\">" +
				"\r\n 	<strong>Oh snap!</strong>" +
				"\r\n 	<a href=\"#!\" class=\"alert-link\">Change a few things up</a>" +
				"\r\n 	and try submitting again." +
				"\r\n</div>"
		},

		{
			title: "alert-dismissible",
			code: "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">" +
				"\r\n 	<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
				"\r\n 		<span aria-hidden=\"true\">&times;</span>" +
				"\r\n 	</button>" +
				"\r\n 	<strong>Holy guacamole!</strong> You should check in on some of those fields below." +
				"\r\n</div>"
		},

		{
			title: "alert-heading",
			code: "<div class=\"alert alert-success\" role=\"alert\">" +
				"\r\n 	<h4 class=\"alert-heading\">Well done!</h4>" +
				"\r\n 	You successfully read this important alert message." +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "badges",
	items: [{
			title: "badge",
			code: "<h1>Example heading <span class=\"badge badge-secondary\">New</span></h1>"
		},

		{
			title: "badge-pill",
			code: "<span class=\"badge badge-pill badge-primary\">Secondary</span>"
		},

		{
			title: "badge-primary",
			code: "<span class=\"badge badge-primary\">Primary</span>"
		},

		{
			title: "badge-secondary",
			code: "<span class=\"badge badge-secondary\">Secondary</span>"
		},

		{
			title: "badge-success",
			code: "<span class=\"badge badge-success\">Success</span>"
		},

		{
			title: "badge-info",
			code: "<span class=\"badge badge-info\">Info</span>"
		},

		{
			title: "badge-warning",
			code: "<span class=\"badge badge-warning\">Warning</span>"
		},

		{
			title: "badge-danger",
			code: "<span class=\"badge badge-danger\">Danger</span>"
		},

		{
			title: "badge-light",
			code: "<span class=\"badge badge-light\">Light</span>"
		},

		{
			title: "badge-dark",
			code: "<span class=\"badge badge-dark\">Dark</span>"
		}
	]
});

categories.push({
	title: "breadcrumbs",
	items: [{
		title: "breadcrumb",
		code: "<nav aria-label=\"breadcrumb\">" +
			"\r\n 	<ol class=\"breadcrumb\">" +
			"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>" +
			"\r\n 	</ol>" +
			"\r\n</nav>" +
			"\r\n" +
			"\r\n<nav aria-label=\"breadcrumb\">" +
			"\r\n 	<ol class=\"breadcrumb\">" +
			"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>" +
			"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>" +
			"\r\n 	</ol>" +
			"\r\n</nav>" +
			"\r\n" +
			"\r\n<nav aria-label=\"breadcrumb\">" +
			"\r\n 	<ol class=\"breadcrumb\">" +
			"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>" +
			"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>" +
			"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>" +
			"\r\n 	</ol>" +
			"\r\n</nav>"
	}]
});

categories.push({
	title: "buttons",
	items: [{
			title: "btn-primary",
			code: "<button type=\"button\" class=\"btn btn-primary\">Primary</button>"
		},

		{
			title: "btn-secondary",
			code: "<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>"
		},

		{
			title: "btn-success",
			code: "<button type=\"button\" class=\"btn btn-success\">Success</button>"
		},

		{
			title: "btn-info",
			code: "<button type=\"button\" class=\"btn btn-info\">Info</button>"
		},

		{
			title: "btn-warning",
			code: "<button type=\"button\" class=\"btn btn-warning\">Warning</button>"
		},

		{
			title: "btn-danger",
			code: "<button type=\"button\" class=\"btn btn-danger\">Danger</button>"
		},

		{
			title: "btn-light",
			code: "<button type=\"button\" class=\"btn btn-light\">Light</button>"
		},

		{
			title: "btn-dark",
			code: "<button type=\"button\" class=\"btn btn-dark\">Dark</button>"
		},

		{
			title: "btn-link",
			code: "<button type=\"button\" class=\"btn btn-link\">Link</button>"
		},

		{
			title: "btn-outline-primary",
			code: "<button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>"
		},

		{
			title: "btn-outline-secondary",
			code: "<button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>"
		},

		{
			title: "btn-outline-success",
			code: "<button type=\"button\" class=\"btn btn-outline-success\">Success</button>"
		},

		{
			title: "btn-outline-info",
			code: "<button type=\"button\" class=\"btn btn-outline-info\">Info</button>"
		},

		{
			title: "btn-outline-warning",
			code: "<button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>"
		},

		{
			title: "btn-outline-danger",
			code: "<button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>"
		},

		{
			title: "btn-outline-light",
			code: "<button type=\"button\" class=\"btn btn-outline-light\">Light</button>"
		},

		{
			title: "btn-outline-dark",
			code: "<button type=\"button\" class=\"btn btn-outline-dark\">Dark</button>"
		}
	]
});

categories.push({
	title: "button groups",
	items: [{
			title: "btn-group",
			code: "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>" +
				"\r\n</div>"
		},

		{
			title: "btn-group-lg",
			code: "<div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>" +
				"\r\n</div>"
		},

		{
			title: "btn-group-sm",
			code: "<div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>" +
				"\r\n</div>"
		},

		{
			title: "btn-group-vertical",
			code: "<div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>" +
				"\r\n</div>"
		},

		{
			title: "btn-group(nested)",
			code: "<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">1</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">2</button>" +
				"\r\n" +
				"\r\n  <div class=\"btn-group\" role=\"group\">" +
				"\r\n    <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n      Dropdown" +
				"\r\n    </button>" +
				"\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Dropdown link</a>" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Dropdown link</a>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "btn-toolbar",
			code: "<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">" +
				"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">1</button>" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">2</button>" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">3</button>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">5</button>" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">6</button>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">" +
				"\r\n    <button type=\"button\" class=\"btn btn-secondary\">8</button>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "button modifiers",
	items: [{
			title: "btn-lg",
			code: "<button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>"
		},

		{
			title: "btn-sm",
			code: "<button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>"
		},

		{
			title: "btn-block",
			code: "<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>"
		},

		{
			title: "active button",
			code: "<a href=\"#!\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\">Primary link</a>"
		},

		{
			title: "disabled button",
			code: "<button type=\"button\" class=\"btn btn-lg btn-primary\" disabled=\"\">Disabled button</button>" +
				"\r\n<a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\" aria-disabled=\"true\">Disabled link button</a>"
		},

		{
			title: "checkbox as button",
			code: "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">" +
				"\r\n  <label class=\"btn btn-secondary active\">" +
				"\r\n    <input type=\"checkbox\" checked=\"\" autocomplete=\"off\"> Active" +
				"\r\n  </label>" +
				"\r\n  <label class=\"btn btn-secondary\">" +
				"\r\n    <input type=\"checkbox\" autocomplete=\"off\"> Check" +
				"\r\n  </label>" +
				"\r\n</div>"
		},

		{
			title: "radio as button",
			code: "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">" +
				"\r\n  <label class=\"btn btn-secondary active\">" +
				"\r\n    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked=\"\"> Active" +
				"\r\n  </label>" +
				"\r\n  <label class=\"btn btn-secondary\">" +
				"\r\n    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Radio" +
				"\r\n  </label>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "cards",
	items: [{
			title: "card",
			code: "<div class=\"card\">" +
				"\r\n  <img class=\"card-img-top\" src=\"/assets/img-cap.png\" alt=\"Card image cap\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Card title</h4>" +
				"\r\n    <p class=\"card-text\">" +
				"\r\n      Some quick example text to build on the card title" +
				"\r\n      and make up the bulk of the card's content." +
				"\r\n    </p>" +
				"\r\n    <a href=\"#!\" class=\"btn btn-primary\">Go somewhere</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-body",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    This is some text within a card block." +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-title",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Card title</h4>" +
				"\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>" +
				"\r\n    <p class=\"card-text\">" +
				"\r\n      Some quick example text to build on the card title" +
				"\r\n      and make up the bulk of the card's content." +
				"\r\n    </p>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Card link</a>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Another link</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-subtitle",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Card title</h4>" +
				"\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>" +
				"\r\n    <p class=\"card-text\">" +
				"\r\n      Some quick example text to build on the card title" +
				"\r\n      and make up the bulk of the card's content." +
				"\r\n    </p>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Card link</a>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Another link</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-text",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Card title</h4>" +
				"\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>" +
				"\r\n    <p class=\"card-text\">" +
				"\r\n      Some quick example text to build on the card title" +
				"\r\n      and make up the bulk of the card's content." +
				"\r\n    </p>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Card link</a>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Another link</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-link",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Card title</h4>" +
				"\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>" +
				"\r\n    <p class=\"card-text\">" +
				"\r\n      Some quick example text to build on the card title" +
				"\r\n      and make up the bulk of the card's content." +
				"\r\n    </p>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Card link</a>" +
				"\r\n    <a href=\"#!\" class=\"card-link\">Another link</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-img-top",
			code: "<div class=\"card\">" +
				"\r\n  <img class=\"card-img-top\" src=\"/assets/img-cap.png\" alt=\"Card image cap\">" +
				"\r\n  <div class=\"card-body\"> Some more card content </div>" +
				"\r\n</div>"
		},

		{
			title: "middle image",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <p class=\"card-text\">This image is in the middle</p>" +
				"\r\n  </div>" +
				"\r\n  <img src=\"/assets/img-cap.png\" alt=\"Card image\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <p class=\"card-text\">of a card.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-img-bottom",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\"> Some more card content </div>" +
				"\r\n  <img class=\"card-img-bottom\" src=\"/assets/img-cap.png\" alt=\"Card image cap\">" +
				"\r\n</div>"
		},

		{
			title: "card-img-overlay",
			code: "<div class=\"card\">" +
				"\r\n  <img class=\"card-img\" src=\"/assets/img-cap.png\" alt=\"Card image\">" +
				"\r\n  <div class=\"card-img-overlay\">" +
				"\r\n    <p class=\"card-text\">I'm text that has a background image!</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card list-group",
			code: "<div class=\"card\">" +
				"\r\n  <ul class=\"list-group list-group-flush\">" +
				"\r\n    <li class=\"list-group-item\">Cras justo odio</li>" +
				"\r\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>" +
				"\r\n    <li class=\"list-group-item\">Vestibulum at eros</li>" +
				"\r\n  </ul>" +
				"\r\n</div>"
		},

		{
			title: "card-header",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-header\">" +
				"\r\n    Featured" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Special title treatment</h4>" +
				"\r\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "h*.card-header",
			code: "<div class=\"card\">" +
				"\r\n  <h3 class=\"card-header\">Featured</h3>" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Special title treatment</h4>" +
				"\r\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>" +
				"\r\n    <a href=\"#!\" class=\"btn btn-primary\">Go somewhere</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-footer",
			code: "<div class=\"card\">" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <p class=\"card-text\">Some more card content</p>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card-footer\">" +
				"\r\n    2 days ago" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-group",
			code: "<div class=\"card-group\">" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-deck",
			code: "<div class=\"card-deck\">" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <h4 class=\"card-title\">Card title</h4>" +
				"\r\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card-columns",
			code: "<div class=\"card-columns\">" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <!-- Card content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card p-3\">" +
				"\r\n    <!-- Card content -->" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-body\">" +
				"\r\n      <!-- Card content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card bg-primary p-3 text-center\">" +
				"\r\n      <!-- Card content -->" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "card text-white bg-primary",
			code: "<!-- Tip: use bg-* and text-* utilities to style the card -->" +
				"\r\n<div class=\"card text-white bg-primary mb-3 d-inline-block\" style=\"max-width: 20rem;\">" +
				"\r\n  <div class=\"card-header\">Header</div>" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Primary card title</h4>" +
				"\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
				"\r\n  </div>" +
				"\r\n</div>" +
				"\r\n<div class=\"card text-white bg-dark mb-3 d-inline-block\" style=\"max-width: 20rem;\">" +
				"\r\n  <div class=\"card-header\">Header</div>" +
				"\r\n  <div class=\"card-body\">" +
				"\r\n    <h4 class=\"card-title\">Primary card title</h4>" +
				"\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});


categories.push({
	title: "carousel",
	items: [{
			title: "carousel slide",
			code: "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">" +
				"\r\n  <div class=\"carousel-inner\" role=\"listbox\">" +
				"\r\n    <div class=\"carousel-item active\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a1679%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a1679%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=social\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n    <div class=\"carousel-item\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a165d%20text%20%7B%20fill%3A%23C2F200%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a165d%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%23434A52%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=industrial\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">" +
				"\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Previous</span>" +
				"\r\n  </a>" +
				"\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">" +
				"\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Next</span>" +
				"\r\n  </a>" +
				"\r\n</div>"
		},

		{
			title: "carousel-fade",
			code: "<div id=\"carouselFadeExampleIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">" +
				"\r\n  <div class=\"carousel-inner\" role=\"listbox\">" +
				"\r\n    <div class=\"carousel-item active\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a167b%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a167b%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=social\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n    <div class=\"carousel-item\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a164f%20text%20%7B%20fill%3A%23C2F200%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a164f%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%23434A52%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=industrial\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <a class=\"carousel-control-prev\" href=\"#carouselFadeExampleIndicators\" role=\"button\" data-slide=\"prev\">" +
				"\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Previous</span>" +
				"\r\n  </a>" +
				"\r\n  <a class=\"carousel-control-next\" href=\"#carouselFadeExampleIndicators\" role=\"button\" data-slide=\"next\">" +
				"\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Next</span>" +
				"\r\n  </a>" +
				"\r\n</div>"
		},

		{
			title: "carousel-indicators",
			code: "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">" +
				"\r\n  <ol class=\"carousel-indicators\">" +
				"\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>" +
				"\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>" +
				"\r\n  </ol>" +
				"\r\n  <div class=\"carousel-inner\" role=\"listbox\">" +
				"\r\n    <div class=\"carousel-item active\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a167d%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a167d%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=social\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n    <div class=\"carousel-item\">" +
				"\r\n      <img class=\"d-block w-100\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a163a%20text%20%7B%20fill%3A%23C2F200%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a163a%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%23434A52%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.2109375%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-src=\"holder.js/900x400?theme=industrial\" alt=\"900x400\" data-holder-rendered=\"true\" style=\"width: 900px; height: 400px;\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">" +
				"\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Previous</span>" +
				"\r\n  </a>" +
				"\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">" +
				"\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>" +
				"\r\n    <span class=\"sr-only\">Next</span>" +
				"\r\n  </a>" +
				"\r\n</div>"
		},

		{
			title: "carousel-caption",
			code: "<div class=\"bd-example\">" +
				"\r\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">" +
				"\r\n    <ol class=\"carousel-indicators\">" +
				"\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>" +
				"\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>" +
				"\r\n    </ol>" +
				"\r\n    <div class=\"carousel-inner\" role=\"listbox\">" +
				"\r\n      <div class=\"carousel-item active\">" +
				"\r\n        <img class=\"d-block w-100\" data-src=\"holder.js/900x300?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide\" alt=\"First slide [900x300]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a160b%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a160b%22%3E%3Crect%20width%3D%22900%22%20height%3D%22300%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22308.296875%22%20y%3D%22170.1%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">" +
				"\r\n        <div class=\"carousel-caption d-none d-md-block\">" +
				"\r\n          <h3>First slide label</h3>" +
				"\r\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>" +
				"\r\n        </div>" +
				"\r\n      </div>" +
				"\r\n      <div class=\"carousel-item\">" +
				"\r\n        <img class=\"d-block w-100\" data-src=\"holder.js/900x300?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide\" alt=\"Second slide [900x300]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1673c6a1610%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1673c6a1610%22%3E%3Crect%20width%3D%22900%22%20height%3D%22300%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22264.953125%22%20y%3D%22170.1%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">" +
				"\r\n        <div class=\"carousel-caption d-none d-md-block\">" +
				"\r\n          <h3>Second slide label</h3>" +
				"\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>" +
				"\r\n        </div>" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">" +
				"\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
				"\r\n      <span class=\"sr-only\">Previous</span>" +
				"\r\n    </a>" +
				"\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">" +
				"\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>" +
				"\r\n      <span class=\"sr-only\">Next</span>" +
				"\r\n    </a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "collapse",
	items: [{
			title: "collapse",
			code: "<p>" +
				"\r\n  <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">" +
				"\r\n    Link with href" +
				"\r\n  </a>" +
				"\r\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">" +
				"\r\n    Button with data-target" +
				"\r\n  </button>" +
				"\r\n</p>" +
				"\r\n<div class=\"collapse\" id=\"collapseExample\">" +
				"\r\n  <div class=\"card card-body\">" +
				"\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "accordion",
			code: "<div id=\"accordion\" role=\"tablist\">" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">" +
				"\r\n      <h5 class=\"mb-0\">" +
				"\r\n        <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">" +
				"\r\n          Collapsible Group Item #1" +
				"\r\n        </a>" +
				"\r\n      </h5>" +
				"\r\n    </div>" +
				"\r\n" +
				"\r\n    <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">" +
				"\r\n      <div class=\"card-body\">" +
				"\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"card\">" +
				"\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">" +
				"\r\n      <h5 class=\"mb-0\">" +
				"\r\n        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">" +
				"\r\n          Collapsible Group Item #2" +
				"\r\n        </a>" +
				"\r\n      </h5>" +
				"\r\n    </div>" +
				"\r\n    <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">" +
				"\r\n      <div class=\"card-body\">" +
				"\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid." +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "dropdowns",
	items: [{
			title: "dropdown",
			code: "<div class=\"dropdown\">" +
				"\r\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropdown" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-toggle",
			code: "<div class=\"btn-group\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Dropdown</button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    <span class=\"sr-only\">Toggle Dropdown</span>" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropup",
			code: "<br> <br> <br> <br>" +
				"\r\n<div class=\"btn-group dropup\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropup" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Something else here</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropup (split)",
			code: "<br> <br> <br> <br>" +
				"\r\n<div class=\"btn-group dropup\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary\">" +
				"\r\n    Split dropup" +
				"\r\n  </button>" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    <span class=\"sr-only\">Toggle Dropdown</span>" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropright",
			code: "<div class=\"btn-group dropright\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropright" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\" x-placement=\"right-start\" style=\"position: absolute; transform: translate3d(111px, 0px, 0px); top: 0px; left: 0px; will-change: transform;\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropleft",
			code: "<div class=\"btn-group dropleft\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropright" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\" x-placement=\"right-start\" style=\"position: absolute; transform: translate3d(111px, 0px, 0px); top: 0px; left: 0px; will-change: transform;\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-header",
			code: "<div class=\"dropdown open\">" +
				"\r\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropdown" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <h6 class=\"dropdown-header\">Dropdown header</h6>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-item-text",
			code: "<div class=\"dropdown open\">" +
				"\r\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropdown" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <span class=\"dropdown-item-text\">Dropdown item text</span>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-divider",
			code: "<div class=\"dropdown open\">" +
				"\r\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropdown" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Separated link</a>" +
				"\r\n    <div class=\"dropdown-divider\"></div>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-item disabled",
			code: "<div class=\"dropdown open\">" +
				"\r\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    Dropdown" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu\">" +
				"\r\n    <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n    <a class=\"dropdown-item disabled\" href=\"#!\">Disabled action</a>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "dropdown-menu-right",
			code: "<div class=\"btn-group\">" +
				"\r\n  <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n    This dropdown's menu is right-aligned" +
				"\r\n  </button>" +
				"\r\n  <div class=\"dropdown-menu dropdown-menu-right\">" +
				"\r\n    <button class=\"dropdown-item\" type=\"button\">Action</button>" +
				"\r\n    <button class=\"dropdown-item\" type=\"button\">Another action</button>" +
				"\r\n    <button class=\"dropdown-item\" type=\"button\">Something else here</button>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "forms",
	items: [{
			title: "form-group",
			code: "<form>" +
				"\r\n  <div class=\"form-group\">" +
				"\r\n    <label for=\"formGroupExampleInput\">Example label</label>" +
				"\r\n    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">" +
				"\r\n  </div>" +
				"\r\n  <div class=\"form-group\">" +
				"\r\n    <label for=\"formGroupExampleInput2\">Another label</label>" +
				"\r\n    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">" +
				"\r\n  </div>" +
				"\r\n</form>"
		},

		{
			title: "form-inline",
			code: "<form class=\"form-inline\">" +
				"\r\n  <label class=\"sr-only\" for=\"inlineFormInputName2\">Name</label>" +
				"\r\n  <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Jane Doe\">" +
				"\r\n" +
				"\r\n  <label class=\"sr-only\" for=\"inlineFormInputGroupUsername2\">Username</label>" +
				"\r\n  <div class=\"input-group mb-2 mr-sm-2\">" +
				"\r\n    <div class=\"input-group-prepend\">" +
				"\r\n      <div class=\"input-group-text\">@</div>" +
				"\r\n    </div>" +
				"\r\n    <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Username\">" +
				"\r\n  </div>" +
				"\r\n" +
				"\r\n  <div class=\"form-check mb-2 mr-sm-2\">" +
				"\r\n    <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineFormCheck\">" +
				"\r\n    <label class=\"form-check-label\" for=\"inlineFormCheck\">" +
				"\r\n      Remember me" +
				"\r\n    </label>" +
				"\r\n  </div>" +
				"\r\n" +
				"\r\n  <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit</button>" +
				"\r\n</form>"
		},

		{
			title: "form using the grid",
			code: "<form>" +
				"\r\n  <div class=\"form-group row\">" +
				"\r\n    <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>" +
				"\r\n    <div class=\"col-sm-10\">" +
				"\r\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <div class=\"form-group row\">" +
				"\r\n    <div class=\"col-sm-10 offset-sm-2\">" +
				"\r\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</form>"
		},

		{
			title: "form-control",
			code: "<input class=\"form-control\" type=\"text\" placeholder=\"Default input\">"
		},

		{
			title: "form-control-lg",
			code: "<input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\">"
		},

		{
			title: "form-control-sm",
			code: "<input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">"
		},

		{
			title: "form-control-file",
			code: "<input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">"
		},

		{
			title: "form-control-plaintext",
			code: "<input type=\"text\" readonly=\"\" class=\"form-control-plaintext\" id=\"staticEmail\" value=\"email@example.com\">"
		},

		{
			title: "form-control-range",
			code: "<input type=\"range\" class=\"form-control-range\">"
		},

		{
			title: "form-check",
			code: "<div class=\"form-check\">" +
				"\r\n  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">" +
				"\r\n  <label class=\"form-check-label\" for=\"defaultCheck1\">" +
				"\r\n    Default checkbox" +
				"\r\n  </label>" +
				"\r\n</div>" +
				"\r\n<div class=\"form-check\">" +
				"\r\n  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked=\"\">" +
				"\r\n  <label class=\"form-check-label\" for=\"exampleRadios1\">" +
				"\r\n    Default radio" +
				"\r\n  </label>" +
				"\r\n</div>"
		},

		{
			title: "form-check-inline",
			code: "<div class=\"form-check form-check-inline\">" +
				"\r\n  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">" +
				"\r\n  <label class=\"form-check-label\" for=\"inlineCheckbox1\">1</label>" +
				"\r\n</div>" +
				"\r\n<div class=\"form-check form-check-inline\">" +
				"\r\n  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">" +
				"\r\n  <label class=\"form-check-label\" for=\"inlineCheckbox2\">2</label>" +
				"\r\n</div>"
		},

		{
			title: "disabled",
			code: "<form>" +
				"\r\n  <fieldset disabled=\"\">" +
				"\r\n    <div class=\"form-group\">" +
				"\r\n      <label for=\"disabledTextInput\">Disabled input</label>" +
				"\r\n      <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">" +
				"\r\n    </div>" +
				"\r\n    <div class=\"form-group\">" +
				"\r\n      <label for=\"disabledSelect\">Disabled select menu</label>" +
				"\r\n      <select id=\"disabledSelect\" class=\"form-control\">" +
				"\r\n        <option>Disabled select</option>" +
				"\r\n      </select>" +
				"\r\n    </div>" +
				"\r\n    <div class=\"form-check\">" +
				"\r\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"disabledFieldsetCheck\" disabled=\"\">" +
				"\r\n      <label class=\"form-check-label\" for=\"disabledFieldsetCheck\">" +
				"\r\n        Can't check this" +
				"\r\n      </label>" +
				"\r\n    </div>" +
				"\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>" +
				"\r\n  </fieldset>" +
				"\r\n</form>"
		},

		{
			title: "readonly",
			code: "<input class=\"form-control\" type=\"text\" placeholder=\"Readonly input here…\" readonly=\"\">"
		}
	]
});

categories.push({
	title: "form input groups",
	items: [{
			title: "input-group",
			code: "<div class=\"input-group\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <span class=\"input-group-text\">Left addon</span>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\">" +
				"\r\n  <div class=\"input-group-append\">" +
				"\r\n    <span class=\"input-group-text\">Right addon</span>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "input-group-prepend",
			code: "<div class=\"input-group\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <button class=\"btn btn-success\" type=\"button\">Love it</button>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">" +
				"\r\n</div>"
		},

		{
			title: "input-group-append",
			code: "<div class=\"input-group\">" +
				"\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">" +
				"\r\n  <div class=\"input-group-append\">" +
				"\r\n    <button class=\"btn btn-success\" type=\"button\">Love it</button>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "input-group-sm",
			code: "<div class=\"input-group input-group-sm\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Small</span>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">" +
				"\r\n</div>"
		},

		{
			title: "input-group-lg",
			code: "<div class=\"input-group input-group-lg\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Large</span>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">" +
				"\r\n</div>"
		},

		{
			title: "checkbox",
			code: "<div class=\"input-group\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <div class=\"input-group-text\">" +
				"\r\n      <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Text input with checkbox\">" +
				"\r\n</div>"
		},

		{
			title: "radio",
			code: "<div class=\"input-group\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <div class=\"input-group-text\">" +
				"\r\n    <input type=\"radio\" aria-label=\"Radio button for following text input\">" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">" +
				"\r\n</div>"
		},

		{
			title: "dropdown",
			code: "<div class=\"input-group\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>" +
				"\r\n    <div class=\"dropdown-menu\">" +
				"\r\n      <a class=\"dropdown-item\" href=\"#\">Action</a>" +
				"\r\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">" +
				"\r\n</div>"
		},

		{
			title: "segmented buttons",
			code: "<div class=\"input-group mb-3\">" +
				"\r\n  <div class=\"input-group-prepend\">" +
				"\r\n    <button type=\"button\" class=\"btn btn-primary\">Action</button>" +
				"\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n      <span class=\"sr-only\">Toggle Dropdown</span>" +
				"\r\n    </button>" +
				"\r\n    <div class=\"dropdown-menu\">" +
				"\r\n      <a class=\"dropdown-item\" href=\"#\">Action</a>" +
				"\r\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented dropdown button\">" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "custom forms",
	items: [{
			title: "custom-checkbox",
			code: "<div class=\"custom-control custom-checkbox\">" +
				"\r\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">" +
				"\r\n  <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>" +
				"\r\n</div>"
		},

		{
			title: "custom-radio",
			code: "<div class=\"custom-control custom-radio\">" +
				"\r\n  <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">" +
				"\r\n  <label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label>" +
				"\r\n</div>" +
				"\r\n<div class=\"custom-control custom-radio\">" +
				"\r\n  <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">" +
				"\r\n  <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>" +
				"\r\n</div>"
		},

		{
			title: "custom-select",
			code: "<select class=\"custom-select\">" +
				"\r\n  <option selected=\"\">Open this select menu</option>" +
				"\r\n  <option value=\"1\">One</option>" +
				"\r\n  <option value=\"2\">Two</option>" +
				"\r\n  <option value=\"3\">Three</option>" +
				"\r\n</select>"
		},

		{
			title: "custom-file",
			code: "<div class=\"custom-file\">" +
				"\r\n  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">" +
				"\r\n  <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>" +
				"\r\n</div>"
		},

		{
			title: "custom-range",
			code: "<label for=\"customRange1\">Basic range</label>" +
				"\r\n<input type=\"range\" class=\"custom-range\" id=\"customRange1\">" +
				"\r\n<label class=\"mt-3\" for=\"customRange3\">Range with steps</label>" +
				"\r\n<input type=\"range\" class=\"custom-range\" min=\"0\" max=\"5\" step=\"0.5\" id=\"customRange3\">"
		},
		{
			title: "Switches",
			code: "<div class=\"custom-control custom-switch\">" +
				"\r\n<input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">" +
				"\r\n<label class=\"custom-control-label\" for=\"customSwitch1\">Toggle this switch element</label>" +
				"\r\n</div>" +
				"\r\n<div class=\"custom-control custom-switch\">" +
				"\r\n<input type=\"checkbox\" class=\"custom-control-input\" disabled id=\"customSwitch2\">" +
				"\r\n<label class=\"custom-control-label\" for=\"customSwitch2\">Disabled switch element</label>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "grid",
	items: [{
			title: "container",
			code: "<div class=\"container\">" +
				"\r\n  <!-- Content here -->" +
				"\r\n</div>"
		},

		{
			title: "container-fluid",
			code: "<div class=\"container-fluid\">" +
				"\r\n  <!-- A fluid container that uses the full witdh -->" +
				"\r\n</div>"
		},

		{
			title: "row",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n  <!-- col- elements here -->" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-8\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-sm-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-sm-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-sm-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-sm-8\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-md-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-md-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-md-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-md-8\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-lg-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-lg-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-lg-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-lg-8\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-xl-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-xl-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-xl-2\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col-xl-8\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col",
			code: "<!-- Equal width cols, same on all screen sizes -->" +
				"\r\n<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col\">" +
				"\r\n      1 of 3" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col\">" +
				"\r\n      1 of 3" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col\">" +
				"\r\n      1 of 3" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "col-*",
			code: "<!-- responsive equal width cols, can be sm, md, lg, or xl -->" +
				"\r\n<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-sm\">1 of 3</div>" +
				"\r\n    <div class=\"col-sm\">1 of 3</div>" +
				"\r\n    <div class=\"col-sm\">1 of 3</div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "no-gutters",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row no-gutters\">" +
				"\r\n    <div class=\"col-12 col-sm-6 col-md-8\">.col-12 .col-sm-6 .col-md-8</div>" +
				"\r\n    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "row columns",
			code: "<div class=\"container\">" +
				"\r\n<div class=\"row row-cols-2\">" +
				"\r\n<div class=\"col\">Column</div>" +
				"\r\n<div class=\"col\">Column</div>" +
				"\r\n<div class=\"col\">Column</div>" +
				"\r\n<div class=\"col\">Column</div>" +
				"\r\n</div>" +
				"\r\n</div>"
		},

		{
			title: "col-auto",
			code: "<div class=\"row\">" +
				"\r\n<div class=\"col-auto\">Column</div>" +
				"\r\n<div class=\"col-auto\">Column</div>" +
				"\r\n<div class=\"col-auto\">Column</div>" +
				"\r\n<div class=\"col-auto\">Column</div>" +
				"\r\n</div>"
		},

		{
			title: "offset-*-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-3 offset-6\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n  <!-- This class can be used with responsive classes such as -md- as well: -->" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col-md-3 offset-md-6\">" +
				"\r\n      <!-- Content -->" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "order-#",
			code: "<div class=\"container\">" +
				"\r\n  <div class=\"row\">" +
				"\r\n    <div class=\"col\">" +
				"\r\n      First, but unordered" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col order-12\">" +
				"\r\n      Second, but last" +
				"\r\n    </div>" +
				"\r\n    <div class=\"col order-1\">" +
				"\r\n      Third, but first" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"col order-sm-3\">Ordered column</div>" +
				"\r\n<div class=\"col order-md-3\">Ordered column</div>" +
				"\r\n<div class=\"col order-lg-3\">Ordered column</div>" +
				"\r\n<div class=\"col order-xl-3\">Ordered column</div>"
		},

		{
			title: "nested columns",
			code: "<div class=\"row\">" +
				"\r\n  <div class=\"col-sm-9\">" +
				"\r\n    Level 1: .col-sm-9" +
				"\r\n    <div class=\"row\">" +
				"\r\n      <div class=\"col-8 col-sm-6\">" +
				"\r\n        Level 2: .col-8 .col-sm-6" +
				"\r\n      </div>" +
				"\r\n      <div class=\"col-4 col-sm-6\">" +
				"\r\n        Level 2: .col-4 .col-sm-6" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "images",
	items: [{
			title: "img-fluid",
			code: "<img src=\"/assets/img-cap.png\" class=\"img-fluid\" alt=\"Responsive image\">"
		},

		{
			title: "img-thumbnail",
			code: "<img class=\"img-thumbnail\" src=\"/assets/img-cap.png\" alt=\"Thumbnail image\">"
		}
	]
});

categories.push({
	title: "jumbotron",
	items: [{
			title: "jumbotron",
			code: "<div class=\"jumbotron\">" +
				"\r\n  <h1 class=\"display-3\">Hello, world!</h1>" +
				"\r\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for" +
				"\r\n                  calling extra attention to featured content or information.</p>" +
				"\r\n  <hr class=\"my-2\">" +
				"\r\n  <p>It uses utility classes for typography and" +
				"\r\n     spacing to space content out within the larger container.</p>" +
				"\r\n  <p class=\"lead\">" +
				"\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#!\" role=\"button\">Some action</a>" +
				"\r\n  </p>" +
				"\r\n</div>"
		},

		{
			title: "jumbotron-fluid",
			code: "<div class=\"jumbotron jumbotron-fluid\">" +
				"\r\n  <div class=\"container\">" +
				"\r\n    <h1 class=\"display-3\">Fluid jumbotron</h1>" +
				"\r\n    <p class=\"lead\">This is a modified jumbotron that occupies" +
				"\r\n                    the entire horizontal space of its parent.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "list group",
	items: [{
			title: "list-group",
			code: "<ul class=\"list-group\">" +
				"\r\n  <li class=\"list-group-item\">Morbi leo risus</li>" +
				"\r\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>" +
				"\r\n  <li class=\"list-group-item\">Vestibulum at eros</li>" +
				"\r\n</ul>"
		},
		{
			title: "list-group-horizontal",
			code: "<ul class=\"list-group list-group-horizontal\">" +
				"\r\n  <li class=\"list-group-item\">Morbi leo risus</li>" +
				"\r\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>" +
				"\r\n  <li class=\"list-group-item\">Vestibulum at eros</li>" +
				"\r\n</ul>"
		},

		{
			title: "list-group-item active",
			code: "<ul class=\"list-group\">" +
				"\r\n  <li class=\"list-group-item active\">Cras justo odio</li>" +
				"\r\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>" +
				"\r\n  <li class=\"list-group-item\">Morbi leo risus</li>" +
				"\r\n</ul>"
		},

		{
			title: "list-group-item disabled",
			code: "<ul class=\"list-group\">" +
				"\r\n  <li class=\"list-group-item disabled\">Cras justo odio</li>" +
				"\r\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>" +
				"\r\n  <li class=\"list-group-item\">Morbi leo risus</li>" +
				"\r\n</ul>"
		},

		{
			title: "list-group-item-action",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item active\">Cras justo odio</a>" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action\">Morbi leo risus</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-primary",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-primary\">Dapibus ac facilisis in</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-secondary",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-secondary\">Dapibus ac facilisis in</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-success",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-success\">Dapibus ac facilisis in</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-info",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-info\">Cras sit amet nibh libero</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-warning",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-warning\">Porta ac consectetur ac</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-danger",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-danger\">Vestibulum at eros</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-light",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-light\">Dapibus ac facilisis in</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group-item-dark",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action list-group-item-dark\">Dapibus ac facilisis in</a>" +
				"\r\n</div>"
		},

		{
			title: "list-group with badges",
			code: "<ul class=\"list-group\">" +
				"\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">" +
				"\r\n    Cras justo odio" +
				"\r\n    <span class=\"badge badge-primary badge-pill\">14</span>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">" +
				"\r\n    Dapibus ac facilisis in" +
				"\r\n    <span class=\"badge badge-primary badge-pill\">2</span>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">" +
				"\r\n    Morbi leo risus" +
				"\r\n    <span class=\"badge badge-primary badge-pill\">1</span>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "list-group with d-flex",
			code: "<div class=\"list-group\">" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">" +
				"\r\n    <div class=\"d-flex w-100 justify-content-between\">" +
				"\r\n      <h5 class=\"mb-1\">List group item heading</h5>" +
				"\r\n      <small>3 days ago</small>" +
				"\r\n    </div>" +
				"\r\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>" +
				"\r\n    <small>Donec id elit non mi porta.</small>" +
				"\r\n  </a>" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action flex-column align-items-start\">" +
				"\r\n    <div class=\"d-flex w-100 justify-content-between\">" +
				"\r\n      <h5 class=\"mb-1\">List group item heading</h5>" +
				"\r\n      <small class=\"text-muted\">3 days ago</small>" +
				"\r\n    </div>" +
				"\r\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>" +
				"\r\n    <small class=\"text-muted\">Donec id elit non mi porta.</small>" +
				"\r\n  </a>" +
				"\r\n  <a href=\"#!\" class=\"list-group-item list-group-item-action flex-column align-items-start\">" +
				"\r\n    <div class=\"d-flex w-100 justify-content-between\">" +
				"\r\n      <h5 class=\"mb-1\">List group item heading</h5>" +
				"\r\n      <small class=\"text-muted\">3 days ago</small>" +
				"\r\n    </div>" +
				"\r\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>" +
				"\r\n    <small class=\"text-muted\">Donec id elit non mi porta.</small>" +
				"\r\n  </a>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "media objects",
	items: [{
			title: "media",
			code: "<div class=\"media\">" +
				"\r\n  <img class=\"mr-3\" src=\"/assets/img-cap-64x64.png\" >" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0\">Media heading</h5>" +
				"\r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus." +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "nested media",
			code: "<div class=\"media\">" +
				"\r\n  <img class=\"d-flex mr-3\" src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0\">Media heading</h5>" +
				"\r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus." +
				"\r\n" +
				"\r\n    <div class=\"media mt-3\">" +
				"\r\n      <a class=\"d-flex pr-3\" href=\"#!\">" +
				"\r\n        <img src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n      </a>" +
				"\r\n      <div class=\"media-body\">" +
				"\r\n        <h5 class=\"mt-0\">Media heading</h5>" +
				"\r\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus." +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "d-flex align-self-start",
			code: "<div class=\"media\">" +
				"\r\n  <img class=\"d-flex align-self-start mr-3\" src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0\">Top-aligned media</h5>" +
				"\r\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>" +
				"\r\n    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "d-flex align-self-center",
			code: "<div class=\"media\">" +
				"\r\n  <img class=\"d-flex align-self-center mr-3\" src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0\">Center-aligned media</h5>" +
				"\r\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>" +
				"\r\n    <p class=\"mb-0\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "d-flex align-self-end",
			code: "<div class=\"media\">" +
				"\r\n  <img class=\"d-flex align-self-end mr-3\" src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0\">Bottom-aligned media</h5>" +
				"\r\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>" +
				"\r\n    <p class=\"mb-0\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "right aligned media",
			code: "<div class=\"media\">" +
				"\r\n  <div class=\"media-body\">" +
				"\r\n    <h5 class=\"mt-0 mb-1\">Media object</h5>" +
				"\r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus." +
				"\r\n  </div>" +
				"\r\n  <img class=\"d-flex ml-3\" src=\"/assets/img-cap-64x64.png\" alt=\"Generic placeholder image\">" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "modal",
	items: [{
			title: "modal",
			code: "<!-- Button trigger modal -->" +
				"\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">" +
				"\r\n  Launch demo modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<!-- Modal -->" +
				"\r\n<div class=\"modal\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog\" role=\"document\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      <div class=\"modal-header\">" +
				"\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>" +
				"\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
				"\r\n          <span aria-hidden=\"true\">×</span>" +
				"\r\n        </button>" +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-body\">" +
				"\r\n        ..." +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-footer\">" +
				"\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
				"\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "modal-dialog-centered",
			code: "<!-- Button trigger modal -->" +
				"\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">" +
				"\r\n  Launch centered demo modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<!-- Modal -->" +
				"\r\n<div class=\"modal\" id=\"exampleModalVertical\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalVerticalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog\" role=\"document\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      <div class=\"modal-header\">" +
				"\r\n        <h5 class=\"modal-title\" id=\"exampleModalVerticalLabel\">Modal title</h5>" +
				"\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
				"\r\n          <span aria-hidden=\"true\">×</span>" +
				"\r\n        </button>" +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-body\">" +
				"\r\n        ..." +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-footer\">" +
				"\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
				"\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "modal fade",
			code: "<!-- Button trigger modal -->" +
				"\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal3\">" +
				"\r\n  Launch demo modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<!-- Modal -->" +
				"\r\n<div class=\"modal fade\" id=\"exampleModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModal3Label\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog\" role=\"document\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      <div class=\"modal-header\">" +
				"\r\n        <h5 class=\"modal-title\" id=\"exampleModal3Label\">Modal title</h5>" +
				"\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
				"\r\n          <span aria-hidden=\"true\">×</span>" +
				"\r\n        </button>" +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-body\">" +
				"\r\n        ..." +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-footer\">" +
				"\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
				"\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "modal-xl",
			code: "<!-- Extra Large modal -->" +
				"\r\n<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-xl\">" +
				"\r\n  Extra Large modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<div class=\"modal fade bd-example-modal-xl\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog modal-xl\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      ..." +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "modal-lg",
			code: "<!-- Large modal -->" +
				"\r\n<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">" +
				"\r\n  Large modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog modal-lg\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      ..." +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},

		{
			title: "modal-sm",
			code: "<!-- Small modal -->" +
				"\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">" +
				"\r\n  Small modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog modal-sm\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      ..." +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		},
		{
			title: "modal dialog scrollable",
			code: "<!-- Button trigger modal -->" +
				"\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">" +
				"\r\n  Launch demo modal" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<!-- Modal -->" +
				"\r\n<div class=\"modal\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">" +
				"\r\n  <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">" +
				"\r\n    <div class=\"modal-content\">" +
				"\r\n      <div class=\"modal-header\">" +
				"\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>" +
				"\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
				"\r\n          <span aria-hidden=\"true\">×</span>" +
				"\r\n        </button>" +
				"\r\n      </div>" +
				"\r\n      <div class=\"modal-body\">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>" +
				"\r\n      <div class=\"modal-footer\">" +
				"\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
				"\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>" +
				"\r\n      </div>" +
				"\r\n    </div>" +
				"\r\n  </div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "navs",
	items: [{
			title: "ul.nav",
			code: "<ul class=\"nav\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link disabled\" href=\"#!\">Disabled</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav.nav",
			code: "<nav class=\"nav\">" +
				"\r\n  <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  <a class=\"nav-link disabled\" href=\"#!\">Disabled</a>" +
				"\r\n</nav>"
		},

		{
			title: "nav justify-content-center",
			code: "<ul class=\"nav justify-content-center\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav flex-column",
			code: "<nav class=\"nav flex-column\">" +
				"\r\n  <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n</nav>"
		},

		{
			title: "nav-tabs",
			code: "<ul class=\"nav nav-tabs\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav-pills",
			code: "<ul class=\"nav nav-pills\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link disabled\" href=\"#!\">Disabled</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav-fill",
			code: "<ul class=\"nav nav-pills nav-fill\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Longer nav link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav-justified",
			code: "<ul class=\"nav nav-pills nav-justified\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Longer nav link</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav with flex utils",
			code: "<nav class=\"nav nav-pills flex-column flex-sm-row\">" +
				"\r\n  <a class=\"flex-sm-fill text-sm-center nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  <a class=\"flex-sm-fill text-sm-center nav-link\" href=\"#!\">Link</a>" +
				"\r\n  <a class=\"flex-sm-fill text-sm-center nav-link\" href=\"#!\">Link</a>" +
				"\r\n</nav>"
		},

		{
			title: "nav-tabs with dropdown",
			code: "<ul class=\"nav nav-tabs\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item dropdown\">" +
				"\r\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#!\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
				"\r\n       Dropdown</a>" +
				"\r\n    <div class=\"dropdown-menu\">" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n    </div>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		},

		{
			title: "nav-pills with dropdown",
			code: "<ul class=\"nav nav-pills\">" +
				"\r\n  <li class=\"nav-item\">" +
				"\r\n    <a class=\"nav-link active\" href=\"#!\">Active</a>" +
				"\r\n  </li>" +
				"\r\n  <li class=\"nav-item dropdown\">" +
				"\r\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#!\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>" +
				"\r\n    <div class=\"dropdown-menu\">" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Action</a>" +
				"\r\n      <a class=\"dropdown-item\" href=\"#!\">Another action</a>" +
				"\r\n    </div>" +
				"\r\n  </li>" +
				"\r\n</ul>"
		}
	]
});


categories.push({
	title: "navbar",
	items: [{
			title: "navbar",
			code: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">" +
				"\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>" +
				"\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
				"\r\n    <span class=\"navbar-toggler-icon\"></span>" +
				"\r\n  </button>" +
				"\r\n" +
				"\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">" +
				"\r\n    <ul class=\"navbar-nav mr-auto\">" +
				"\r\n      <li class=\"nav-item active\">" +
				"\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>" +
				"\r\n      </li>" +
				"\r\n      <li class=\"nav-item\">" +
				"\r\n        <a class=\"nav-link\" href=\"#\">Link</a>" +
				"\r\n      </li>" +
				"\r\n      <li class=\"nav-item\">" +
				"\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>" +
				"\r\n      </li>" +
				"\r\n    </ul>" +
				"\r\n    <form class=\"form-inline my-2 my-lg-0\">" +
				"\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">" +
				"\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>" +
				"\r\n    </form>" +
				"\r\n  </div>" +
				"\r\n</nav>"
		},

		{
			title: "navbar-brand",
			code: "<nav class=\"navbar navbar-light bg-light\">" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Navbar</a>" +
				"\r\n</nav>"
		},

		{
			title: "navbar with form",
			code: "<nav class=\"navbar navbar-light bg-light\">" +
				"\r\n  <form class=\"form-inline\">" +
				"\r\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">" +
				"\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>" +
				"\r\n  </form>" +
				"\r\n</nav>"
		},

		{
			title: "navbar-text",
			code: "<nav class=\"navbar navbar-light bg-light\">" +
				"\r\n  <span class=\"navbar-text\">" +
				"\r\n    Navbar text with an inline element" +
				"\r\n  </span>" +
				"\r\n</nav>"
		},

		{
			title: "navbar-dark bg-dark",
			code: "<nav class=\"navbar navbar-dark bg-dark\">" +
				"\r\n  <!-- Navbar content -->" +
				"\r\n</nav>" +
				"\r\n" +
				"\r\n<nav class=\"navbar navbar-dark bg-primary\">" +
				"\r\n  <!-- Navbar content -->" +
				"\r\n</nav>"
		},

		{
			title: "navbar-light",
			code: "<nav class=\"navbar navbar-light\" style=\"background-color: #e3f2fd;\">" +
				"\r\n  <!-- Navbar content -->" +
				"\r\n</nav>"
		},

		{
			title: "navbar fixed-top",
			code: "<nav class=\"navbar fixed-top navbar-dark bg-primary\">" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Fixed top</a>" +
				"\r\n</nav>"
		},

		{
			title: "navbar fixed-bottom",
			code: "<nav class=\"navbar fixed-bottom navbar-dark bg-primary\">" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Fixed bottom</a>" +
				"\r\n</nav>"
		},

		{
			title: "navbar sticky-top",
			code: "<nav class=\"navbar sticky-top navbar-dark bg-primary\">" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Sticky top</a>" +
				"\r\n</nav>"
		},

		{
			title: "collapse navbar-collapse",
			code: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">" +
				"\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
				"\r\n    <span class=\"navbar-toggler-icon\"></span>" +
				"\r\n  </button>" +
				"\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">" +
				"\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">" +
				"\r\n      <li class=\"nav-item active\">" +
				"\r\n        <a class=\"nav-link\" href=\"#!\">Home <span class=\"sr-only\">(current)</span></a>" +
				"\r\n      </li>" +
				"\r\n      <li class=\"nav-item\">" +
				"\r\n        <a class=\"nav-link disabled\" href=\"#!\">Disabled</a>" +
				"\r\n      </li>" +
				"\r\n    </ul>" +
				"\r\n  </div>" +
				"\r\n</nav>"
		},

		{
			title: "navbar-toggler",
			code: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">" +
				"\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
				"\r\n    <span class=\"navbar-toggler-icon\"></span>" +
				"\r\n  </button>" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Navbar</a>" +
				"\r\n" +
				"\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">" +
				"\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">" +
				"\r\n      <li class=\"nav-item active\">" +
				"\r\n        <a class=\"nav-link\" href=\"#!\">Home <span class=\"sr-only\">(current)</span></a>" +
				"\r\n      </li>" +
				"\r\n      <li class=\"nav-item\">" +
				"\r\n        <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n      </li>" +
				"\r\n    </ul>" +
				"\r\n  </div>" +
				"\r\n</nav>"
		},

		{
			title: "navbar-expand-lg",
			code: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">" +
				"\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
				"\r\n    <span class=\"navbar-toggler-icon\"></span>" +
				"\r\n  </button>" +
				"\r\n  <a class=\"navbar-brand\" href=\"#!\">Navbar</a>" +
				"\r\n" +
				"\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">" +
				"\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">" +
				"\r\n      <li class=\"nav-item active\">" +
				"\r\n        <a class=\"nav-link\" href=\"#!\">Home <span class=\"sr-only\">(current)</span></a>" +
				"\r\n      </li>" +
				"\r\n      <li class=\"nav-item\">" +
				"\r\n        <a class=\"nav-link\" href=\"#!\">Link</a>" +
				"\r\n      </li>" +
				"\r\n    </ul>" +
				"\r\n  </div>" +
				"\r\n</nav>"
		}
	]
});

categories.push({
	title: "pagination",
	items: [{
			title: "pagination",
			code: "<nav aria-label=\"Page navigation example\">" +
				"\r\n  <ul class=\"pagination\">" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" aria-label=\"Previous\">" +
				"\r\n        <span aria-hidden=\"true\">«</span>" +
				"\r\n        <span class=\"sr-only\">Previous</span>" +
				"\r\n      </a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" aria-label=\"Next\">" +
				"\r\n        <span aria-hidden=\"true\">»</span>" +
				"\r\n        <span class=\"sr-only\">Next</span>" +
				"\r\n      </a>" +
				"\r\n    </li>" +
				"\r\n  </ul>" +
				"\r\n</nav>"
		},

		{
			title: "page-item disabled",
			code: "<nav aria-label=\"...\">" +
				"\r\n  <ul class=\"pagination\">" +
				"\r\n    <li class=\"page-item disabled\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>" +
				"\r\n    <li class=\"page-item active\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">2 <span class=\"sr-only\">(current)</span></a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">Next</a>" +
				"\r\n    </li>" +
				"\r\n  </ul>" +
				"\r\n</nav>"
		},

		{
			title: "page-item active",
			code: "<nav aria-label=\"...\">" +
				"\r\n  <ul class=\"pagination\">" +
				"\r\n    <li class=\"page-item disabled\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>" +
				"\r\n    <li class=\"page-item active\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">2 <span class=\"sr-only\">(current)</span></a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">Next</a>" +
				"\r\n    </li>" +
				"\r\n  </ul>" +
				"\r\n</nav>"
		},

		{
			title: "pagination-lg",
			code: "<nav aria-label=\"...\">" +
				"\r\n  <ul class=\"pagination pagination-lg\">" +
				"\r\n    <li class=\"page-item disabled\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">Next</a>" +
				"\r\n    </li>" +
				"\r\n  </ul>" +
				"\r\n</nav>"
		},

		{
			title: "pagination-sm",
			code: "<nav aria-label=\"...\">" +
				"\r\n  <ul class=\"pagination pagination-sm\">" +
				"\r\n    <li class=\"page-item disabled\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>" +
				"\r\n    </li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>" +
				"\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>" +
				"\r\n    <li class=\"page-item\">" +
				"\r\n      <a class=\"page-link\" href=\"#!\">Next</a>" +
				"\r\n    </li>" +
				"\r\n  </ul>" +
				"\r\n</nav>"
		}
	]
});


categories.push({
	title: "popover",
	items: [{
			title: "popovers",
			code: "<!-- Note: A custom script is used to activate popovers:" +
				"\r\n" +
				"\r\n$(function(){" +
				"\r\n  $('[data-toggle=\"popover\"]').popover()" +
				"\r\n});" +
				"\r\n-->" +
				"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">" +
				"\r\n  Popover on top" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">" +
				"\r\n  Popover on right" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">" +
				"\r\n  Popover on bottom" +
				"\r\n</button>" +
				"\r\n" +
				"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">" +
				"\r\n  Popover on left" +
				"\r\n</button>"
		},

		{
			title: "dismissible popover",
			code: "<!-- Note: A custom script is used to activate popovers:" +
				"\r\n" +
				"\r\n$(function(){" +
				"\r\n  $('[data-toggle=\"popover\"]').popover()" +
				"\r\n});" +
				"\r\n-->" +
				"\r\n<a tabindex=\"0\" class=\"btn btn-lg btn-danger\" role=\"button\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"Dismissible popover\" data-content=\"Click anywhere to dismiss this popover\">" +
				"\r\n   Dismissible popover" +
				"\r\n</a>"
		}
	]
});

categories.push({
	title: "progress",
	items: [{
			title: "progress",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 41%\" aria-valuenow=\"41\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 41%\" aria-valuenow=\"41\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar with label",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar with height",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%; height: 35px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar bg-success",
			code: "<div class=\"progress\"> <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-secondary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 38%\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 62%\" aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-light\" role=\"progressbar\" style=\"width: 88%\" aria-valuenow=\"88\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar bg-dark\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>"
		},

		{
			title: "multiple progress-bar",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n  <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n  <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar-striped",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>" +
				"\r\n</div>"
		},

		{
			title: "progress-bar-striped bg-success",
			code: "<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-primary\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-secondary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 38%\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\" style=\"width: 62%\" aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-light\" role=\"progressbar\" style=\"width: 88%\" aria-valuenow=\"88\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>" +
				"\r\n<div class=\"progress\"> <div class=\"progress-bar progress-bar-striped bg-dark\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div> </div>"
		},

		{
			title: "progress-bar-animated",
			code: "<div class=\"progress\">" +
				"\r\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\"></div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "scrollspy",
	items: [{
		title: "data-spy",
		code: "<!-- Custom css that makes this example work like it does: -->" +
			"\r\n<style type=\"text/css\" scoped=\"\">" +
			"\r\n.scrollspy-example {" +
			"\r\n    position: relative;" +
			"\r\n    height: 200px;" +
			"\r\n    margin-top: .5rem;" +
			"\r\n    overflow: auto;" +
			"\r\n}" +
			"\r\n</style>" +
			"\r\n" +
			"\r\n<!-- Actual scrollspy markup: -->" +
			"\r\n<nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">" +
			"\r\n  <h3 class=\"navbar-brand\">Project Name</h3>" +
			"\r\n  <ul class=\"nav nav-pills\">" +
			"\r\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#verse1\">Verse 1</a></li>" +
			"\r\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#verse2\">Verse 2</a></li>" +
			"\r\n  </ul>" +
			"\r\n</nav>" +
			"\r\n<div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\" class=\"scrollspy-example\">" +
			"\r\n  <h4 id=\"verse1\">Verse 1</h4>" +
			"\r\n  <p>May <br> the <br> gods <br> forgive <br> me.</p>" +
			"\r\n  <h4 id=\"verse2\">Verse 2</h4>" +
			"\r\n  <p>For <br> this <br> rampant <br> abuse <br> of <br> br-tags.</p>" +
			"\r\n</div>"
	}]
});

categories.push({
	title: "spinners",
	items: [{
			title: "Border Spinner",
			code: "<div class=\"spinner-border\" role=\"status\">" +
				"\r\n	<span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>"
		},
		{
			title: "Border Spinner Color",
			code: "<div class=\"spinner-border text-primary\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-secondary\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-success\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-danger\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-warning\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-info\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-light\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-border text-dark\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>"
		},
		{
			title: "Growing Spinner",
			code: "<div class=\"spinner-grow\" role=\"status\">" +
				"\r\n	<span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>"
		},
		{
			title: "Growing Spinner Color",
			code: "<div class=\"spinner-grow text-primary\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-secondary\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-success\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-danger\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-warning\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-info\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-light\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>" +
				"\r\n<div class=\"spinner-grow text-dark\" role=\"status\">" +
				"\r\n <span class=\"sr-only\">Loading...</span>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "tables",
	items: [{
			title: "table",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table thead-light",
			code: "<table class=\"table\">" +
				"\r\n  <thead class=\"thead-light\">" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table thead-dark",
			code: "<table class=\"table\">" +
				"\r\n  <thead class=\"thead-dark\">" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-striped",
			code: "<table class=\"table table-striped\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-bordered",
			code: "<table class=\"table table-bordered\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-borderless",
			code: "<table class=\"table table-borderless\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-hover",
			code: "<table class=\"table table-hover\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-sm",
			code: "<table class=\"table table-hover\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-responsive",
			code: "<table class=\"table table-responsive\">" +
				"\r\n<!-- table content here -->" +
				"\r\n</table>" +
				"\r\n" +
				"\r\n<table class=\"table table-sm-responsive\"><!-- ... --></table>" +
				"\r\n<table class=\"table table-md-responsive\"><!-- ... --></table>" +
				"\r\n<table class=\"table table-lg-responsive\"><!-- ... --></table>" +
				"\r\n<table class=\"table table-xl-responsive\"><!-- ... --></table>"
		},

		{
			title: "table-reflow",
			code: "<table class=\"table table-reflow\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>Table heading</th>" +
				"\r\n      <th>Table heading</th>" +
				"\r\n      <th>Table heading</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">3</th>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n      <td>Table cell</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-active",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-active\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-primary",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-primary\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-secondary",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-secondary\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-success",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-success\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-info",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-info\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-warning",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-warning\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-danger",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-danger\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-light",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-light\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		},

		{
			title: "table-dark",
			code: "<table class=\"table\">" +
				"\r\n  <thead>" +
				"\r\n    <tr>" +
				"\r\n      <th>#</th>" +
				"\r\n      <th>First Name</th>" +
				"\r\n      <th>Last Name</th>" +
				"\r\n    </tr>" +
				"\r\n  </thead>" +
				"\r\n  <tbody>" +
				"\r\n    <tr class=\"table-dark\">" +
				"\r\n      <th scope=\"row\">1</th>" +
				"\r\n      <td>Mark</td>" +
				"\r\n      <td>Otto</td>" +
				"\r\n    </tr>" +
				"\r\n    <tr>" +
				"\r\n      <th scope=\"row\">2</th>" +
				"\r\n      <td>Jacob</td>" +
				"\r\n      <td>Thornton</td>" +
				"\r\n    </tr>" +
				"\r\n  </tbody>" +
				"\r\n</table>"
		}
	]
});

categories.push({
	title: "toasts",
	items: [{
			title: "toast basic",
			code: "<!-- You need some javascript to enable toast, visit original documentation site : https://getbootstrap.com/docs/4.2/components/toasts/ -->" +
				"\r\n<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">" +
				"\r\n	<div class=\"toast-header\">" +
				"\r\n		<img src=\"../assets/img-cap-20x20.png\" class=\"rounded mr-2\" alt=\"...\">" +
				"\r\n		<strong class=\"mr-auto\">Bootstrap</strong>" +
				"\r\n		<small>11 mins ago</small>" +
				"\r\n		<button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">" +
				"\r\n		<span aria-hidden=\"true\">&times;</span>" +
				"\r\n		</button>" +
				"\r\n	</div>" +
				"\r\n	<div class=\"toast-body\">Hello,world!This is a toast message.</div>" +
				"\r\n</div>"
		},
		{
			title: "toast stack",
			code: "<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">" +
				"\r\n	<div class=\"toast-header\">" +
				"\r\n		<img src=\"../assets/img-cap-20x20.png\" class=\"rounded mr-2\" alt=\"...\">" +
				"\r\n		<strong class=\"mr-auto\">Bootstrap</strong>" +
				"\r\n		<small>just now</small>" +
				"\r\n		<button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">" +
				"\r\n		<span aria-hidden=\"true\">&times;</span>" +
				"\r\n		</button>" +
				"\r\n	</div>" +
				"\r\n	<div class=\"toast-body\">Hello,world!This is a toast message.</div>" +
				"\r\n</div>" +
				"<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">" +
				"\r\n	<div class=\"toast-header\">" +
				"\r\n		<img src=\"../assets/img-cap-20x20.png\" class=\"rounded mr-2\" alt=\"...\">" +
				"\r\n		<strong class=\"mr-auto\">Bootstrap</strong>" +
				"\r\n		<small>2 mins ago</small>" +
				"\r\n		<button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">" +
				"\r\n		<span aria-hidden=\"true\">&times;</span>" +
				"\r\n		</button>" +
				"\r\n	</div>" +
				"\r\n	<div class=\"toast-body\">Hello,world!This is a toast message.</div>" +
				"\r\n</div>"
		}
	]
});

categories.push({
	title: "tooltips",
	items: [{
		title: "tooltip",
		code: "<!-- Note: A custom script is used to activate tooltips:" +
			"\r\n" +
			"\r\n$(function(){" +
			"\r\n  $('[data-toggle=\"tooltip\"]').tooltip();" +
			"\r\n});" +
			"\r\n-->" +
			"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\"> Tooltip on top" +
			"\r\n</button>" +
			"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"> Tooltip on right" +
			"\r\n</button>" +
			"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\"> Tooltip on bottom" +
			"\r\n</button>" +
			"\r\n<button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\"> Tooltip on left" +
			"\r\n</button>"
	}]
});

categories.push({
	title: "typography",
	items: [{
			title: "display-*",
			code: "<h1 class=\"display-1\">Display 1</h1>" +
				"\r\n<h1 class=\"display-2\">Display 2</h1>" +
				"\r\n<h1 class=\"display-3\">Display 3</h1>" +
				"\r\n<h1 class=\"display-4\">Display 4</h1>"
		},

		{
			title: "lead",
			code: "<p class=\"lead\">" +
				"\r\n  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." +
				"\r\n</p>"
		},

		{
			title: "blockquote",
			code: "<blockquote class=\"blockquote\">" +
				"\r\n  <p class=\"mb-0\">" +
				"\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				"\r\n  </p>" +
				"\r\n</blockquote>"
		},

		{
			title: "blockquote-footer",
			code: "<blockquote class=\"blockquote\">" +
				"\r\n  <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>" +
				"\r\n  <footer class=\"blockquote-footer\">Someone famous in" +
				"\r\n    <cite title=\"Source Title\">Source Title</cite>" +
				"\r\n  </footer>" +
				"\r\n</blockquote>"
		},

		{
			title: "blockquote-reverse",
			code: "<blockquote class=\"blockquote blockquote-reverse\">" +
				"\r\n  <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>" +
				"\r\n  <footer class=\"blockquote-footer\">Someone famous in" +
				"\r\n    <cite title=\"Source Title\">Source Title</cite>" +
				"\r\n  </footer>" +
				"\r\n</blockquote>"
		},

		{
			title: "list-unstyled",
			code: "<ul class=\"list-unstyled\">" +
				"\r\n  <li>Integer molestie lorem at massa</li>" +
				"\r\n  <li>Facilisis in pretium nisl aliquet</li>" +
				"\r\n  <li>Nulla volutpat aliquam velit" +
				"\r\n    <ul>" +
				"\r\n      <li>Phasellus iaculis neque</li>" +
				"\r\n      <li>Purus sodales ultricies</li>" +
				"\r\n    </ul>" +
				"\r\n  </li>" +
				"\r\n  <li>Faucibus porta lacus fringilla vel</li>" +
				"\r\n  <li>Eget porttitor lorem</li>" +
				"\r\n</ul>"
		},

		{
			title: "list-inline",
			code: "<ul class=\"list-inline\">" +
				"\r\n  <li class=\"list-inline-item\">Lorem ipsum</li>" +
				"\r\n  <li class=\"list-inline-item\">Phasellus iaculis</li>" +
				"\r\n  <li class=\"list-inline-item\">Nulla volutpat</li>" +
				"\r\n</ul>"
		},

		{
			title: "dl-horizontal",
			code: "<dl class=\"dl-horizontal\">" +
				"\r\n  <dt class=\"col-sm-3\">Description lists</dt>" +
				"\r\n  <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>" +
				"\r\n" +
				"\r\n  <dt class=\"col-sm-3\">Euismod</dt>" +
				"\r\n  <dd class=\"col-sm-9\">Vestibulum  felis euismod semper eget lacinia odio sem nec elit.</dd>" +
				"\r\n  <dd class=\"col-sm-9 offset-sm-3\">Donec id elit non mi porta gravida at eget metus.</dd>" +
				"\r\n" +
				"\r\n  <dt class=\"col-sm-3\">Malesuada porta</dt>" +
				"\r\n  <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>" +
				"\r\n" +
				"\r\n  <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>" +
				"\r\n  <dd class=\"col-sm-9\">Fusce dapibmodo, nibh, ut fermentum massa justo sit amet risus.</dd>" +
				"\r\n</dl>"
		}
	]
});

categories.push({
	title: "utility: borders",
	items: [{
			title: "border",
			code: "<span class=\"border border-dark\">Hello World</span>"
		},

		{
			title: "border-*-0",
			code: "<span class=\"p-1 border border-primary border-0\">Hello World</span>" +
				"\r\n<span class=\"p-1 border border-primary border-top-0\">Hello World</span>" +
				"\r\n<span class=\"p-1 border border-primary border-right-0\">Hello World</span>" +
				"\r\n<span class=\"p-1 border border-primary border-bottom-0\">Hello World</span>" +
				"\r\n<span class=\"p-1 border border-primary border-left-0\">Hello World</span>"
		},

		{
			title: "border-primary",
			code: "<span class=\"border border-primary\">Hello World</span>"
		},

		{
			title: "border-secondary",
			code: "<span class=\"border border-secondary\">Hello World</span>"
		},

		{
			title: "border-success",
			code: "<span class=\"border border-success\">Hello World</span>"
		},

		{
			title: "border-danger",
			code: "<span class=\"border border-danger\">Hello World</span>"
		},

		{
			title: "border-warning",
			code: "<span class=\"border border-warning\">Hello World</span>"
		},

		{
			title: "border-info",
			code: "<span class=\"border border-info\">Hello World</span>"
		},

		{
			title: "border-light",
			code: "<span class=\"border border-light\">Hello World</span>"
		},

		{
			title: "border-dark",
			code: "<span class=\"border border-dark\">Hello World</span>"
		},

		{
			title: "border-white",
			code: "<span class=\"border border-white\">Hello World</span>"
		},

		{
			title: "rounded-sm",
			code: "<img class=\"rounded-sm\" src=\"/assets/img-cap.png\" alt=\"Rounded image\">"
		},

		{
			title: "rounded",
			code: "<img class=\"rounded\" src=\"/assets/img-cap.png\" alt=\"Rounded image\">"
		},

		{
			title: "rounded-lg",
			code: "<img class=\"rounded-lg\" src=\"/assets/img-cap.png\" alt=\"Rounded image\">"
		},

		{
			title: "rounded-circle",
			code: "<img class=\"rounded-circle\" src=\"/assets/img-cap.png\" alt=\"Circle image\">"
		},

		{
			title: "rounded-top",
			code: "<img class=\"rounded-top\" src=\"/assets/img-cap.png\" alt=\"image\">"
		},

		{
			title: "rounded-right",
			code: "<img class=\"rounded-right\" src=\"/assets/img-cap.png\" alt=\"image\">"
		},

		{
			title: "rounded-bottom",
			code: "<img class=\"rounded-bottom\" src=\"/assets/img-cap.png\" alt=\"image\">"
		},

		{
			title: "rounded-left",
			code: "<img class=\"rounded-left\" src=\"/assets/img-cap.png\" alt=\"image\">"
		},

		{
			title: "rounded-pill",
			code: "<img class=\"rounded-pill\" src=\"/assets/img-cap.png\" alt=\"image\">"
		},

		{
			title: "rounded-0",
			code: "<img class=\"rounded-0\" src=\"/assets/img-cap.png\" alt=\"image\">"
		}
	]
});

categories.push({
	title: "utility: colors",
	items: [{
			title: "bg-primary",
			code: "<div class=\"bg-primary text-white\">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>"
		},

		{
			title: "bg-secondary",
			code: "<div class=\"bg-secondary text-white\">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>"
		},

		{
			title: "bg-success",
			code: "<div class=\"bg-success text-white\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>"
		},

		{
			title: "bg-info",
			code: "<div class=\"bg-info text-white\">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>"
		},

		{
			title: "bg-warning",
			code: "<div class=\"bg-warning text-white\">Etiam porta sem malesuada magna mollis euismod.</div>"
		},

		{
			title: "bg-danger",
			code: "<div class=\"bg-danger text-white\">Donec ullamcorper nulla non metus auctor fringilla.</div>"
		},

		{
			title: "bg-light",
			code: "<div class=\"bg-light\">Cras mattis consectetur purus sit amet fermentum.</div>"
		},

		{
			title: "bg-dark",
			code: "<div class=\"bg-dark text-white\">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>"
		},

		{
			title: "bg-white",
			code: "<div class=\"bg-white\">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>"
		},

		{
			title: "text-primary",
			code: "<p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
		},

		{
			title: "text-secondary",
			code: "<p class=\"text-secondary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
		},

		{
			title: "text-success",
			code: "<p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>"
		},

		{
			title: "text-info",
			code: "<p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>"
		},

		{
			title: "text-warning",
			code: "<p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>"
		},

		{
			title: "text-danger",
			code: "<p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>"
		},

		{
			title: "text-light",
			code: "<p class=\"text-light\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
		},

		{
			title: "text-dark",
			code: "<p class=\"text-dark\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
		},

		{
			title: "text-white",
			code: "<p class=\"text-white\">Donec ullamcorper nulla non metus auctor fringilla.</p>"
		}
	]
});

categories.push({
	title: "utility: display",
	items: [{
			title: "d-*-block",
			code: "<span class=\"d-block bg-primary\">d-block</span>" +
				"\r\n<span class=\"d-sm-block bg-primary\">d-sm-block</span>" +
				"\r\n<span class=\"d-md-block bg-primary\">d-md-block</span>" +
				"\r\n<span class=\"d-lg-block bg-primary\">d-lg-block</span>" +
				"\r\n<span class=\"d-xl-block bg-primary\">d-xl-block</span>"
		},

		{
			title: "d-*-flex",
			code: "<div class=\"d-flex bg-primary\">d-flex</div>" +
				"\r\n<span class=\"d-sm-flex bg-primary\">d-sm-flex</span>" +
				"\r\n<span class=\"d-md-flex bg-primary\">d-md-flex</span>" +
				"\r\n<span class=\"d-lg-flex bg-primary\">d-lg-flex</span>" +
				"\r\n<span class=\"d-xl-flex bg-primary\">d-xl-flex</span>"
		},

		{
			title: "d-*-inline",
			code: "<div class=\"d-inline bg-primary\">d-inline</div>" +
				"\r\n<div class=\"d-sm-inline bg-primary\">d-sm-inline</div>" +
				"\r\n<div class=\"d-md-inline bg-primary\">d-md-inline</div>" +
				"\r\n<div class=\"d-lg-inline bg-primary\">d-lg-inline</div>" +
				"\r\n<div class=\"d-xl-inline bg-primary\">d-xl-inline</div>"
		},

		{
			title: "d-*-inline-block",
			code: "<div class=\"d-inline-block bg-primary\">d-inline-block</div>" +
				"\r\n<span class=\"d-sm-inline-block bg-primary\">d-sm-inline-block</span>" +
				"\r\n<span class=\"d-md-inline-block bg-primary\">d-md-inline-block</span>" +
				"\r\n<span class=\"d-lg-inline-block bg-primary\">d-lg-inline-block</span>" +
				"\r\n<span class=\"d-xl-inline-block bg-primary\">d-xl-inline-block</span>"
		},

		{
			title: "d-*-inline-flex",
			code: "<div class=\"d-inline-flex bg-primary\">d-inline-flex</div>" +
				"\r\n<span class=\"d-sm-inline-flex bg-primary\">d-sm-inline-flex</span>" +
				"\r\n<span class=\"d-md-inline-flex bg-primary\">d-md-inline-flex</span>" +
				"\r\n<span class=\"d-lg-inline-flex bg-primary\">d-lg-inline-flex</span>" +
				"\r\n<span class=\"d-xl-inline-flex bg-primary\">d-xl-inline-flex</span>"
		},

		{
			title: "d-*-none",
			code: "<div class=\"d-none\">d-none\"&gt;This</div>" +
				"\r\n<span class=\"d-sm-none bg-primary\">d-sm-none</span>" +
				"\r\n<span class=\"d-md-none bg-primary\">d-md-none</span>" +
				"\r\n<span class=\"d-lg-none bg-primary\">d-lg-none</span>" +
				"\r\n<span class=\"d-xl-none bg-primary\">d-xl-none</span>"
		},

		{
			title: "d-*-table",
			code: "<div class=\"d-table bg-primary\">d-table</div>" +
				"\r\n<span class=\"d-sm-table bg-primary\">d-sm-table</span>" +
				"\r\n<span class=\"d-md-table bg-primary\">d-md-table</span>" +
				"\r\n<span class=\"d-lg-table bg-primary\">d-lg-table</span>" +
				"\r\n<span class=\"d-xl-table bg-primary\">d-xl-table</span>"
		},

		{
			title: "d-*-table-cell",
			code: "<div class=\"d-table-cell bg-primary\">d-table-cell</div>" +
				"\r\n<span class=\"d-sm-table-cell bg-primary\">d-sm-table-cell</span>" +
				"\r\n<span class=\"d-md-table-cell bg-primary\">d-md-table-cell</span>" +
				"\r\n<span class=\"d-lg-table-cell bg-primary\">d-lg-table-cell</span>" +
				"\r\n<span class=\"d-xl-table-cell bg-primary\">d-xl-table-cell</span>"
		},

		{
			title: "d-print-*",
			code: "<div class=\"d-print-none\">Doesn't display when printing</div>" +
				"\r\n<div class=\"d-print-block\">Displays as block when printing</div>" +
				"\r\n<div class=\"d-print-inline\">Displays as inline when printing</div>" +
				"\r\n<div class=\"d-print-inline-block\">Displays as inline-block when printing</div>"
		}
	]
});

categories.push({
	title: "utility: flexbox",
	items: [{
			title: "flex-*-column",
			code: "<div class=\"d-flex flex-column\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex flex-sm-column\">...</div>" +
				"\r\n<div class=\"d-flex flex-md-column\">...</div>" +
				"\r\n<div class=\"d-flex flex-lg-column\">...</div>" +
				"\r\n<div class=\"d-flex flex-xl-column\">...</div>"
		},

		{
			title: "flex-*-column-reverse",
			code: "<div class=\"d-flex flex-column-reverse\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex flex-sm-column-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-md-column-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-lg-column-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-xl-column-reverse\">...</div>"
		},

		{
			title: "flex-*-row",
			code: "<div class=\"d-flex flex-row\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex flex-sm-row\">...</div>" +
				"\r\n<div class=\"d-flex flex-md-row\">...</div>" +
				"\r\n<div class=\"d-flex flex-lg-row\">...</div>" +
				"\r\n<div class=\"d-flex flex-xl-row\">...</div>"
		},

		{
			title: "flex-*-row-reverse",
			code: "<div class=\"d-flex flex-row-reverse\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex flex-sm-row-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-md-row-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-lg-row-reverse\">...</div>" +
				"\r\n<div class=\"d-flex flex-xl-row-reverse\">...</div>"
		},

		{
			title: "flex-*-nowrap",
			code: "<div class=\"d-flex flex-nowrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-sm-nowrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-md-nowrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-lg-nowrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-xl-nowrap\"> ... </div>"
		},

		{
			title: "flex-*-wrap",
			code: "<div class=\"d-flex flex-wrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-sm-wrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-md-wrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-lg-wrap\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-xl-wrap\"> ... </div>"
		},

		{
			title: "flex-*-wrap-reverse",
			code: "<div class=\"d-flex flex-wrap-reverse\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-sm-wrap-reverse\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-md-wrap-reverse\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-lg-wrap-reverse\"> ... </div>" +
				"\r\n<div class=\"d-flex flex-xl-wrap-reverse\"> ... </div>"
		},

		{
			title: "flex-fill",
			code: "<div class=\"d-flex text-white\">" +
				"\r\n  <div class=\"p-2 flex-fill bg-primary\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-fill bg-success\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-fill bg-primary\">Flex item</div>" +
				"\r\n</div>"
		},

		{
			title: "flex-*-grow-1",
			code: "<div class=\"d-flex text-white\">" +
				"\r\n  <div class=\"p-2 flex-grow-1 bg-primary\">Flex item</div>" +
				"\r\n  <div class=\"p-2 bg-success\">Flex item</div>" +
				"\r\n  <div class=\"p-2 bg-primary\">Third flex item</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<div class=\"d-flex text-white mt-1\">" +
				"\r\n  <div class=\"p-2 flex-sm-grow-1 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-md-grow-1 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-lg-grow-1 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-xl-grow-1 bg-warning\">Flex item</div>" +
				"\r\n</div>"
		},

		{
			title: "flex-*-grow-0",
			code: "<div class=\"d-flex text-white\">" +
				"\r\n  <div class=\"p-2 flex-grow-0 bg-primary\">Flex item</div>" +
				"\r\n  <div class=\"p-2 bg-success\">Flex item</div>" +
				"\r\n  <div class=\"p-2 bg-primary\">Third flex item</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<div class=\"d-flex text-white mt-1\">" +
				"\r\n  <div class=\"p-2 flex-sm-grow-0 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-md-grow-0 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-lg-grow-0 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-xl-grow-0 bg-warning\">Flex item</div>" +
				"\r\n</div>"
		},

		{
			title: "flex-*-shrink-1",
			code: "<div class=\"d-flex text-white\">" +
				"\r\n  <div class=\"p-2 w-100 bg-primary\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-shrink-1 bg-success\">Flex item</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<div class=\"d-flex text-white mt-2\">" +
				"\r\n  <div class=\"p-2 w-100 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-sm-shrink-1 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-md-shrink-1 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-lg-shrink-1 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-xl-shrink-1 bg-warning\">Flex item</div>" +
				"\r\n</div>"
		},

		{
			title: "flex-*-shrink-0",
			code: "<div class=\"d-flex text-white\">" +
				"\r\n  <div class=\"p-2 w-100 bg-primary\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-shrink-0 bg-success\">Flex item</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<div class=\"d-flex text-white mt-2\">" +
				"\r\n  <div class=\"p-2 w-100 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-sm-shrink-0 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-md-shrink-0 bg-warning\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-lg-shrink-0 bg-danger\">Flex item</div>" +
				"\r\n  <div class=\"p-2 flex-xl-shrink-0 bg-warning\">Flex item</div>" +
				"\r\n</div>"
		},

		{
			title: "justify-content-*-start",
			code: "<div class=\"d-flex justify-content-start\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex justify-content-sm-start\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-md-start\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-lg-start\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-xl-start\">...</div>"
		},

		{
			title: "justify-content-*-end",
			code: "<div class=\"d-flex justify-content-end\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex justify-content-sm-end\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-md-end\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-lg-end\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-xl-end\">...</div>"
		},

		{
			title: "justify-content-*-center",
			code: "<div class=\"d-flex justify-content-center\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex justify-content-sm-center\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-md-center\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-lg-center\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-xl-center\">...</div>"
		},

		{
			title: "justify-content-*-between",
			code: "<div class=\"d-flex justify-content-between\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex justify-content-sm-between\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-md-between\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-lg-between\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-xl-between\">...</div>"
		},

		{
			title: "justify-content-*-around",
			code: "<div class=\"d-flex justify-content-around\">" +
				"\r\n  <div class=\"p-2\">Flex item 1</div>" +
				"\r\n  <div class=\"p-2\">Flex item 2</div>" +
				"\r\n  <div class=\"p-2\">Flex item 3</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex justify-content-sm-around\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-md-around\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-lg-around\">...</div>" +
				"\r\n<div class=\"d-flex justify-content-xl-around\">...</div>"
		},

		{
			title: "align-content-*-start",
			code: "<div class=\"d-flex flex-wrap align-content-start\">" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  ..." +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex align-content-sm-start\">...</div>" +
				"\r\n<div class=\"d-flex align-content-md-start\">...</div>" +
				"\r\n<div class=\"d-flex align-content-lg-start\">...</div>" +
				"\r\n<div class=\"d-flex align-content-xl-start\">...</div>"
		},

		{
			title: "align-content-*-end",
			code: "<div class=\"d-flex flex-wrap align-content-end\">" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  ..." +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex align-content-sm-end\">...</div>" +
				"\r\n<div class=\"d-flex align-content-md-end\">...</div>" +
				"\r\n<div class=\"d-flex align-content-lg-end\">...</div>" +
				"\r\n<div class=\"d-flex align-content-xl-end\">...</div>"
		},

		{
			title: "align-content-*-center",
			code: "<div class=\"d-flex flex-wrap align-content-center\">" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  ..." +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex align-content-sm-center\">...</div>" +
				"\r\n<div class=\"d-flex align-content-md-center\">...</div>" +
				"\r\n<div class=\"d-flex align-content-lg-center\">...</div>" +
				"\r\n<div class=\"d-flex align-content-xl-center\">...</div>"
		},

		{
			title: "align-content-*-around",
			code: "<div class=\"d-flex flex-wrap align-content-around\">" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  ..." +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex align-content-sm-around\">...</div>" +
				"\r\n<div class=\"d-flex align-content-md-around\">...</div>" +
				"\r\n<div class=\"d-flex align-content-lg-around\">...</div>" +
				"\r\n<div class=\"d-flex align-content-xl-around\">...</div>"
		},

		{
			title: "align-content-*-stretch",
			code: "<div class=\"d-flex flex-wrap align-content-stretch\">" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  <div class=\"p-2\">Flex item</div>" +
				"\r\n  ..." +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"d-flex align-content-sm-stretch\">...</div>" +
				"\r\n<div class=\"d-flex align-content-md-stretch\">...</div>" +
				"\r\n<div class=\"d-flex align-content-lg-stretch\">...</div>" +
				"\r\n<div class=\"d-flex align-content-xl-stretch\">...</div>"
		},

		{
			title: "align-self-*-start",
			code: "<div class=\"align-self-start\">Aligned flex item</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"align-self-sm-start\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-md-start\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-lg-start\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-xl-start\">Aligned flex item</div>"
		},

		{
			title: "align-self-*-end",
			code: "<div class=\"align-self-end\">Aligned flex item</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"align-self-sm-end\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-md-end\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-lg-end\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-xl-end\">Aligned flex item</div>"
		},

		{
			title: "align-self-*-center",
			code: "<div class=\"align-self-center\">Aligned flex item</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"align-self-sm-center\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-md-center\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-lg-center\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-xl-center\">Aligned flex item</div>"
		},

		{
			title: "align-self-*-baseline",
			code: "<div class=\"align-self-baseline\">Aligned flex item</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"align-self-sm-baseline\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-md-baseline\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-lg-baseline\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-xl-baseline\">Aligned flex item</div>"
		},

		{
			title: "align-self-*-stretch",
			code: "<div class=\"align-self-stretch\">Aligned flex item</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"align-self-sm-stretch\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-md-stretch\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-lg-stretch\">Aligned flex item</div>" +
				"\r\n<div class=\"align-self-xl-stretch\">Aligned flex item</div>"
		},

		{
			title: "order-*-#",
			code: "<div class=\"d-flex flex-nowrap\">" +
				"\r\n  <div class=\"order-8 p-2\">First flex item</div>" +
				"\r\n  <div class=\"order-12 p-2\">Second flex item</div>" +
				"\r\n  <div class=\"order-3 p-2\">Third flex item</div>" +
				"\r\n</div>" +
				"\r\n" +
				"\r\n<!-- responsive variations -->" +
				"\r\n<div class=\"order-sm-3\">Flex item</div>" +
				"\r\n<div class=\"order-md-3\">Flex item</div>" +
				"\r\n<div class=\"order-lg-3\">Flex item</div>" +
				"\r\n<div class=\"order-xl-3\">Flex item</div>"
		}
	]
});

categories.push({
	title: "utility: misc",
	items: [{
			title: "close",
			code: "<button type=\"button\" class=\"close\" aria-label=\"Close\">" +
				"\r\n  <span aria-hidden=\"true\">×</span>" +
				"\r\n</button>"
		},

		{
			title: "embed-responsive",
			code: "<div class=\"embed-responsive embed-responsive-16by9\">" +
				"\r\n  <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/48OJbbI0DfE\" allowfullscreen=\"\"></iframe>" +
				"\r\n</div>"
		},

		{
			title: "shadow-none",
			code: "<div class=\"shadow-none p-3 mb-5 bg-light rounded\">No shadow</div>"
		},

		{
			title: "shadow-sm",
			code: "<div class=\"shadow-sm p-3 mb-5 bg-light rounded\">Small Shadow shadow</div>"
		},

		{
			title: "shadow",
			code: "<div class=\"shadow p-3 mb-5 bg-light rounded\">Regular shadow</div>"
		},

		{
			title: "shadow-lg",
			code: "<div class=\"shadow-lg p-3 mb-5 bg-white rounded\">Larger shadow</div>"
		},

		{
			title: "invisible",
			code: "<div class=\"invisible\">This text is invisible ...</div>"
		},

		{
			title: "visible",
			code: "<div class=\"visible\">...</div>"
		},

		{
			title: "sr-only",
			code: "<a class=\"sr-only\" href=\"#content\">Skip to main content</a>"
		},

		{
			title: "sr-only-focusable",
			code: "<a class=\"sr-only sr-only-focusable\" href=\"#content\">Skip to main content</a>"
		}
	]
});

categories.push({
	title: "utility: positioning",
	items: [{
			title: "align-*",
			code: "<span class=\"align-baseline\">baseline</span>" +
				"\r\n<span class=\"align-top\">top</span>" +
				"\r\n<span class=\"align-middle\">middle</span>" +
				"\r\n<span class=\"align-bottom\">bottom</span>" +
				"\r\n<span class=\"align-text-top\">text-top</span>" +
				"\r\n<span class=\"align-text-bottom\">text-bottom</span>"
		},

		{
			title: "clearfix",
			code: "<div class=\"clearfix\">...</div>"
		},

		{
			title: "fixed-top",
			code: "<div class=\"fixed-top bg-primary\">Fixed top</div>"
		},

		{
			title: "fixed-bottom",
			code: "<div class=\"fixed-bottom bg-primary\">Fixed bottom</div>"
		},

		{
			title: "sticky-top",
			code: "<div class=\"sticky-top bg-primary\">Sticky top</div>"
		},

		{
			title: "float-*-left",
			code: "<div class=\"float-left\">Float left on all viewport sizes</div>" +
				"\r\n<div class=\"float-sm-left\">Float left on viewports sized SM (small) or wider</div>" +
				"\r\n<div class=\"float-md-left\">Float left on viewports sized MD (medium) or wider</div>" +
				"\r\n<div class=\"float-lg-left\">Float left on viewports sized LG (large) or wider</div>" +
				"\r\n<div class=\"float-xl-left\">Float left on viewports sized XL (extra-large) or wider</div>"
		},

		{
			title: "float-*-right",
			code: "<div class=\"float-right\">Float right on all viewport sizes</div>" +
				"\r\n<div class=\"float-sm-right\">Float right on viewports sized SM (small) or wider</div>" +
				"\r\n<div class=\"float-md-right\">Float right on viewports sized MD (medium) or wider</div>" +
				"\r\n<div class=\"float-lg-right\">Float right on viewports sized LG (large) or wider</div>" +
				"\r\n<div class=\"float-xl-right\">Float right on viewports sized XL (extra-large) or wider</div>"
		},

		{
			title: "float-*-none",
			code: "<div class=\"float-none\">Don't float on all viewport sizes</div>" +
				"\r\n<div class=\"float-sm-none\">Don't float on viewports sized SM (small) or wider</div>" +
				"\r\n<div class=\"float-md-none\">Don't float on viewports sized MD (medium) or wider</div>" +
				"\r\n<div class=\"float-lg-none\">Don't float on viewports sized LG (large) or wider</div>" +
				"\r\n<div class=\"float-xl-none\">Don't float on viewports sized XL (extra-large) or wider</div>"
		}
	]
});

categories.push({
	title: "utility: sizing",
	items: [{
			title: "w-100",
			code: "<div class=\"w-25 p-3\" style=\"background-color: #eee;\">Width 25%</div>" +
				"\r\n<div class=\"w-50 p-3\" style=\"background-color: #eee;\">Width 50%</div>" +
				"\r\n<div class=\"w-75 p-3\" style=\"background-color: #eee;\">Width 75%</div>" +
				"\r\n<div class=\"w-100 p-3\" style=\"background-color: #eee;\">Width 100%</div>"
		},

		{
			title: "h-100",
			code: "<div style=\"height: 100px; background-color: rgba(255,0,0,0.1);\">" +
				"\r\n  <div class=\"h-25 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 25%</div>" +
				"\r\n  <div class=\"h-50 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 50%</div>" +
				"\r\n  <div class=\"h-75 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 75%</div>" +
				"\r\n  <div class=\"h-100 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 100%</div>" +
				"\r\n</div>"
		},

		{
			title: "mw-100",
			code: "<img class=\"mw-100\" src=\"/assets/img-cap.png\" alt=\"\" max-width=\"\" 100%\"=\"\">"
		},

		{
			title: "mh-100",
			code: "<img class=\"mh-100\" src=\"/assets/img-cap.png\" alt=\" max-height=\"\" 100%\"=\"\">"
		}
	]
});

categories.push({
	title: "utility: spacing",
	items: [{
			title: "m-*-#",
			code: "<div class=\"m-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"m-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"m-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"m-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"m-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"m-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"m-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"m-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"m-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"m-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "mt-*-#",
			code: "<div class=\"mt-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mt-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mt-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mt-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mt-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mt-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"mt-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mt-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mt-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mt-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "mr-*-#",
			code: "<div class=\"mr-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mr-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mr-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mr-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mr-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mr-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"mr-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mr-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mr-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mr-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "mb-*-#",
			code: "<div class=\"mb-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mb-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mb-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mb-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mb-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mb-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"mb-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mb-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mb-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mb-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "ml-*-#",
			code: "<div class=\"ml-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"ml-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"ml-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"ml-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"ml-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"ml-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"ml-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"ml-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"ml-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"ml-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "mx-*-#",
			code: "<div class=\"mx-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mx-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mx-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mx-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mx-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"mx-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"mx-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mx-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mx-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"mx-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "my-*-#",
			code: "<div class=\"my-0 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"my-1 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"my-2 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"my-3 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"my-4 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n<div class=\"my-5 bg-primary d-inline-block\">Spaced Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"my-sm-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"my-md-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"my-lg-5 d-inline-block bg-primary\">Spaced Div</div>" +
				"\r\n<div class=\"my-xl-5 d-inline-block bg-primary\">Spaced Div</div>"
		},

		{
			title: "p-*-#",
			code: "<div class=\"p-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"p-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"p-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"p-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"p-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"p-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"p-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"p-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"p-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"p-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "pt-*-#",
			code: "<div class=\"pt-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pt-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pt-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pt-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pt-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pt-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"pt-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pt-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pt-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pt-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "pr-*-#",
			code: "<div class=\"pr-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pr-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pr-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pr-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pr-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pr-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"pr-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pr-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pr-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pr-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "pb-*-#",
			code: "<div class=\"pb-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pb-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pb-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pb-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pb-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pb-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"pb-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pb-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pb-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pb-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "pl-*-#",
			code: "<div class=\"pl-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pl-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pl-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pl-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pl-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"pl-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"pl-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pl-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pl-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"pl-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "px-*-#",
			code: "<div class=\"px-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"px-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"px-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"px-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"px-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"px-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"px-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"px-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"px-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"px-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		},

		{
			title: "py-*-#",
			code: "<div class=\"py-0 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"py-1 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"py-2 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"py-3 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"py-4 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n<div class=\"py-5 bg-primary d-inline-block\">Padded Div</div>" +
				"\r\n" +
				"\r\n<!-- respsonsive viariations -->" +
				"\r\n<div class=\"py-sm-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"py-md-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"py-lg-5 d-inline-block bg-primary\">Padded Div</div>" +
				"\r\n<div class=\"py-xl-5 d-inline-block bg-primary\">Padded Div</div>"
		}
	]
});

categories.push({
	title: "utility: stretched link",
	items: [{
			title: "Card with stretched link",
			code: "<div class=\"card\" style=\"width: 18rem;\">" +
				"\r\n<img src=\"../assets/img-cap.png\" class=\"card-img-top\" alt=\"...\">" +
				"\r\n<div class=\"card-body\">" +
				"\r\n<h5 class=\"card-title\">Card with stretched link</h5>" +
				"\r\n<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
				"\r\n<a href=\"#\" class=\"btn btn-primary stretched-link\">Go somewhere</a>" +
				"\r\n</div>" +
				"\r\n</div>"
		},
		{
			title: "Media with stretched link",
			code: "<div class=\"media position-relative\">" +
				"\r\n<img src=\"../assets/img-cap-64x64.png\" class=\"mr-3\" alt=\"...\">" +
				"\r\n<div class=\"media-body\">" +
				"\r\n<h5 class=\"mt-0\">Media with stretched link</h5>" +
				"\r\n<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>" +
				"\r\n<a href=\"#\" class=\"stretched-link\">Go somewhere</a>" +
				"\r\n</div>" +
				"\r\n</div>"
		},
		{
			title: "Columns with stretched link",
			code: "<div class=\"row no-gutters bg-light position-relative\">" +
				"\r\n<div class=\"col-md-6 mb-md-0 p-md-4\">" +
				"\r\n<img src=\"../assets/img-cap.png\" class=\"w-100\" alt=\"...\">" +
				"\r\n</div>" +
				"\r\n<div class=\"col-md-6 position-static p-4 pl-md-0\">" +
				"\r\n<h5 class=\"mt-0\">Columns with stretched link</h5>" +
				"\r\n<p>Cras sit amet nibh libero, in gravida nulla.</p>" +
				"\r\n<a href=\"#\" class=\"stretched-link\">Go somewhere</a>" +
				"\r\n</div>" +
				"\r\n</div>"
		}, {
			title: "Identify containing block",
			code: "<div class=\"card\" style=\"width: 18rem;\">" +
				"\r\n<img src=\"../assets/img-cap.png\" class=\"card-img-top\" alt=\"...\">" +
				"\r\n<div class=\"card-body\">" +
				"\r\n<h5 class=\"card-title\">Card with stretched links</h5>" +
				"\r\n<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
				"\r\n<p class=\"card-text\">" +
				"\r\n<a href=\"#\" class=\"stretched-link text-danger\" style=\"position: relative;\">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>" +
				"\r\n</p>" +
				"\r\n<p class=\"card-text bg-light\" style=\"transform: rotate(0);\">This <a href=\"#\" class=\"text-warning stretched-link\">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.</p>" +
				"\r\n</div>" +
				"\r\n</div>"
		}
	]
})

categories.push({
	title: "utility: text",
	items: [{
			title: "font-weight-bold",
			code: "<p class=\"font-weight-bold\">Bold text.</p>"
		},

		{
			title: "font-weight-bolder",
			code: "<p class=\"font-weight-bolder\">bolder text.</p>"
		},

		{
			title: "font-weight-light",
			code: "<p class=\"font-weight-light\">Light text.</p>"
		},

		{
			title: "font-weight-lighter",
			code: "<p class=\"font-weight-lighter\">Lighter text.</p>"
		},

		{
			title: "font-weight-normal",
			code: "<p class=\"font-weight-normal\">Normal weight text.</p>"
		},

		{
			title: "font-italic",
			code: "<p class=\"font-italic\">Italicized text.</p>"
		},

		{
			title: "text-monospace",
			code: "<p class=\"text-monospace\">This is in monospace</p>"
		},

		{
			title: "text-reset",
			code: "Muted text with a <a href=\"#\" class=\"text-reset\">reset link</a>."
		},

		{
			title: "text-decoration",
			code: "<a href=\"#\" class=\"text-decoration-none\">Non-underlined link</a>"
		},

		{
			title: "text-justify",
			code: "<p class=\"text-justify\">Justified text.</p>"
		},

		{
			title: "text-nowrap",
			code: "<p class=\"text-nowrap\">No wrap text.</p>"
		},

		{
			title: "text-*-left",
			code: "<p class=\"text-left\">Left aligned text on all viewport sizes.</p>" +
				"\r\n<p class=\"text-sm-left\">Left aligned text on viewports sized SM (small) or wider.</p>" +
				"\r\n<p class=\"text-md-left\">Left aligned text on viewports sized MD (medium) or wider.</p>" +
				"\r\n<p class=\"text-lg-left\">Left aligned text on viewports sized LG (large) or wider.</p>" +
				"\r\n<p class=\"text-xl-left\">Left aligned text on viewports sized XL (extra-large) or wider.</p>"
		},

		{
			title: "text-*-right",
			code: "<p class=\"text-right\">Right aligned text on all viewport sizes.</p>" +
				"\r\n<p class=\"text-sm-right\">Right aligned text on viewports sized SM (small) or wider.</p>" +
				"\r\n<p class=\"text-md-right\">Right aligned text on viewports sized MD (medium) or wider.</p>" +
				"\r\n<p class=\"text-lg-right\">Right aligned text on viewports sized LG (large) or wider.</p>" +
				"\r\n<p class=\"text-xl-right\">Right aligned text on viewports sized XL (extra-large) or wider.</p>"
		},

		{
			title: "text-*-center",
			code: "<p class=\"text-center\">Center aligned text on all viewport sizes.</p>" +
				"\r\n<p class=\"text-sm-center\">Center aligned text on viewports sized SM (small) or wider.</p>" +
				"\r\n<p class=\"text-md-center\">Center aligned text on viewports sized MD (medium) or wider.</p>" +
				"\r\n<p class=\"text-lg-center\">Center aligned text on viewports sized LG (large) or wider.</p>" +
				"\r\n<p class=\"text-xl-center\">Center aligned text on viewports sized XL (extra-large) or wider.</p>"
		},

		{
			title: "Word break",
			code: "<p class=\"text-break\">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>"
		},

		{
			title: "text-lowercase",
			code: "<p class=\"text-lowercase\">lowercased text.</p>"
		},

		{
			title: "text-uppercase",
			code: "<p class=\"text-uppercase\">uppercased text.</p>"
		},

		{
			title: "text-capitalize",
			code: "<p class=\"text-capitalize\">capitalized text.</p>"
		},

		{
			title: "text-truncate",
			code: "<p class=\"text-truncate\">truncated text.</p>"
		},

		{
			title: "text-body",
			code: "<p class=\"text-body\">I'm a text with the default body color.</p>"
		},

		{
			title: "text-black-50",
			code: "<p class=\"text-black-50\">I'm a text with 50% opacity black.</p>"
		},

		{
			title: "text-white-50",
			code: "<p class=\"text-white-50 bg-danger\">I'm a text with 50% opacity white</p>"
		},

		{
			title: "text-muted",
			code: "<p class=\"text-muted\"> Heron alap ceroau kesse elex ruta. Tauru hemed ela meliado egeb selof.</p>"
		},

		{
			title: "text-hide",
			code: "<!-- this class is deprecated and will be removed in v5 -->" +
				"\r\n<h1 class=\"text-hide\">Custom heading</h1>"
		}
	]
});