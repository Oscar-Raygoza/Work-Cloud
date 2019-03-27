db.publications.insert({
    "views" : 0,
    "likes" : 0,
    "title" : "Simpsonizados",
    "filename" : "01ykut6.mp4",
    "description" : "Nuevo capitulo de los simpsons temporada 6x12",
    "timestanp" : ISODate("2019-03-25T05:42:08.998Z"),
    "updateAt": ISODate("2019-03-25T05:42:08.998Z"),
    "group_id": "1das3e324esvczwe2", 
    "__v" : 0
})

db.groups.insert({
    "name": "Facebook React",
    "filenameIcon": "oe3osa3.png",
    "description": "This group is to compare doubts about the react framework",
    "timestanp" : ISODate("2019-03-25T05:42:08.998Z"),
    "members": 0
})

db.users.insert({
    "name": "Oscar Eduardo",
    "lastname": "Raygoza",
    "email": "oscar.eduardo.raygoza@gmail.com",
    "number": "4651353138",
    "sex": "M",
    "image_id": "wq415dsa6w",
    "timestanp" : ISODate("2019-03-25T05:42:08.998Z"),
    "password_hash": "jdas1584ff8ds4875d1sf15215c81d0s48csd84ew43"
})

db.comments.insert({
    "id_user": "sadas15418415s8d4",
    "id_publication": "",
    "comment":"Wow this is incredible",
    "timestanp" : ISODate("2019-03-25T05:42:08.998Z"),
    "updateAt" : ISODate("2019-03-25T05:42:08.998Z")
})

db.user_has_group.insert({
    "id_user": "5c99b7cecd9a4cc7014bc6cc",
    "id_group":"5c99b7cecd9a4cc7014bc6cb",
})
db.user_has_group.insert({
    "id_user": "5c99b7cecd9a4cc7014bc6cc",
    "id_group":"5c99c2bdcd9a4cc7014bc6cf",
})
db.user_has_group.insert({
    "id_user": "5c99b7cecd9a4cc7014bc6cc",
    "id_group":"5c99c2bdcd9a4cc7014bc6d0",
})
db.user_has_group.insert({
    "id_user": "5c99b7cecd9a4cc7014bc6cc",
    "id_group":"5c99c2bdcd9a4cc7014bc6d1",
})


db.user_has_group.insert({
    "id_user": "5c99cd30cd9a4cc7014bc6d4",
    "id_group":"5c99b7cecd9a4cc7014bc6cb",
})
db.user_has_group.insert({
    "id_user": "5c99cd30cd9a4cc7014bc6d4",
    "id_group":"5c99c2bdcd9a4cc7014bc6cf",
})
db.user_has_group.insert({
    "id_user": "5c99cd30cd9a4cc7014bc6d3",
    "id_group":"5c99c2bdcd9a4cc7014bc6d0",
})
db.user_has_group.insert({
    "id_user": "5c99cd30cd9a4cc7014bc6d3",
    "id_group":"5c99c2bdcd9a4cc7014bc6d1",
})