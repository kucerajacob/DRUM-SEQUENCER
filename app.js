const rows = document.querySelector(".sequencer").children;

const kick = new Audio("/audio/kick.wav"),
	clap = new Audio("/audio/clap.wav"),
	hihat = new Audio("/audio/hihat.wav"),
	rim = new Audio("/audio/rim.wav");

const item = document.querySelectorAll(".sample");

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

var i = -1;

function rowLoop() {
	setInterval(function () {
		i++;

		if (i === rows.length) {
			i = 0;
			document.querySelector(".d16").childNodes[1].classList.remove("row-highlight");
			document.querySelector(".d16").childNodes[3].classList.remove("row-highlight");
			document.querySelector(".d16").childNodes[5].classList.remove("row-highlight");
			document.querySelector(".d16").childNodes[7].classList.remove("row-highlight");
		}

		document.querySelector(".d" + (i + 1)).childNodes[1].classList.add("row-highlight");
		document.querySelector(".d" + (i + 1)).childNodes[3].classList.add("row-highlight");
		document.querySelector(".d" + (i + 1)).childNodes[5].classList.add("row-highlight");
		document.querySelector(".d" + (i + 1)).childNodes[7].classList.add("row-highlight");

		if (i > 0) {
			document.querySelector(".d" + i).childNodes[1].classList.remove("row-highlight");
			document.querySelector(".d" + i).childNodes[3].classList.remove("row-highlight");
			document.querySelector(".d" + i).childNodes[5].classList.remove("row-highlight");
			document.querySelector(".d" + i).childNodes[7].classList.remove("row-highlight");
		}

		document.querySelectorAll(".d" + (i + 1)).forEach(function (bruh) {
			if (bruh.childNodes[1].classList.contains("row-highlight") && bruh.childNodes[1].classList.contains("item-selected")) {
				kick.play();
			}

			if (bruh.childNodes[3].classList.contains("row-highlight") && bruh.childNodes[3].classList.contains("item-selected")) {
				clap.play();
			}

			if (bruh.childNodes[5].classList.contains("row-highlight") && bruh.childNodes[5].classList.contains("item-selected")) {
				hihat.play();
			}

			if (bruh.childNodes[7].classList.contains("row-highlight") && bruh.childNodes[7].classList.contains("item-selected")) {
				rim.play();
			}
		});
	}, 150);
}

rowLoop();