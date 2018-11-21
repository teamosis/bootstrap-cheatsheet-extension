var categories =  [];

categories.push({
	title: "Alerts",
	items: [
		{
			title: "alert-primary",
			code: "<div class=\"alert alert-primary\" role=\"alert\">"
			+ "\r\n 	<strong>Well done!</strong> You successfully read this"
			+ "\r\n 	important alert message."
			+ "\r\n</div>"
		},

		{
			title: "alert-secondary",
			code: "<div class=\"alert alert-secondary\" role=\"alert\">"
    		+ "\r\n 	<strong>Well done!</strong> You successfully read this"
    		+ "\r\n 	important alert message."
			+ "\r\n</div>"
		},

		{
			title: "alert-success",
			code: "<div class=\"alert alert-success\" role=\"alert\">"
    		+ "\r\n 	<strong>Well done!</strong> You successfully read this"
    		+ "\r\n 	important alert message."
			+ "\r\n</div>"
		},

		{
			title: "alert-info",
			code: "<div class=\"alert alert-info\" role=\"alert\">"
    		+ "\r\n 	<strong>Heads up!</strong> This alert needs your attention,"
    		+ "\r\n 	but it's not super important."
			+ "\r\n</div>"
		},

		{
			title: "alert-warning",
			code: "<div class=\"alert alert-warning\" role=\"alert\">"
  			+ "\r\n 	<strong>Warning!</strong> Better check yourself, you're not looking too good."
			+ "\r\n</div>"
		},

		{
			title: "alert-danger",
			code: "<div class=\"alert alert-danger\" role=\"alert\">"
  			+ "\r\n 	<strong>Oh snap!</strong> Change a few things up and try submitting again."
			+ "\r\n</div>"
		},

		{
			title: "alert-light",
			code: "<div class=\"alert alert-light\" role=\"alert\">"
    		+ "\r\n 	<strong>Well done!</strong> You successfully read this"
    		+ "\r\n 	important alert message."
			+ "\r\n</div>"
		},

		{
			title: "alert-dark",
			code: "<div class=\"alert alert-dark\" role=\"alert\">"
    		+ "\r\n 	<strong>Well done!</strong> You successfully read this"
    		+ "\r\n 	important alert message."
			+ "\r\n</div>"
		},

		{
			title: "alert-link",
			code: "<div class=\"alert alert-danger\" role=\"alert\">"
  			+ "\r\n 	<strong>Oh snap!</strong>"
  			+ "\r\n 	<a href=\"#!\" class=\"alert-link\">Change a few things up</a>"
  			+ "\r\n 	and try submitting again."
			+ "\r\n</div>"
		},

		{
			title: "alert-dismissible",
			code: "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">"
  			+ "\r\n 	<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
    		+ "\r\n 		<span aria-hidden=\"true\">&times;</span>"
  			+ "\r\n 	</button>"
  			+ "\r\n 	<strong>Holy guacamole!</strong> You should check in on some of those fields below."
			+ "\r\n</div>"
		},

		{
			title: "alert-heading",
			code: "<div class=\"alert alert-success\" role=\"alert\">"
  			+ "\r\n 	<h4 class=\"alert-heading\">Well done!</h4>"
  			+ "\r\n 	You successfully read this important alert message."
			+ "\r\n</div>"
		}
	]
});

categories.push({
	title: "Badges",
	items: [
		{
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
	title: "Breadcrumbs",
	items: [
		{
			title: "breadcrumb",
			code: "<nav aria-label=\"breadcrumb\">"
  			+"\r\n 	<ol class=\"breadcrumb\">"
    		+"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>"
  			+"\r\n 	</ol>"
			+"\r\n</nav>"
			+"\r\n"
			+"\r\n<nav aria-label=\"breadcrumb\">"
  			+"\r\n 	<ol class=\"breadcrumb\">"
    		+"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>"
    		+"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>"
  			+"\r\n 	</ol>"
			+"\r\n</nav>"
			+"\r\n"
			+"\r\n<nav aria-label=\"breadcrumb\">"
  			+"\r\n 	<ol class=\"breadcrumb\">"
    		+"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>"
    		+"\r\n 		<li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>"
    		+"\r\n 		<li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>"
  			+"\r\n 	</ol>"
			+"\r\n</nav>"
		}
	]
});

categories.push({
	title: "Buttons",
	items: [
		{
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
	title: "Button Groups",
	items: [	
		{
			title: "btn-group",
			code: "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>"
			+"\r\n</div>"
		},

		{
			title: "btn-group-lg",
			code: "<div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>"
			+"\r\n</div>"
		},

		{
			title: "btn-group-sm",
			code: "<div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>"
			+"\r\n</div>"
		},

		{
			title: "btn-group-vertical",
			code: "<div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>"
			+"\r\n</div>"
		},

		{
			title: "btn-group(nested)",
			code: "<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">1</button>"
			+"\r\n  <button type=\"button\" class=\"btn btn-secondary\">2</button>"
			+"\r\n"
			+"\r\n  <div class=\"btn-group\" role=\"group\">"
			+"\r\n    <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"
			+"\r\n      Dropdown"
			+"\r\n    </button>"
			+"\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">"
			+"\r\n      <a class=\"dropdown-item\" href=\"#!\">Dropdown link</a>"
			+"\r\n      <a class=\"dropdown-item\" href=\"#!\">Dropdown link</a>"
			+"\r\n    </div>"
			+"\r\n  </div>"
			+"\r\n</div>"
		},

		{
			title: "btn-toolbar",
			code: "<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">"
			+"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">1</button>"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">2</button>"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">3</button>"
			+"\r\n  </div>"
			+"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">5</button>"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">6</button>"
			+"\r\n  </div>"
			+"\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">"
			+"\r\n    <button type=\"button\" class=\"btn btn-secondary\">8</button>"
			+"\r\n  </div>"
			+"\r\n</div>"
		}
	]
});

categories.push({
	title: "Button Modifiers",
	items: [
		{
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
			code: "<button type=\"button\" class=\"btn btn-lg btn-primary\" disabled=\"\">Disabled button</button>"
			+"\r\n<a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\" aria-disabled=\"true\">Disabled link button</a>"
		},

		{
			title: "checkbox as button",
			code: "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">"
			+"\r\n  <label class=\"btn btn-secondary active\">"
			+"\r\n    <input type=\"checkbox\" checked=\"\" autocomplete=\"off\"> Active"
			+"\r\n  </label>"
			+"\r\n  <label class=\"btn btn-secondary\">"
			+"\r\n    <input type=\"checkbox\" autocomplete=\"off\"> Check"
			+"\r\n  </label>"
			+"\r\n</div>"
		},

		{
			title: "radio as button",
			code: "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">"
			+"\r\n  <label class=\"btn btn-secondary active\">"
			+"\r\n    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked=\"\"> Active"
			+"\r\n  </label>"
			+"\r\n  <label class=\"btn btn-secondary\">"
			+"\r\n    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Radio"
			+"\r\n  </label>"
			+"\r\n</div>"
		}
	]
});