
<? 

$sitename = "sep"; 
$zakaz = rand(1000015, 1009999); 

$data = $_POST;
if (isset($data['send'])) {
	$data['phone'] = stripslashes($data['phone']);
	$data['phone'] = htmlspecialchars($data['phone']);
	$data['username'] = stripslashes($data['username']);
	$data['username'] = htmlspecialchars($data['username']);	
	$data['email'] = stripslashes($data['email']);
	$data['email'] = htmlspecialchars($data['email']);
	$MessageError = array();



if (strlen(trim($data['username'])) < 1 ) {
	$MessageError[] = 'Введите имя';
}
if (strlen(trim($data['email'])) < 1 )  {
	$MessageError[] = 'Введите email';
}
if (strlen($data['phone']) < 11 ) {
	$MessageError[] = 'Длина телефона должна быть не меньше 12 цифр';
}



if (empty($MessageError)) {

	$pagetitle = "Новая заявка с сайта ".$sitename; 
	$message = "$data['username'] \nТелефон: $data['phone'] \n$Email\nНомер заказа: $zakaz"; 
	mail($data['email'], $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: online1991uristi@mail.ru");


	}
}



 
?>
<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
	<title>Septick</title>
	<meta charset="UTF-8">

	<!-- Media -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Meta for search -->
	<meta name="robots" content="index, follow">
	<meta name="keywords" content="">
	<meta name="description" content="">
	<meta name="author" content="Ivan4ik,Tima,Koluan">
	<meta name="copyright" lang="ru" content="Libils Team">

	<!-- Open Graph Meta -->
	<meta property="og:title" content="Септики">
	<meta property="og:locale" content="ru_RU">
	<meta property="og:description" content="Септики в Сыктывкаре">
	<meta property="og:image" content="img/section about us/bg--about.png">
	<meta property="og:site_name" content="Septick">
	<meta property="og:url" content="https://limonadiks.github.io/">
	<meta property="og:type" content="website">


	<!-- Css -->
	<link rel="stylesheet" href="css/media.css">
	<link rel="stylesheet" href="css/main.css">

	<body>



		<div class="wrapper">
			<!-- Modal -->
			<div class="modal--more">
				<p class="close">X</p>
				<div class="modal--window--more">
					<div class="text--modal--more">
						<h2>Остались вопросы ?</h2>
						<p>Заполните короткую форму и получите бесплатную <br>
							консультацию в течении 15 минут
						</p>
					</div>
					<div class="form--modal--more">
						<form action="#" method="post">
							<input type="text" placeholder="Ваше имя " name="username" required>
							<input type="text" placeholder="Ваш телефон" name="phone" class="phone--ms" required>
							<input type="email" placeholder="Ваш email" name="email" class="phone--ms" required>
							<button type="submit" name="send">Отправить</button>
							<small>Гарантируем, что ваши данные не будут переданы третьим лицам или использоваться в спам-рассылках</small>

						</form>
					</div>
				</div>
			</div>
			<!-- End modal -->
			<header>
				<div class="container">
					<div class="top--header">
						<div class="logo">
							<a href="index.html">Септик.рф</a>
						</div>
						<div class="menu">
							<ul class="menu--nav">
								<li><a href="index.html">Главная</a></li>
								<li><a href="#Catalogs">Каталог</a></li>
								<li><a href="#Contact">Контакты</a></li>
							</ul>
							<div class="phone--number">
								<span> <i class="fas fa-phone-alt"></i> <a href="tel:+79048663074">+7 (904) 866-30-74</a></span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section class="fast--about">
				<div class="container">
					<div class="about">
						<div class="fast--text--about">
							<h1>Септик для частного<br>дома в Сыктывкаре</h1>
							<span>Ознакомьтесь с нашим каталогом <br> и выберете нужный вариант</span>
							<div class="about--ml">
								<p><i class="fas fa-sort-up"></i> Бесплатная консультация и подбор септика</p>
								<p><i class="fas fa-sort-up"></i> Напрямую от производителя </p>
								<p><i class="fas fa-sort-up"></i> Качественные товары</p>
							</div>
							<button class="show--callback">Получить консультацию</button>


						</div>
						<div class="form--callback">
							<form action="#" method="post">
								<h2>Оставьте заявку</h2>
								<p>на бесплатную консультацию <br> и выезд нашего специалиста</p>
								<input type="text" placeholder="Ваше имя" name="username" required >
								<input type="text" class="phone--ms" placeholder="Ваш телефон" name="phone" required >
								<input type="email" placeholder="Ваш email" name="email" class="phone--ms" required>	
								<button type="submit" name="send">Отправить</button>
								<small>Гарантируем, что ваши данные не будут переданы третьим лицам или использоваться в спам-рассылках</small>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section class="catalog" id="Catalogs">
				<div class="container">
					<h2>Каталог</h2>
					<div class="catalog--switch" >
						<span data-id="1">Септики</span>
						<span data-id="2">Cтанция биологической очистки</span>		
					</div>
					<div class="catalog--sort">
						<div class="item--catalog" data-id="1">
							<div class="img--block--catalog">
								<img src="img/catalog/rostok-mini.jpg" alt="mini">
								<button class="show--callback" data-id="1">Подробнее</button>
							</div>
							<div class="models--catalog">
								<ul>
									<li models-who="1" class="active" img-src="img/catalog/rostok-mini.jpg"><span>Росток Мини</span>  <span>29 000₽</span></li>
									<li models-who="2" img-src="img/catalog/rostok-dacha.jpg"><span>Росток Дачный</span>  <span>36 000₽</span></li>
									<li models-who="3" img-src="img/catalog/rostok-countryside.jpg"><span>Росток Загородный</span> <span>53 000₽</span></li>
									<li models-who="4" img-src="img/catalog/rostok-house.jpg"><span>Росток Котгеджный</span>  <span>63 000₽</span></li>
									<li models-who="5" img-src="img/catalog/u1250.jpg"><span>Накопительная емкость U1250 (Подземная)</span><span>32 700₽</span></li>
									<li models-who="6" img-src="img/catalog/u2000.jpg"><span>Накопительная емкость U2000 (Подземная)</span><span>42 900₽</span></li>
								</ul>
							</div>
						</div>
						<div class="item--catalog" data-id="2" style="display: none;">
							<div class="img--block--catalog">
								<img src="img/catalog/astra-3.jpg" alt="astra">
								<button class="show--callback" data-id="1">Подробнее</button>
							</div>
							<div class="models--catalog">
								<ul>
									<li models-who="1" class="active" img-src="img/catalog/astra-3.jpg"><span>Астра-3</span> <span>для 3-х человек</span> <span>63 325₽</span></li>
									<li models-who="2" img-src="img/catalog/astra-4.jpg"><span>Астра-4</span> <span>для 4-х человек</span> <span>68 425₽</span></li>
									<li models-who="3" img-src="img/catalog/astra-5.jpg"><span>Астра-5 ЛОНГ</span> <span>для 5-х человек</span> <span>98 940₽</span></li>
									<li models-who="4" img-src="img/catalog/astra-6.jpg"><span>Астра-6</span> <span>для 6-х человек</span> <span>82 535₽</span></li>
									<li models-who="5" img-src="img/catalog/ergobox-4.jpg"><span>ERGOBOX 4S</span> <span>для 4-х человек</span> <span>64 600₽</span></li>
									<li models-who="6" img-src="img/catalog/ergobox-5.jpg"><span>ERGOBOX 5S</span> <span>для 5-х человек</span> <span>76 300₽</span></li>
								</ul>
							</div>
						</div>
					</div>
					<p class="assort--callack--can"> Ознакомиться со всем ассортиментом можно <span class="show--callback">оставив заявку</span></p>
				</div>
			</section>
			<footer id="Contact">
				<div class="container">
					<div class="nav--footer">
						<a href="index.html">Главная</a>
						<a href="#Catalogs">Каталог</a>
						<a href="#Contact">Контакты</a>
					</div>
				</div>
				<hr>
				<div class="container">
					<div class="soc--about--footer">
						<div class="fast--find" >
							<span> <i class="fas fa-phone-alt"></i> <a href="tel:+79048663074">+7 (904) 866-30-74</a></span>
						</div>
						<div class="social--btn">
							<a href="#"><i class="fab fa-vk"></i></a>
							<a href="#"><i class="fab fa-facebook-f"></i></a>
						</div>
					</div>
					<div class="design--home">
						<a href="index.html">Септик.рф</a>
						<p>Дизайн и разработка сайта <a href="https://vk.com/libils_team">Libils Team</a></p>

					</div>
				</div>
				
		</footer>
	</div>


	<!-- Optional JS and Jquery -->
	<script src="https://kit.fontawesome.com/de8f891afd.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"
	integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
	crossorigin="anonymous"></script>
	<script src="js/main.js" type="text/javascript"></script>
</body>
</html>