import Mock from 'mockjs'
Mock.mock('http://localhost:8080/user', {
    'name': '@name',
    'email': '@email',
    'agel|1-10': 5
});
Mock.mock('http://localhost:8080/menu', {
    'id': '@increment',
    'name': 'menu',
    'order|10-20': 12
});