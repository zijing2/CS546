var fileData = require("./fileData");
var testMetrics = require("./textMetrics");


var chapter1Path = "/Users/huangzijing/Downloads/chapter1.txt";
var chapter2Path = "/Users/huangzijing/Downloads/chapter2.txt";
var chapter3Path = "/Users/huangzijing/Downloads/chapter3.txt";

try {
	var fileRdPromise1 = fileData.getFileAsString(chapter1Path);
	fileRdPromise1.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise1 = fileData.saveStringToFile("chapter1Result.txt",saveText);
		fileWtPromise1.then((rtn)=>{
			console.log("finish analyse chapter1");
			},(err)=>{
				console.log(err);
			});
	});
	
	var fileRdPromise2 = fileData.getFileAsString(chapter2Path);
	fileRdPromise2.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise2 = fileData.saveStringToFile("chapter2Result.txt",saveText);
		fileWtPromise2.then((rtn)=>{
			console.log("finish analyse chapter2");
			},(err)=>{
				console.log(err);
			});
	});	

	var fileRdPromise3 = fileData.getFileAsString(chapter3Path);
	fileRdPromise3.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise3 = fileData.saveStringToFile("chapter3Result.txt",saveText);
		fileWtPromise3.then((rtn)=>{
			console.log("finish analyse chapter3");
			},(err)=>{
				console.log(err);
			});
	});	


} catch (e) {
	console.log(e);
}