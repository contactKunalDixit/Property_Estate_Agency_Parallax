const container = document.querySelector('.container');
const saluteTextContainer = document.querySelector('.saluteTextContainer');
const saluteImageContainer = document.querySelector('.saluteImageContainer');
const sikhImageIcon = document.querySelector('.sikhImageIcon');
const saluteText = document.querySelector('.saluteText');
const jobTitleContainer = document.querySelector('.jobTitleContainer');
const jobTitle = document.querySelector('.jobTitle');
const projects = document.querySelector('.projects');
const project1 = document.querySelectorAll('.project1');
const project1Details = document.querySelector('.project1Details');
const modal = document.querySelector('.modal');
const proj1ModalOuterContainer = document.querySelector(
	'.proj1ModalOuterContainer'
);
const proj1ModalInnerContainer = document.querySelector(
	'.proj1ModalInnerContainer'
);
const closeButton = document.querySelector('.closeButton');

const project2Details = document.querySelector('.project2Details');

const proj2ModalOuterContainer = document.querySelector(
	'.proj2ModalOuterContainer'
);
const modal2 = document.querySelector('.modal2');
const closeButton2 = document.querySelector('.closeButton2');

window.addEventListener('scroll', () => {
	let offsetY = window.scrollY;
	let offsetX = window.scrollX;
	// console.log(offsetY);

	//! Intro Page Parallax effect
	// saluteTextContainer.style.transform = `translateY(${offsetY * 0.5}px)`;
	// saluteTextContainer.style.transform = `scale(${1 + offsetY / 800})`;
	saluteImageContainer.style.transform = `translateX(${
		offsetY * 0.2
	}px);scale(${1 + offsetY / 800})`;
	// saluteImageContainer.style.transform = `scale(${1 + offsetY / 1000})`;
	// sikhImageIcon.style.transform = `scale(${1 + offsetY / 800})`;
	sikhImageIcon.style.transform = `translate(${offsetX * 1.5}px,${
		offsetY * 0.5
	}px)`;
	saluteText.style.transform = `translateY(${offsetY * 0.4}px)`;
	//! Profile Description Page Parallax effect
	jobTitleContainer.style.backgroundPositionY = `${offsetY * 0.3}px`;
	// jobTitleContainer[1].style.backgroundPositionY = `-${offsetY * 0.3}px`;
	jobTitle.style.transform = `translateX(calc(110vh - ${offsetY}px)`;

	// ! Project Page Description effect
	projects.style.backgroundPositionY = `${offsetY * 0.2}px`;
	// project1s[0].style.transform = `translate(calc(210vh - ${offsetY}px)`;
});

//! DISABLING MODAL FEATURE
/*
project1Details.addEventListener('click', () => {
	modal.style.display = 'flex';
	// When the modal is shown, we want a fixed body
	document.body.style.top = `-${window.scrollY}px`;
	// console.log(`${window.scrollY}px`);
	document.body.style.position = 'fixed';
});

window.addEventListener('click', (event) => {
	if (event.target == proj1ModalOuterContainer) {
		modal.style.display = 'none';
		const scrollY = `-200vh`;
		document.body.style.position = '';
		document.body.style.top = '';
		// window.scrollTo(0, parseInt(scrollY || '0') * -1);
		window.scrollTo(0, 1800);
	}
});

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
	// When the modal is hidden...
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

project2Details.addEventListener('click', () => {
	modal2.style.display = 'flex';
	console.log(`${window.scrollY}px`);
	document.body.style.top = `-${window.scrollY}px`;
	document.body.style.position = 'fixed';
});

window.addEventListener('click', (event) => {
	if (event.target == proj2ModalOuterContainer) {
		modal2.style.display = 'none';
		// When the modal is hidden...
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}
});

closeButton2.addEventListener('click', () => {
	modal2.style.display = 'none';
	// When the modal is hidden...
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
});
*/
