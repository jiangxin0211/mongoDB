var user1 = {
    name: "xiaobai",
    age: "13",
    hobby: ['dance','sing','play'],
    pc: {
        brand: 'apple',
        price: 10000
    }
}

var user2 = {
    name: "xiaolan",
    age: "15",
    hobby: ['dance','sing','play'],
    pc: {
        brand: 'apple',
        price: 9000
    }
}

var user3 = {
    name: "xiaohuang",
    age: "19",
    hobby: ['dance','sing','play'],
    pc: {
        brand: 'apple',
        price: 8000
    }
}

var db = connect('aa');
db.user.insert([user1,user2,user3]);
print('insert data three success');



db.user.update({name: "xiaobai"},{// 更新后的内容要全部copy一遍，很麻烦；可使用$set更新指定的key
    name: "xiaobai",
    age: "30",
    hobby: ['dance','sing','play'],
    pc: {
        brand: 'apple',
        price: 10000
    }
})
