import { html } from '../scripts/common/utils.js';
import { urlify } from './common/helpers.js';

export default ({ error, pageName }) => ({
	appData: {
		page: {
			error,
			goods: [
				{
					description: html`Сливочное мороженое с&nbsp;малиновым джемом`,
					price: 310,
					title: 'Малинка'
				},
				{
					description: html`Фисташковый пломбир с&nbsp;кусочками шоколада`,
					price: 340,
					title: 'Фисташка'
				},
				{
					description: html`Крем-брюле с&nbsp;черничным джемом`,
					price: 330,
					title: 'Черника'
				},
				{
					description: html`Ванильный пломбир со&nbsp;сладкой посыпкой`,
					price: 320,
					title: 'Бабл-гам'
				},
				{
					description: 'Сливочное мороженое с ежевичным джемом',
					price: 330,
					title: 'Ежевика'
				},
				{
					description: html`Сливочный пломбир с&nbsp;банановым вкусом`,
					price: 340,
					title: 'Банан'
				},
				{
					description: 'Классический шоколадный пломбир',
					price: 270,
					title: 'Шоколадка'
				},
				{
					description: 'Сливочный пломбир с клубничным вкусом',
					price: 300,
					title: 'Клубничка'
				},
				{
					description: 'Освежающий лимонный сорбет',
					price: 310,
					title: 'Лимон'
				},
				{
					description: 'Сливочный пломбир с ментоловым сиропом',
					price: 320,
					title: 'Ментол'
				},
				{
					description: 'Фисташковый пломбир с шоколадным сиропом',
					price: 360,
					title: 'Орешек'
				},
				{
					description: 'Классическое крем-брюле',
					price: 280,
					title: 'Крем-брюле'
				}
			].map((good, i) => ({ ...good, id: i + 1 })),
			navLinks: [
				{
					children: [
						'Новинки',
						{ title: 'Сливочное', url: 'catalog.html' },
						'Щербеты',
						html`Фруктовый&nbsp;лед`,
						'Мелорин'
					].map(urlify),
					title: 'Каталог'
				},
				urlify('Доставка и оплата'),
				urlify('О компании')
			],
			offers: [
				{
					id: 1,
					quantity: 1
				},
				{
					id: 4,
					quantity: 1.5
				}
			],
			pageName,
			socials: [
				{
					alias: 'telegram',
					title: 'Мы в Telegram',
					url: 'https://t.me/htmlacademy'
				},
				{
					alias: 'vk',
					title: 'Мы в Vkontakte',
					url: 'https://vk.com/htmlacademy'
				},
				{
					alias: 'youtube',
					title: 'Мы в Youtube',
					url: 'https://www.youtube.com/user/htmlacademyru'
				}
			],
			tel: '+7 800 555-86-28'
		}
	},
	pixelperfect: JSON.stringify({ breakpoints: [1200], ext: 'webp' }),
	projectName: 'Sedona'
});
