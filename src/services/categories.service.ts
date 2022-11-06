import { Request, Response } from "express";
import { CreateCategoryDto } from '../dtos/create-category.dto';

class CategoriesService{

    private categories = [

        {id: 1, name: 'Escritorios', description: ""},
        {id: 2, name: 'Computadoras', description: ""},

    ]
    public async getList(){
       
        return this.categories;
    }

    public async getOne(id: number){
        const category = this.categories.find((c) => c.id === id);
        return category;
    }
 

    public async create(createCategoryDto: CreateCategoryDto){
        
        let id = Math.floor(Math.random() * 1000);
        this.categories.push({
            id,
            ...createCategoryDto
        });

        return this.getOne(id);
      }

     public async update(req: Request, res: Response): Promise<Response> {
       
        return res.json({
            "Categories" : "Esto crea una categoria",
            "Metodo": "GET"
          });
      }

      
     public async delete(req: Request, res: Response): Promise<Response> {
        return res.json({
            "Categories" : "Esto borra una categorias",
            "Metodo": "GET"
        });
      }
          
}

export default new CategoriesService();
