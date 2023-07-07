import axios from 'axios';

import React, { Component } from 'react';

class App extends Component {

	state = {
		selectedFile: null
	};

	onFileChange = event => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	onFileUpload = () => {

		const formData = new FormData();

		formData.append(
			"file",
			this.state.selectedFile,
			this.state.selectedFile.name
		);

		console.log(this.state.selectedFile);

		axios.post("http://localhost:5000/upload", formData)
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
	};

	fileData = () => {

		if (this.state.selectedFile) {

			return (
				<div>



				</div>
			);
		}
	};

	render() {

		return (
			<div>
				<div>
          <br></br>
          <h4>upload</h4>
					<input type="file" onChange={this.onFileChange} />
					<button onClick={this.onFileUpload}>
						Upload!
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default App;
