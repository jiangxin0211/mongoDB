var modify = {
    findAndModify: 'user',
    query: {name: "xiaobai"},
    update: {$set: {age: 23}},
    new: true // true表示返回修改后的结果，false表示返回原来的结果
};

var result = db.runCommand(modify);
printjson(result);
