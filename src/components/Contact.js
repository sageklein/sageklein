import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="contact">
				<h1>
					<Fade bottom cascade>
						{" "}
						Contact.
					</Fade>
				</h1>
				<Fade bottom>
					<div className="contact-content">
						<h1>
							Let's make something<br></br>
							<span className="amazing-color">amazing</span>
						</h1>
						<a
							href={`mailto:${data.contactEmail}`}
							className="email"
						>
							{data.contactEmail}
						</a>
						<ul className="social">
							{data.social.map((link, index) => (
								<li key={index}>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={link.url}
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</Fade>

				<span className="footer">
					{" "}
						<p className="footer">Copyright © 2020 Sage Klein</p>

				</span>
			</div>
		);
	}
}

export default Contact;
