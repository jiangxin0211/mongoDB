var newHobby = ['book', 'paint','b-box']
db.user.update({name: "xiaobai"}, {$addToSet: {hobby: {$each: newHobby}}});
db.user.update({name: "xiaobai"}, {$set: {'hobby.0': 'bigbit'}});
print('update hobby success');