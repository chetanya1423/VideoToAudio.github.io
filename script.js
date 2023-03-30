const linkDetail = document.getElementById('detail');
let ab='';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
		'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
	}
};

const updateTerm = (inputurlid) => {

	if(inputurlid==''){
		alert("Please enter Youtube url");
	}
	else{
		let sliceValue = inputurlid.slice(17);
	console.log(sliceValue);
	fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=' + sliceValue, options)

		.then(response => response.json())
		.then((response) => {
			console.log(response);
			document.querySelector(".info").style.display = "block";
			document.querySelector(".info-h1").innerHTML = "Name:- " + response.title;
			const inMin = response.duration / 60;
			const ab = parseFloat(inMin).toFixed(2);
			document.querySelector(".info-h2").innerHTML = "Duration:- " + ab + "min";
			document.querySelector(".info-a").href = response.link;

		})
		.catch(err => console.error(err));
	}

}






searchbtn.addEventListener("click", function (e) {

	e.preventDefault();
	updateTerm(inputurlid.value)
})