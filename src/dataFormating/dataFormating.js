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

export const formatDescription = (description) => {
	const sliceDescription = description.slice(0, 120);
	const lastSpace = sliceDescription.lastIndexOf(" ");
	const finishDescription = sliceDescription.slice(0, lastSpace) + "...";
	return finishDescription;
};

export const formatDate = (date) => moment(date).format("DD MMM YYYY");
