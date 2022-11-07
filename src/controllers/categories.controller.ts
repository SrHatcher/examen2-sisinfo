import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Router, Request, Response } from "express";
import { CreateCategoryDto, CreateWordDto } from "../dtos/create-category.dto";
import categoriesService from "../services/categories.service";

export class CategoriesController{

    router = Router();

    constructor(){
        this.initRoutes();

    }

    initRoutes(){
        this.router.get('/categories', this.getList);

        this.router.get('/categories/:id', this.getOne);

        this.router.post('/categories', this.create);

        this.router.post('/categories/endpoint', this.createWord);

    };

    async getList(req: Request, res: Response): Promise <Response> 
    { 
        const categories = await categoriesService.getList();
        return res.json(categories);
    }

    async getOne(req: Request, res: Response): Promise <Response>
    {
        const { id } = req.params;
        const category = await categoriesService.getOne(id);

         return res.json(category);
    }
    async create(req: Request, res: Response): Promise <Response>
    {
        const payload = req.body;

        let contenidoPeticion = plainToClass(CreateCategoryDto, payload);

        const errors = await validate(contenidoPeticion);

        if(errors.length){

            console.log(errors);
            
            return res.status(400).json({
                "Validation-errors" : errors
            });
        }

        return res.json(await categoriesService.create(contenidoPeticion));

    }

    async createWord(req: Request, res: Response): Promise <Response>
    {
        const payload = req.body;

        let contenidoPeticion = plainToClass(CreateWordDto, payload);

        const errors = await validate(contenidoPeticion);

        if(errors.length){

            console.log(errors);
            
            return res.status(400).json({
                "Validation-errors" : errors
            });
        }

        return res.json(await categoriesService.createWord(contenidoPeticion));

    }
}
