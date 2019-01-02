import React, { Component } from 'react'

class Header extends Component {
	userInfoToShow() {

	}

	render() {
		console.log(this.props.auth, !this.props.auth)
		return (
			<nav className="nav-wrapper">
				<a className="left brand-logo">
					Emaily
				</a>
				<ul className="right">
					<li>
						{ this.props.auth && !this.props.auth.user &&
							<a href="/auth/google">
								Login With Google
							</a>
						}
						<span>
							{ this.props.auth && this.props.auth.user && this.props.auth.user.googleId }
						</span>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header
