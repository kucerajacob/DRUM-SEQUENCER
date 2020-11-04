const pads = document.querySelector(".parent").children;

const kick = new Audio("/audio/kick.wav"),
clap = new Audio("/audio/clap.wav"),
hihat = new Audio("/audio/hihat.wav"),
rim = new Audio("/audio/rim.wav");

const item = document.querySelectorAll(".item");

// Checkbox toggle functionality
item.forEach(function (el) {
	el.onclick = function () {
		if (el.classList.contains("item-selected")) {
			el.classList.remove("item-selected");
		} else {
			el.classList.add("item-selected");
		}
	}
});


// Looping mechanism
var i = -1;

setInterval(function() {
	i++;

	if (i === pads.length) {
		i = 0;
		document.querySelector(".item:nth-child(" + pads.length + ")").classList.remove("row");
	}

	let booba = document.querySelector(".parent").children.item(i);
	booba.classList.add("row");

	if (i > 0) {
		document.querySelector(".item:nth-child(" + i + ")").classList.remove("row");
	}

	console.log(i);

	item.forEach(function (bruh) {
		if (bruh.classList.contains("row") && bruh.classList.contains("item-selected")) {
			kick.play();
		}
	});
}, 100);

function playSound() {
	kick.play();
}