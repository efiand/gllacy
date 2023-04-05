<form class="login" action="https://echo.htmlacademy.ru" method="post">
	<p class="login__title">Личный кабинет</p>

	<p class="login__group">
		<label class="visually-hidden" for="login-email">E-mail</label>
		<input
			class="field"
			id="login-email"
			name="email"
			type="email"
			value="email@example.com"
			placeholder="E-mail"
			required
		/>
	</p>
	<p class="login__group">
		<label class="visually-hidden" for="login-password">Пароль</label>
		<input
			class="field"
			id="login-password"
			name="password"
			type="password"
			value="000000"
			placeholder="Пароль"
			required
		/>
	</p>

	<div class="login__footer">
		<button class="button button--primary" type="submit">Войти</button>

		<ul class="login__links">
			<li><a class="login__link" href="#!">Забыли пароль?</a></li>
			<li><a class="login__link" href="#!">Регистрация</a></li>
		</ul>
	</div>
</form>
