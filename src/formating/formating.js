import moment from "moment/moment";

export const transformDataObject = (item) => {
	return {
		urlImg: item.links[0].href,
		title: item.data[0].title,
		description: item.data[0].description,
		id: item.data[0].nasa_id,
		date: item.data[0].date_created,
	};
};

export const formatForLenght = (text, lenght) => {
	if (text.length > lenght){
		const sliceDescription = text.slice(0, lenght);
		const lastSpace = sliceDescription.lastIndexOf(" ");
		const finishDescription = sliceDescription.slice(0, lastSpace) + "...";
		return finishDescription;
	}
	return text;
};

export const formatDate = (date) => moment(date).format("DD MMM YYYY");
