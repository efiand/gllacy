export default ({ appData }) => ({
	appData: {
		page: {
			...appData.page,
			error: appData.page.error || 'Страница не найдена',
			pageTitle: `Ошибка ${appData.status || '404'}`
		}
	}
});
