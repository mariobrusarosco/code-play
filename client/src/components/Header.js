import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		// console.log(this.props.auth, !this.props.auth)
		return (
			<nav className="nav-wrapper">
				<Link className="left brand-logo" to={this.props.auth ? '/surveys' : '/'}>
					Emaily
				</Link>
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
								<img alt="asdsda" src={this.props.auth.user.img} />
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
