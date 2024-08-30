// Get each input and store the key and timestamp
var timings = [];
function log() {
	let keycode = document.getElementById('input').value.slice(-1);
	let timestamp = Date.now();
	timings.push({"keycode": keycode, "timestamp": timestamp});
	display();
}

// Delete everything
function reset() {
	document.getElementById('input').value = '';
	document.getElementById('output').innerHTML = '<tr><th>keycode</th><th>delay (ms)</th></tr>';
	timings = [];
}

// Display output in readable format with relative timestamps
function display() {
	for (let i = 0; i < timings.length; ++i) {
		var output = document.createElement('tr');
		let keycode = document.createElement('td');
		let timestamp = document.createElement('td');

		// Make first timestamp relative to itself
		try {
			var prevTimestamp = timings[i-1].timestamp;
		} catch {
			var prevTimestamp = timings[i].timestamp;
		}

		keycode.textContent = timings[i].keycode;
		timestamp.textContent = timings[i].timestamp - prevTimestamp;

		output.appendChild(keycode);
		output.appendChild(timestamp);
	}
	document.getElementById('output').appendChild(output);
}

reset();