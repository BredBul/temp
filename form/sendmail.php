<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/Exception.php';
	require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/PHPMailer.php';
    $mail = new PHPMailer(true);
    $mail->CharSet = "utf-8"; 
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);
    //От кого письмо
    $mail->setFrom('name@gmail.com', 'name');
    //Кому отправить
    $mail->addAddress('officialbektur@gmail.com');
    //Тема письма
    $mail->Subject = 'Привет! Это "Фрилансер по жизни"';
	//Рука
	$hand = "Правая";
	if($_POST['hand'] == "left"){
		$hand = "Левая";
	}
    //Тело письма
    $body = '<h1>Встречайте супер письмо!</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
	if(trim(!empty($_POST['hand']))){
        $body.='<p><strong>Рука:</strong> ' .$hand. '</p>';
    }
	if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }

	//Прикрепить файл
	if(!empty($_FILES['image']['tmp_name'])){
		//путь загрузки файла
		$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
		//грузим файл
		if(copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
    $mail->Body = $body;
    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>