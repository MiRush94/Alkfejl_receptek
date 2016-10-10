'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
    recipe(){
        return this.hasMany('App/Model/Recipe')
    }
}

module.exports = Category
