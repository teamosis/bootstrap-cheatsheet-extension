let searchField = document.getElementById('search-field');
let searchItems = document.getElementById('search-items');
let categoryList = document.getElementById('list');

var searchResult = [];

var previousCopied;
/**
* Search for match 
* @param query is the string that is searched
* @param str is the string where is searched
* @return 0 if not found otherwise number of occurance
*/
function occurances(query, str) {
	// initially does not match
	var cnt= 0;
	// split query string
	var queries = query.split(" ");
	for(var q of queries) {
		if(q != "" && str.search(q) >= 0) {
			cnt++;
		}
	}
	return cnt;
}
/**
* This function clears the search data list and list from the UI
* @return void
*/
function clearSearchList() {
	while(searchResult.length > 0) {
		searchResult.pop();
	}
	while(searchItems.firstChild) {
		searchItems.removeChild(searchItems.firstChild);
	}
}

/**
* This function adds click listener on every item
* @param:list is a ul element (only for copy purpose)
* @param:listItem is a li element where the click listener is attached
* @param:item is data object of a single item
*/
function addClickListener(list, listItem, item) {
	listItem.addEventListener("click", function() {
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

/**
* This function creates list items and adds them in the list
* @param:list is the ul element
* @param:item is the data object of a single item
* @return void
*/
function addItemsInTheList(list, item) {
	let listItem = document.createElement("li");
	listItem.setAttribute("class", "item-element");

	// show the title of the code snippet
	let spanTitle = document.createElement("span");
	spanTitle.setAttribute("class", "item-element");
	spanTitle.innerHTML = item.title;
	listItem.appendChild(spanTitle);

	// show the message "Code copied" when clicked
	let spanText = document.createElement("span");
	spanText.setAttribute("class", "bs-copy-code");
	spanText.innerHTML = "Code copied";
	listItem.appendChild(spanText);

	let spanIcon = document.createElement("span");
	spanIcon.setAttribute("class", "code-copy-icon");
	listItem.appendChild(spanIcon);

	previousCopied = listItem;
	addClickListener(list, listItem, item);

	list.appendChild(listItem);
} 


/**
* This function initializes the search operations
* @param:categories is the full data set
* @return void
*/
function initSearch(categories) {
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
		
		// search for str
		let list = document.createElement('ul');
		searchItems.appendChild(list);

		searchStr = searchStr.toLowerCase();
		for(var ctg of categories) {
			var cnt = occurances(searchStr, ctg.title);
			if(cnt != 0) {
				found = true;
				// show all the list items
				for(var itm of ctg.items) {
					itm.count = occurances(searchStr, itm.title) + 5;
					searchResult.push(itm);
				}
			} else {
				// search in the list items
				for(var itm of ctg.items) {
					var cnt = occurances(searchStr, itm.title);
					if(cnt != 0) {
						found = true;
						// show the item
						itm.count = cnt;
						searchResult.push(itm);
					}
				}
			}
		}
		// if found then show the items
		// otherwise show the not found message
		if(found) {
			// sorting the search result desc by the occurance
			searchResult.sort(function(a, b) {
				return b.count - a.count;
			});
			for(var item of searchResult) {
				addItemsInTheList(list, item);
			}
		} else {
			let message = document.createElement("p");
			message.classList.add('no-result-text');
			message.innerHTML = "No result found for <strong> \"" + searchField.value + "\"</strong>";
			searchItems.removeChild(list);
			searchItems.appendChild(message);
		}
	}); 
}


/**
* This fucnntion creates the view of the full list
* @param:categories is the full data set
* @return void
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
			addItemsInTheList(list, itm);
		}
		categoryList.appendChild(category);
	}
}

// creating the full list of items in the UI
createCategories(categories);
// initilizing the search functionality
initSearch(categories);
