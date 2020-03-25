/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-06 13:24:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-25 11:38:00
 */
const commonImages = {
  logo: require('../../assets/images/logo.png').default,
  p0: require('../../assets/images/p0.jpg').default,
  a0: require('../../assets/images/a0.jpg').default,
  a1: require('../../assets/images/a1.jpg').default,
  a2: require('../../assets/images/a2.jpg').default,
  a3: require('../../assets/images/a3.jpg').default,
  a4: require('../../assets/images/a4.jpg').default,
  a5: require('../../assets/images/a5.jpg').default,
  a6: require('../../assets/images/a6.jpg').default,
  a7: require('../../assets/images/a7.jpg').default,
  a8: require('../../assets/images/a8.jpg').default,
  a9: require('../../assets/images/a9.jpg').default,
  a10: require('../../assets/images/a10.jpg').default,
  b0: require('../../assets/images/b0.jpg').default,
  b1: require('../../assets/images/b1.jpg').default,
  b2: require('../../assets/images/b2.jpg').default,
  b3: require('../../assets/images/b3.jpg').default,
  b4: require('../../assets/images/b4.jpg').default,
  b5: require('../../assets/images/b5.jpg').default,
  b6: require('../../assets/images/b6.jpg').default,
  b7: require('../../assets/images/b7.jpg').default,
  b8: require('../../assets/images/b8.jpg').default,
  b9: require('../../assets/images/b9.jpg').default,
  b10: require('../../assets/images/b10.jpg').default,
  b11: require('../../assets/images/b11.jpg').default,
  b12: require('../../assets/images/b12.jpg').default,
  b13: require('../../assets/images/b13.jpg').default,
  b14: require('../../assets/images/b14.jpg').default,
  b15: require('../../assets/images/b15.jpg').default,
  b16: require('../../assets/images/b16.jpg').default,
  b17: require('../../assets/images/b17.jpg').default,
  b18: require('../../assets/images/b18.jpg').default,
  b19: require('../../assets/images/b19.jpg').default,
  b20: require('../../assets/images/b20.jpg').default,
  c0: require('../../assets/images/c0.jpg').default,
  c1: require('../../assets/images/c1.jpg').default,
  c2: require('../../assets/images/c2.jpg').default,
  c3: require('../../assets/images/c3.jpg').default,
  c4: require('../../assets/images/c4.jpg').default,
  c5: require('../../assets/images/c5.jpg').default,
  c6: require('../../assets/images/c6.jpg').default,
  c7: require('../../assets/images/c7.jpg').default,
  c8: require('../../assets/images/c8.jpg').default,
  c9: require('../../assets/images/c9.jpg').default
};

const login = {
  username: 'admin',
  password: '123456',
  authError: {
    username: '用户名错误',
    password: '密码错误'
  }
};

const note = {
  "notes": [{
      "content": "AngularJS - HTML enhanced for web apps!",
      "color": "warning",
      "date": 1410788931159
    },
    {
      "content": "Meeting",
      "color": "primary",
      "date": 1410788631159
    },
    {
      "content": "Keep watching",
      "color": "success",
      "date": 1410788731159
    }
  ]
};

const contact = {
  "items": [{
      "group": "Partner",
      "first": "Bertina",
      "last": "Robert",
      "company": "",
      "mobile": "121 364 135",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Coworkers",
      "first": "Alexandra",
      "last": "Galton",
      "company": "Google Inc.",
      "mobile": "102 394 821",
      "home": "(021) 9876 9485",
      "work": "(021) 2130 3049",
      "notes": ""
    },
    {
      "group": "Family",
      "first": "Angela",
      "last": "Oscar",
      "company": "Max Inc.",
      "mobile": "100 364 135",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Friends",
      "first": "Annabelle",
      "last": "",
      "company": "",
      "mobile": "324 123 123",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Friends",
      "first": "Brenda",
      "last": "Lanny",
      "company": "",
      "mobile": "765 434 565",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Group",
      "first": "Britney",
      "last": "Patricia",
      "company": "",
      "mobile": "432 364 455",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Friends",
      "first": "Blanche",
      "last": "Julian",
      "company": "",
      "mobile": "433 364 234",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Group",
      "first": "Deborah",
      "last": "Darryl",
      "company": "",
      "mobile": "332 431 223",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Group",
      "first": "Elizabeth",
      "last": "",
      "company": "",
      "mobile": "543 453 890",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Partners",
      "first": "Emily",
      "last": "Jolyon",
      "company": "",
      "mobile": "656 565 789",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Partners",
      "first": "Gertrude",
      "last": "",
      "company": "",
      "mobile": "434 987 898",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Family",
      "first": "Gwynne",
      "last": "Rufus",
      "company": "",
      "mobile": "098 888 897",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    },
    {
      "group": "Coworkers",
      "first": "Octavia",
      "last": "Swaine",
      "company": "",
      "mobile": "854 656 879",
      "home": "(021) 1234 8755",
      "work": "(021) 9000 9877",
      "notes": ""
    }
  ]
};

const database = {
  commonImages,
  login,
  note,
  contact
};

export default database;