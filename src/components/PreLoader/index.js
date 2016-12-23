import React, { Component } from 'react';

// import static data
import preloader from '../../images/loader-plane.gif'

class PreLoader extends Component {

	render() {
		return (
				<div className="preloader"><img src={preloader} alt="preloader"/></div>
		);
	}
}

export default PreLoader;
