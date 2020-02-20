const request = new XMLHttpRequest();
request.open('GET','https://hplussport.com/api/products');
request.onload = function(){
	const response = request.response;
	const data = JSON.parse(response);

	// loop to display all  the data 
	for (item in data){
		const name = data[item].name;
		const images = data[item].image;
		const products = document.createElement('li');
		const img = document.createElement('img');
		img.src = images;
		products.innerHTML  = name;
		products.src = images;
		document.body.append(products)
		document.body.append(img)
	}
}
request.send()