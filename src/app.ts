import express, {json, Request, Response} from 'express';
import {CategoriesController} from './controllers/categories.controller';

class App{


    public express: express.Application;

    categoriesController: CategoriesController;

    constructor(){
        this.express = express();
        this.middlewares();
        this.controllers();
        this.routes();
    }

    middlewares(){
        this.express.use(json());
    }

    routes(){
        this.express.use('/api', this.categoriesController.router);
    }

    listen(port: number){
        this.express.listen(port,
            () => console.log(`Server running in: http://localhost:${port}`));
    }

    controllers(){
        this.categoriesController = new CategoriesController();
    }
}

export default new App();