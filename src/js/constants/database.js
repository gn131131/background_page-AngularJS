/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-06 13:24:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 16:26:51
 */
const commonImages = {
  logo: require('../../assets/images/logo.png').default,
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
  a10: require('../../assets/images/a10.jpg').default
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