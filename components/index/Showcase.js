import Image from "next/image";
import ShrinkForm from "./ShrinkForm";

// Index SHOWCASE-FORM
export default function Showcase() {
	return (
		<div className="py-24 w-4/5 2xl:w-1/2 mx-auto">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<div className="w-full md:w-3/4 mr-8">
					<h1 className="text-5xl lg:text-6xl font-black tracking-wide text-gray-600">
						<span className="text-green-500">
							Simple & Minimalist
						</span>{" "}
						<br /> URL Shrinker
					</h1>
					<p className="pt-4 text-2xl md:text-3xl tracking-wide font-light text-gray-500">
						Shrink unlimited long urls for free
					</p>
					<ShrinkForm />
				</div>
				<div className="">
					<Image
						src="/showcase.svg"
						height={450}
						width={450}
						alt="Better Grue Banner Image"
					/>
				</div>
			</div>
		</div>
	);
}
