import {Gallery} from "next-gallery";

const images = [
	{src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9},
	{src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9},
	{src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9},
	{src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9},
	{src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9},
	{src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9},
];
const widths = [500, 1000, 1600, 2000, 2400, 2800];
const ratios = [2.2, 4, 6, 8, 10, 12, 14];

export default function MyGallery() {
	return <Gallery {...{images, widths, ratios}} />;
}
