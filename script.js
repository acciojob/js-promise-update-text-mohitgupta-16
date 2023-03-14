//your JS code here. If required.

const output = documen.querySelector("#output");

function func() {
	return Promise(resolve) {
		setTimeout(() => {
			resolve("Hello,world!");
		}, 1000);
	}
}

output.textContent = func();