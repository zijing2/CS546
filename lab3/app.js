const todoList = require("./todo");
const connection = require("./mongoConnection");


//1. Create a task with the following details:
var firstTaskId;
var firstTask = {
    title: "Ponder Dinosaurs",
    description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
};

var addFirstTask = todoList.createTask(firstTask.title,firstTask.description)
						.then((data,err) => {
							firstTaskId = data._id;
							console.log(data);	
																				
						});

//2. Log the task, and then create a new task with the following details:
var secondTask = {
    title: "Play Pokemon with Twitch TV",
    description: "Should we revive Helix?"
};

var addSecondTask = addFirstTask.then(() => {
    return todoList.createTask(secondTask.title,secondTask.description)
						.then((data) => {

						});				
})

//3. After the task is inserted, query all tasks and log them
var getAllTask = addSecondTask.then(() => {
	return todoList.getAllTasks()
					.then((data) => {
							data.toArray((err,dataArr) => {
								console.log(dataArr);
							});							
						});
					
});


//4. After all the tasks are logged, remove the first task
var removeFirstTask = getAllTask.then(() => {
	//console.log(firstTaskId);
	return todoList.removeTask(firstTaskId).then(()=>{
		//console.log("id:"+firstTaskId+" delete suceess");
	});
						
});

//5. Query all tasks and log them
var getAllTaskSec = removeFirstTask.then(()=>{

	return todoList.getAllTasks()
					.then((data) => {
							remainTask = data;
							data.toArray((err,dataArr) => {
								console.log(dataArr);
							});							
						});
					
});

//6. Complete the remaining task
var runCompleteTask = getAllTaskSec.then(()=>{

		return todoList.getAllTasks()
					.then((data) => {
							//console.log(data);
							data.toArray((err,dataArr) => {
								for (var i = dataArr.length - 1; i >= 0; i--) {
									todoList.completeTask(dataArr[i]['_id'],dataArr[i]['title'],dataArr[i]['description']);
									//console.log(dataArr[i]['_id']+':complete');
								};
													
								//7. Query and log the remaining task.
								todoList.getAllTasks()
									.then((data) => {
											data.toArray((err,dataArr) => {
												console.log(dataArr);
											});							
										})
									.then(() => {
											return connection();
										}).then((db) => {
											return db.close();
										});
								
							})							
						});
				
									 
});



// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://localhost:27017/lab3';  


// const dbConnection = require("./mongoConnection");



// var insertData = function(db, callback) {  
//     //连接到表  
//     var collection = db.collection('todoItems');
//     //插入数据
//     var data = [{"name":'huangzijing1',"age":21},{"name":'huangzijing2',"age":22}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }



// var selectData = function(db, callback) {  
//   //连接到表  
//   var collection = db.collection('todoItems');
//   //查询数据
//   var whereStr = {"name":'huangzijing'};
//   // collection.find(whereStr).toArray(function(err, result) {
//   //   if(err)
//   //   {
//   //     console.log('Error:'+ err);
//   //     return;
//   //   }     
//   //   callback(result);
//   // });

// collection.findOne({_id:"a25145f0-88f1-11e6-ad64-79e095f5e0e7"},function(err,data){console.log(12312312,data,err);});
// }

//  dbConnection().then((db)=>{
//   console.log("连接成功！");
//   insertData(db, function(result) {
//         console.log(result);
//         db.close();
//     });
//   selectData(db, function(result) {
//     //console.log(result);
//     db.close();
//   });
// });
// 
// 
// let getTask = todoList.getTask("2f44ddb0-88fb-11e6-bf0e-c9fd4dfe52dd")
					// .then((data) => {
					// 		//console.log(data);						
					// 	}).then(() => {
					// 		//console.log(123123);
					// 		return connection();
					// 	}).then((db) => {
					// 		return db.close();
					// 	});
 
