function getFormvalue() {
    //Write your code here
	let form = document.querySelector('form');
	let fName = document.getElementById('fname');
	let lName = document.getElementById('lName');

	form.addEventListener("submit" , (e)=>{
		e.preventDefault();

		let firstName = fName.value;
		let lastName = lName.value;

		if(firstName.length > 0 && lastName > 0){
			alert(`${firstName} ${lastName}`);
		}
	})
}
