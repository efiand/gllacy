export const html = (raw, ...values) => String.raw({ raw }, ...values);

export const getTelLink = (tel) => `tel:+${tel.replace(/\D/g, '')}`;

// Выбор словоформы по значению числа
const PLURAL_THRESHOLD = 5;
export const getWordAfterNum = (num, [form1, form2 = form1, form3 = form2]) => {
	const lastDigit = num % 10;

	if (!num || (num % 100) - lastDigit === 10 || lastDigit >= PLURAL_THRESHOLD) {
		return form3;
	}

	if (lastDigit === 1) {
		return form1;
	}

	return form2;
};
