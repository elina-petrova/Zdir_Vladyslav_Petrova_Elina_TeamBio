(() => {
	let header = document.querySelector("h2"),
	    buttons = document.querySelectorAll(".button"),
	    picture = document.querySelector("img"),
	    text = document.querySelector("p"),
	    role = document.querySelector("h3"),
	    body = document.querySelector("body"),
	    container = document.querySelector(".container");

	let teamData = [
	["Vladyslav Zdir", `Designer`, `Vladislav is a creative designer and an idea developer.  
	He is engaged in graphic design, 3D modeling and video production.  Vladislav always
	 finds a creative and unique approach to his work.`],
    ["Elina Petrova", `Developer`, ` Elina applies herself to her work with creativity
    and dedication. She is the kind of person who find fun in coding, even if it makes her
    cry. With her strong logic and patience she manages to solve every problem. `]
	];



	function changeData(){

		console.log("HI");
		memberName = this.dataset.member;
		picture.src="images/" + memberName + ".png";

		header.innerHTML = teamData[this.dataset.num][0];
		role.innerHTML = teamData[this.dataset.num][1];
		text.innerHTML = teamData[this.dataset.num][2];


	}

	buttons.forEach(button => button.addEventListener('click', changeData));


})();

