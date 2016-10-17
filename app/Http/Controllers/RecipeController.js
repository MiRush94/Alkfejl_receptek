'use strict'
const Database = use('Database')
const Category = use('App/Model/Category')
const Validator = use('Validator')

class RecipeController {
    *index(request,response){

        const categories = yield Category.all()

        for(let category of categories){
            const recipes = yield category.recipes().limit(3).fetch();
            category.topRecipes = recipes.toJSON()
        }
        yield response.sendView('main',{
            name: 'Mira',
            categories: categories.toJSON() 
        })
    }

    *create(request, response){
        const categories = yield Category.all()
        yield response.sendView('recipeCreate', {
            categories: categories.toJSON()
        });
    }

    *doCreate(request, response){
        const recipeData = request.all()
        
        const rules ={
            name:'required',
            ingredients: 'required',
            instructions: 'required',
            category_id: 'required|integer'
        };

        const validation = yield Validator.validateAll(recipeData, rules);

        if(validation.fails()){
            response.send("Jaj");
        }
    }
}

module.exports = RecipeController
