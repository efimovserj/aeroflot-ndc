import React, { Component } from 'react';

// import static data
import preloader from './../../images/loader-plane.gif';

class PreLoader extends Component {
	render() {
		return (
				<div className={['preloader', this.props.status ? 'active' : ''].join(' ')}><img src={preloader} alt="preloader"/></div>
		);
	}
}

export default PreLoader;
