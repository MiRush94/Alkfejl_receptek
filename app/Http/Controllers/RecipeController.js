'use strict'
const Database = use('Database')
const Category = use('App/Model/Category')

class RecipeController {
    *index(request,response){

        const categories = yield Category.all()

        for(let category of categories){
            const recipe = yield category.recipes().limit(3).fetch();
            category.topRecipes = recipes.toJSON()
        }
        yield response.sendView('main',{
           categories: categories.toJSON() 
        })
    }
}

module.exports = RecipeController
