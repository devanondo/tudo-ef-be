### [Live Link](https://powerful-smock-colt.cyclic.app/)

This is the project root api refference.

#### Initialization

`Installation and Initialization`

1.  Clone this url : `https://github.com/devanondo/tudo-ef-be` then open the `rudo-ef-be` folder then open `terminal` and then run command `npm i -g` then `npm install`.
2.  Then setup the `environment` variable `config/config.env`
3.  Install `prettier` extension on vsCode for code formatting.
4.  Finally `npm run dev` or `npm start`.

###

#### Credentials:

```bash
🚀 Register User
  {
    "name":"Josheph Frankline",
    "email":"josheph123@gmail.com",
    "password":"password"
     avatar: {
        public_id: {
           image public_id / Cloudinary
        },
        url: {
           Image Url
        },
    },
  }
```

```bash
🚀 Login User
  {
    "email":"tudo.example@example.com",
    "password":"password"
  }
```

```bash
🚀 Login User--> Response
  {
    "success": true,
    "user": {
        "avatar": {
            "public_id": "avatars/f9cwdakj86eaq4p6swjt",
            "url": "http://res.cloudinary.com/dhcqftzu3/image/upload/v1650856999/ avatars/f9cwdakj86eaq4p6swjt.jpg"
        },
        "_id": "6206e93491db893bdadb501c",
        "name": "Anondo",
        "email": "tudo.example@example.com",
        "role": "admin",
        "createdAt": "2022-02-11T22:54:44.272Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDZlOTM0OTFkYjg5M2JkYWRiNTAxYyIsImlhdCI6MTY4ODg5OTMxNiwiZXhwIjoxNjg5MzMxMzE2fQ.o6eM3MPGRg9hIgMiyXdRDefSblbv8S5hY6A27kfQ4Ek"
}
```

### Documentation

[Whole API Documentation](https://documenter.getpostman.com/view/16600453/2s93zH2Jj9)
