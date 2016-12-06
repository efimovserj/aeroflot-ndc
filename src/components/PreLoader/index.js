import React, { Component } from 'react';

// import static data
import preloader from '../../images/loader-plane.gif'

class PreLoader extends Component {

	render() {
		return (
				<p className="preloader"><img src={preloader} alt="preloader"/></p>
		);
	}
}

export default PreLoader;
