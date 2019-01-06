import React, { Component, Fragment } from 'react'
import Payments from './Payments'

class Header extends Component {
	render() {
		return (
			<nav className="nav-wrapper">
				<a className="left brand-logo" href="/">
					Emaily
				</a>
				<ul className="right">
					<li>
						{ this.props.auth && !this.props.auth.user &&
							<a href="/auth/google">
								Login With Google
							</a>
						}
					</li>
					{ this.props.auth && this.props.auth.user &&
						<Fragment>
							<li>
								<Payments />
							</li>
							<li>
								<img src={this.props.auth.user.img} alt="" />
							</li>
							<li>
								<a href="/api/logout">
									logout
								</a>
							</li>
						</Fragment>
					}
				</ul>
			</nav>
		)
	}
}

export default Header
