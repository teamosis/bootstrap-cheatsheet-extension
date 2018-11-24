let search = document.getElementById('search-field');
let searchItems = document.getElementById('search-items');
let page = document.getElementById('list');

function matched(query, str) {
	if(str.search(query) >= 0)
		return  true;
	return false;
}

function clearSearchList() {
	while(searchItems.firstChild) {
		searchItems.removeChild(searchItems.firstChild);
	}
}

/**
* This function initializes the search operations
*/
function initSearch(categories) {
	search.addEventListener("focusin", function() {
		console.log("Focus in!");
	});

	search.addEventListener("focusout", function() {
		console.log("Focus out!");
		// if search field is empty then reload all the categories
		var str = search.value;
		if(str == "") {
			// back to normal
			console.log("Empty -- ");
		} else {
			console.log(str);
		}
	});

	search.addEventListener("keyup", function() {
		clearSearchList();
		var searchStr = search.value;
		if(searchStr == "") {
			// hide the search results
			searchItems.classList.remove("show");
			searchItems.classList.add("hide");
		} else {
			// show the search reslts
			searchItems.classList.remove("hide");
			searchItems.classList.add("show");
		}
		
		console.log("Search: " + searchStr);
		// search for str
		let list = document.createElement('ul');
		searchItems.appendChild(list);

		searchStr = searchStr.toLowerCase();
		for(var ctg of categories) {
			if(matched(searchStr, ctg.title)) {
				// show all the list items
				for(var itm of ctg.items) {
					console.log(itm.title);
					let listItem = document.createElement('li');
					listItem.setAttribute("class", "item-element");

					// show the title of the code snippet
					let spanTitle = document.createElement('span');
					spanTitle.setAttribute("class", "item-element");
					spanTitle.innerHTML = itm.title;
					listItem.appendChild(spanTitle);

					// show the message "Code copied" when clicked
					let spanText = document.createElement('span');
					spanText.setAttribute("class", "bs-copy-code");
					spanText.innerHTML = "Code copied";
					listItem.appendChild(spanText);

					list.appendChild(listItem);
				}
			} else {
				// search in the list items
				for(var itm of ctg.items) {
					if(matched(searchStr, itm.title)) {
						// show the item
						console.log(itm.title);
						let listItem = document.createElement('li');
						listItem.setAttribute("class", "item-element");

						// show the title of the code snippet
						let spanTitle = document.createElement('span');
						spanTitle.setAttribute("class", "item-element");
						spanTitle.innerHTML = itm.title;
						listItem.appendChild(spanTitle);

						// show the message "Code copied" when clicked
						let spanText = document.createElement('span');
						spanText.setAttribute("class", "bs-copy-code");
						spanText.innerHTML = "Code copied";
						listItem.appendChild(spanText);

						list.appendChild(listItem);
					}
				}
			}
		}
	}); 
}


/**
* This fucnntion creates the view of the lists
*/
function createCategories(categories) {
	for(let ctg of categories) {
		let category = document.createElement('div');
		category.setAttribute("class", "bs-category");

		// The heading/title of the categories
		let title = document.createElement('h3');
		title.setAttribute("class", "tf-bs-heading");
		title.innerHTML = ctg.title;
		category.appendChild(title);

		let list = document.createElement('ul');
		category.appendChild(list);

		for(let itm of ctg.items) {
			let listItem = document.createElement('li');
			listItem.setAttribute("class", "item-element");

			// show the title of the code snippet
			let spanTitle = document.createElement('span');
			spanTitle.setAttribute("class", "item-element");
			spanTitle.innerHTML = itm.title;
			listItem.appendChild(spanTitle);

			// show the message "Code copied" when clicked
			let spanText = document.createElement('span');
			spanText.setAttribute("class", "bs-copy-code");
			spanText.innerHTML = "Code copied";
			listItem.appendChild(spanText);

			// initializing variable to store the record of previously selected item
			var previousCopied = listItem;
			// initializing click listener on listItem
			listItem.addEventListener("click", function() {
				console.log(itm.title);
				listItem.classList.add("code-copied");

				// removing the @code-copied class form the previousy copied item
				// and making the current item as pervious item
				previousCopied.classList.remove("code-copied");
				previousCopied = listItem;

				// Copy text to clipboard
				let copyText = document.createElement('textarea');
				category.appendChild(copyText);
				copyText.value = itm.code;
				copyText.select();
				document.execCommand("copy");
				category.removeChild(copyText);
			});
			list.appendChild(listItem);
		}
		page.appendChild(category);
	}
}

createCategories(categories);
initSearch(categories);
