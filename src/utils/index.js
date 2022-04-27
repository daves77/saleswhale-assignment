// insert commas into long numbers for better readibility
export const formatNumber = (number) => {
	return number.toLocaleString(undefined, { minimumFractionDigits: 0 });
};

export const truncateDescriptionText = (text) => {
	return `${text.slice(0, 85)} ...`;
};
