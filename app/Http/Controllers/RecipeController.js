'use strict'

class RecipeController {
    *index(request,response){
        yield response.sendView('main',{
            name:"Mira",
            categories:[
                {
                    name:'Levesek',
                    recipes:[
                        'Leves 1',
                        'Leves 2'
                        ]
                },
                {
                    name:"Főzelék",
                    recipes: [
                        'Főzelék 1',
                        'főzelék 2'
                    ]
                },
                {
                    name:"Húsok",
                    recipes: [
                        'Csirkepörkölt 1',
                        'sültcsirke 2'
                    ]
                }
            ]
        })
    }
}

module.exports = RecipeController
