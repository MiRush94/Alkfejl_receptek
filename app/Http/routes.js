'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

//Route.on('/').render('main')
// Route.get('/hello', function * (req,res){
//     yield res.sendView('welcome');
// })
Route.get('/', 'RecipeController.index')
Route.get('/recipes/create', 'RecipeController.create')
Route.post('/recipes/create', 'RecipeController.doCreate')
Route.get('/recipes/:id', 'RecipeController.show')