"use client";

import React, {useEffect, useId, useRef, useState} from "react";
// import Heading from "./Heading/Heading";
import CardCategory3 from "./CardCategories/CardCategory3";
// @ts-ignore

import Glide from "@glidejs/glide/dist/glide.esm";
import Gallery from "./Gallery/Gallery1";
import Next from "@/shared/NextPrev/Next";

const DiscoverMoreSlider = () => {
	const sliderRef = useRef(null);

	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		const OPTIONS: Partial<Glide.Options> = {
			// direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
			perView: 2.8,
			gap: 32,
			bound: true,
			breakpoints: {
				1280: {
					gap: 28,
					perView: 2.5,
				},
				1279: {
					gap: 20,
					perView: 2.15,
				},
				1023: {
					gap: 20,
					perView: 1.6,
				},
				768: {
					gap: 20,
					perView: 1.2,
				},
				500: {
					gap: 20,
					perView: 1,
				},
			},
		};
		if (!sliderRef.current) return;

		let slider = new Glide(sliderRef.current, OPTIONS);
		// slider.mount();
		setIsShow(true);
		return () => {
			slider.destroy();
		};
	}, [sliderRef]);

	return (
		<div ref={sliderRef} className={`container  ${isShow ? "" : "invisible"}`}>
			{/* <Heading
				className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
				desc=""
				rightDescText="Good things are waiting for you"
				hasNextPrev>
				Inspirations for home interior designs.
			</Heading> */}
			<div className={` flex flex-col sm:flex-row items-center justify-between align-center`}>
				<div className=" mb-4">
					<h2 className="text-3xl md:text-4xl font-semibold">Inspirations for home interior designs.</h2>
					<span className=" font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
						Inspirations for home interior designs
					</span>
				</div>

				<div className="mt-4 flex items-center justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
					View all
					<Next onClickNext={() => {}} />
				</div>
			</div>
			<Gallery />
		</div>
	);
};

export default DiscoverMoreSlider;
