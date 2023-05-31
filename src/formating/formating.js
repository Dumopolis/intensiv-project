import moment from "moment/moment";

export const transformDataObject = (item) => {
	return {
		urlImg: item.links[0].href,
		title: item.data[0].title,
		description: item.data[0].description,
		id: item.data[0].nasa_id,
		date: item.data[0].date_created,
		center: item.data[0].center,
		keywords: item.data[0].keywords,
		creator: item.data[0].secondary_creator,
	};
};

export const formatForLenght = (text, lenght) => {
	if (text.length > lenght) {
		const sliceDescription = text.slice(0, lenght);
		const lastSpace = sliceDescription.lastIndexOf(" ");
		const finishDescription = sliceDescription.slice(0, lastSpace) + "...";
		return finishDescription;
	}
	return text;
};

export const formatDate = (date) => moment(date).format("DD MMMM YYYY");

export const formatDescription = (text) => {
	const index = text.lastIndexOf("Read more");
	return text.slice(0, index);
};

export const sortByDate = (arr, indexDate) => {
	return arr.sort((a, b) => new Date(b[indexDate]) - new Date(a[indexDate]));
};

export const formatDateWithTime = (date) => {
	const formatDate = moment(date).format("DD.MM");
	const time = moment(date).format("H:mm");
	return [formatDate, time];
};
