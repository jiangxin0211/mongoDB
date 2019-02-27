var db = connect('aa');

var userList = db.user.find();

userList.forEach(function (user) {
    printjson(user);
})