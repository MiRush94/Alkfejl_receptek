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
Route.get('/recipe/create', 'RecipeController.create')
Route.post('/recipe/create', 'RecipeController.doCreate')
Route.get('/recipe/:id', 'RecipeController.show')
Route.get('/editRecipe/:id', 'RecipeController.showEdit')
Route.post('/editRecipe/:id', 'RecipeController.edit')