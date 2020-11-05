const rows = document.querySelector(".sequencer").children;

const kick = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/kick.mp3"),
	clap = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/clap.mp3"),
	hihat = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/hihat.mp3"),
	rim = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/rim.mp3"),
	Q = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/Q.mp3"),
	W = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/W.mp3"),
	E = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/E.mp3"),
	R = new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/R.mp3");

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

// Clear button functionality
document.getElementById("clear-track").onclick = function () {
	[].forEach.call(item, function (el) {
		el.classList.remove("item-selected");
	});
}

// Sample pad key press functionality
document.onkeydown = function (e) {
	e = e || window.event;

	switch (e.key) {
		case "q":
			Q.load();
			Q.play();
			document.getElementById("sampler1").classList.add("pressed");
			break;
		case "w":
			W.load();
			W.play();
			document.getElementById("sampler2").classList.add("pressed");
			break;
		case "e":
			E.load();
			E.play();
			document.getElementById("sampler3").classList.add("pressed");
			break;
		case "r":
			R.load();
			R.play();
			document.getElementById("sampler4").classList.add("pressed");
			break;	
	}
}

document.onkeyup = function (e) {
	e = e || window.event;

	switch (e.key) {
		case "q":
			// Q.pause();
			// Q.currentTime = 0;
			document.getElementById("sampler1").classList.remove("pressed");
			break;
		case "w":
			// W.pause();
			// W.currentTime = 0;
			document.getElementById("sampler2").classList.remove("pressed");
			break;
		case "e":
			// E.pause();
			// E.currentTime = 0;
			document.getElementById("sampler3").classList.remove("pressed");
			break;
		case "r":
			// R.pause();
			// R.currentTime = 0;
			document.getElementById("sampler4").classList.remove("pressed");
			break;	
	}
}

// BPM slider
const bpmSlider = document.getElementById("bpm-slider");
const bpmText = document.getElementById("bpm");
var BPM = bpmSlider.value;

bpmText.innerHTML = bpmSlider.value + " BPM";

bpmSlider.oninput = function () {
	bpmText.innerHTML = this.value + " BPM";
	BPM = parseInt(((60 / bpmSlider.value) * 1000) / 4);
}

let i = -1;
rowLoop = () => {
	setTimeout(function () {
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
				kick.load();
				kick.play();
			}

			if (bruh.childNodes[3].classList.contains("row-highlight") && bruh.childNodes[3].classList.contains("item-selected")) {
				clap.load();
				clap.play();
			}

			if (bruh.childNodes[5].classList.contains("row-highlight") && bruh.childNodes[5].classList.contains("item-selected")) {
				hihat.load();
				hihat.play();
			}

			if (bruh.childNodes[7].classList.contains("row-highlight") && bruh.childNodes[7].classList.contains("item-selected")) {
				rim.load();
				rim.play();
			}
		});

		rowLoop();
	}, BPM);
}

// Call rowLoop() function
rowLoop();