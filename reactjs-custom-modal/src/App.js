import React, { Component } from 'react';
import Modal from './modal/modal';
import './App.css';


class App extends Component {

	constructor() {
		super();

		this.state = {
			isShowing: false
		}
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	}

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	}

	render () {
		return (
			<div>

        
				{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-shed"></div> : null }
        <div class="header-first">
        
        <a target="top" href="https://jsonworld.com"><h2>jsonworld.com</h2></a>
        <a target="top" href="https://jsonworld.com/demo/reactjs-custom-modal-example-and-tutorial"><p>React.js custom modal example and tutorial</p></a>
        
      </div>
				<button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

				<Modal
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler}>
				</Modal>
			</div>
		);
	}
}


export default App;