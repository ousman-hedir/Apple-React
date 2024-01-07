import React from "react";

import BuyWatchLink from "../../Double_part/Buy-watch-links/Buy_watch_link";

function SecondSection() {
	return (
		<section class="second-hightlight-wrapper">
			<h3 className="py-4 bold title-wraper">iPhone Pro 15</h3>
			<h5 className="video-play new-alert">
				Titanium. So strong. So light. So Pro.
			</h5>
			
			<div class="links-wrapper">
				<ul>
					<BuyWatchLink links="#" watch="Watch More" buy="Buy" buy_link="#"/>
				</ul>
			</div>
		</section>
	);
}

export default SecondSection;

// import React from "react";

// import ForAllParts from "../ForAllParts/ForSingle";
// function SecondSection() {
// 	const h1Style = {
// 		paddingTop: "10px",
// 		color: "#ffffff",
// 	};
// 	return (
// 		<section class="second-hightlight-wrapper">
// 			<ForAllParts
// 				h1="iPhone 15 Pro"
// 				h2="Titanium. So strong. So light. So Pro."
// 				links="#"
// 				watch="Learn More"
// 				buyLink="#"
// 				buy="Buy"
// 				h1style={h1Style}
// 			/>
// 		</section>
// 	);
// }

// export default SecondSection;
