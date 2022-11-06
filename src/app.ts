import express, {json, Request, Response} from 'express';
import {CategoriesController} from './controllers/categories.controller';
import Connection from './database/connection';

class App{


    public express: express.Application;
    private connection:Connection | undefined;

    categoriesController: CategoriesController;

    constructor(){
        this.express = express();
        this.middlewares();
        this.controllers();
        this.db();
        this.routes();
    }

    middlewares(){
        this.express.use(json());
    }

    routes(){
        this.express.use('/api', this.categoriesController.router);
    }

    db(){
        this.connection = new Connection();
        this.connection.connection
        .sync()
        .then(() => {
            console.log ('Database is Connected');
        })
        .catch((err) => {
            console.log('Error', err)
        });
    }

    listen(port: number){
        this.express.listen(port,
            () => console.log(`Server run in: http://localhost:${port}`));
    }

    controllers(){
        this.categoriesController = new CategoriesController();
    }
}

export default new App();