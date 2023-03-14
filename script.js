//your JS code here. If required.

const output = document.querySelector("#output");

function func() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello,world!");
		}, 1000);
	})
}

func().then((message) => {
  output.textContent = message;
});