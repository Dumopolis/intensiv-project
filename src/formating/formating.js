import moment from "moment/moment";

export const transformDataObject = ({links, data}) => {
	const {title, description, nasa_id,date_created,center,keywords,secondary_creator} = data[0];
	return {
		urlImg: links[0].href,
		title,
		description,
		id: nasa_id,
		date: date_created,
		center,
		keywords,
		creator: secondary_creator,
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
