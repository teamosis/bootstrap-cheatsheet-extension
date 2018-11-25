let searchField = document.getElementById('search-field');
let searchItems = document.getElementById('search-items');
let categoryList = document.getElementById('list');

var searchResult = [];

var previousCopied;

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

function addClickListener(list, listItem, item) {
	listItem.addEventListener("click", function() {
		console.log(item.title);
		listItem.classList.add("code-copied");

		// removing the @code-copied class form the previousy copied item
		// and making the current item as pervious item
		previousCopied.classList.remove("code-copied");
		previousCopied = listItem;

		// Copy text to clipboard
		let copyText = document.createElement('textarea');
		list.appendChild(copyText);
		copyText.value = item.code;
		copyText.select();
		document.execCommand("copy");
		list.removeChild(copyText);
	});
}

function addSearchItems(list, item) {
	console.log(item.title);
	let listItem = document.createElement('li');
	listItem.setAttribute("class", "item-element");

	// show the title of the code snippet
	let spanTitle = document.createElement('span');
	spanTitle.setAttribute("class", "item-element");
	spanTitle.innerHTML = item.title;
	listItem.appendChild(spanTitle);

	// show the message "Code copied" when clicked
	let spanText = document.createElement('span');
	spanText.setAttribute("class", "bs-copy-code");
	spanText.innerHTML = "Code copied";
	listItem.appendChild(spanText);

	addClickListener(list, listItem, item);

	list.appendChild(listItem);
} 


/**
* This function initializes the search operations
*/
function initSearch(categories) {
	searchField.addEventListener("focusin", function() {
		console.log("Focus in!");
	});

	searchField.addEventListener("focusout", function() {
		console.log("Focus out!");
		// if search field is empty then reload all the categories
		var str = searchField.value;
		if(str == "") {
			// back to normal
			console.log("Empty -- ");
		} else {
			console.log(str);
		}
	});

	searchField.addEventListener("keyup", function() {
		clearSearchList();
		// initially there is no search result
		var found = false;
		var searchStr = searchField.value;
		if(searchStr == "") {
			// hide the search results
			categoryList.classList.remove("overlay");
			searchItems.classList.remove("show");
			searchItems.classList.add("hide");
		} else {
			// show the search reslts
			categoryList.classList.add("overlay");
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
				found = true;
				// show all the list items
				for(var itm of ctg.items) {
					//searchResult.push(itm);
					addSearchItems(list, itm);
				}
			} else {
				// search in the list items
				for(var itm of ctg.items) {
					if(matched(searchStr, itm.title)) {
						found = true;
						// show the item
						//searchResult.push(itm);
						addSearchItems(list, itm);
					}
				}
			}
		}
		// TODO: if no result found then show a message
		if(! found) {
			let message = document.createElement("p");
			message.innerHTML = "No result found for \"" + searchField.value + "\"";
			//searchItems.removeChild(list);
			searchItems.appendChild(message);
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
			previousCopied = listItem;
			// initializing click listener on listItem
			addClickListener(list, listItem, itm);
			list.appendChild(listItem);
		}
		categoryList.appendChild(category);
	}
}

createCategories(categories);
initSearch(categories);
