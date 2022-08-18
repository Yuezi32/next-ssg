<?php
	/**
	 * 请将此文件放在支持PHP的Web Server中。
	 * 为配合本Next.js演示项目，该文件的Web访问地址应为http://127.0.0.1/api/data/php
	 */ 

	// 通过GET接收id，并返回对应的数据
	$id = $_GET['id'];
	switch ($id) {
		case 1:
			$data = [
				"name" => "Tom",
				"age"=> 21,
				"favorite"=> "reading, sport"
			];
			break;
		case 2:
			$data = [
				"name"=> "Jerry",
				"age"=> 22,
				"favorite"=> "art, music"
			];
			break;
		case 3:
			$data = [
				"name"=> "Bill",
				"age"=> 23,
				"favorite"=> "comic, movie"
			];
			break;
		default:
			$data = [];
			break;
	}
	$data['id'] = $id;
	$result = array(
		"code"=> 200,
		"message" => "OK",
		"data" => $data
	);

	echo json_encode($result);