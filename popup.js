let page = document.getElementById('root');

console.log(categories);
function createCategories(categories) {
	console.log(categories);
	for(let ctg of categories) {
		let category = document.createElement('div');
		category.setAttribute("class", "bs-category");

		let title = document.createElement('h3');
		title.setAttribute("class", "tf-bs-heading");
		title.innerHTML = ctg.title;
		category.appendChild(title);

		let list = document.createElement('ul');
		category.appendChild(list);

		for(let itm of ctg.items) {
			let listItem = document.createElement('li');
			listItem.setAttribute("class", "item-element");

			let spanTitle = document.createElement('span');
			spanTitle.setAttribute("class", "item-element");
			spanTitle.innerHTML = itm.title;
			listItem.appendChild(spanTitle);

			let spanIcon = document.createElement('span');
			spanIcon.setAttribute("class", "bs-copy-code");
			listItem.appendChild(spanIcon);

			// let imageCopy = document.createElement('img');
			// imageCopy.setAttribute("src", "")
			
			listItem.addEventListener("click", function() {
				console.log(itm.title);
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



