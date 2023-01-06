import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";


@Component({
    selector: "app-recipe-list",
    templateUrl:"./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit{
    recipes: Recipe[]=[
        new Recipe("Chicken Tandori","Simple Chicken Tandori","https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-1.jpg"),
        new Recipe("Chicken Tandori","Simple Chicken Tandori","https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-1.jpg")
    ];

    constructor(){};

    ngOnInit(): void {
        
    };

}