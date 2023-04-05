export const urlify = (item) => ({
	url: '#!',
	...(typeof item === 'object' ? item : { title: item })
});
