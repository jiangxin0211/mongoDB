var userName = "zhangsan";
var time = Date.parse(new Date());
var data = {
    "username": userName,
    "registTime": time
};

var db = connect('aa');
db.user.insert(data);
print('insert success');