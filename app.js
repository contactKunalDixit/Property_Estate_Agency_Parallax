const saluteTextContainer = document.querySelector('.saluteTextContainer');
const saluteImageContainer = document.querySelector('.saluteImageContainer');
const sikhImageIcon = document.querySelector('.sikhImageIcon');
const saluteText = document.querySelector('.saluteText');
const jobTitleContainer = document.querySelectorAll('.jobTitleContainer');
const jobTitle = document.querySelector('.jobTitle');
const projects = document.querySelector('.projects');
const project1s = document.querySelectorAll('.project1');

window.addEventListener('scroll', () => {
	let offsetY = window.scrollY;
	let offsetX = window.scrollX;
	console.log(offsetY);

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
	jobTitleContainer[0].style.backgroundPositionY = `${offsetY * 0.3}px`;
	// jobTitleContainer[1].style.backgroundPositionY = `-${offsetY * 0.3}px`;
	jobTitle.style.transform = `translateX(calc(110vh - ${offsetY}px)`;

	// ! Project Page Description effect
	projects.style.backgroundPositionY = `${offsetY * 0.2}px`;
	// project1s[0].style.transform = `translate(calc(210vh - ${offsetY}px)`;
});
