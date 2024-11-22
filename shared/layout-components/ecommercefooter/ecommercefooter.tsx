import React, { Fragment } from 'react'

const Ecommercefooter = () => {
  return (
    <Fragment>
        {/* <!-- Start::Footer --> */}
		<div className="landing-main-footer py-3 mt-auto">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 text-lg-start text-center">
						<span className="text-fixed-white op-7 fs-14"> © Copyright <span id="year">2024</span> <a
							href="#!" className="text-primary fs-15 fw-semibold">Mamix</a>.
						</span>
					</div>
					<div className="col-lg-6 text-lg-end text-center">
						<ul className="list-unstyled fw-normal landing-footer-list mb-0">
							<li>
								<a href="#!" className="text-fixed-white op-8">Terms Of Service</a>
							</li>
							<li>
								<a href="#!" className="text-fixed-white op-8">Privacy Policy</a>
							</li>
							<li>
								<a href="#!" className="text-fixed-white op-8">Legal</a>
							</li>
							<li>
								<a href="#!" className="text-fixed-white op-8">Contact</a>
							</li>
							<li>
								<a href="#!" className="text-fixed-white op-8">Report Abuse</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End::Footer --> */}
    </Fragment>
  )
}

export default Ecommercefooter