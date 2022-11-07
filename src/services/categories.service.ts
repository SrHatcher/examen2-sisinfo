import { Request, Response } from "express";
import { Index } from "sequelize-typescript";
import { CreateCategoryDto } from '../dtos/create-category.dto';

class CategoriesService{

    private categories = {
        frutas: ['pera', 'manzana', 'banana'],
        paises: ['honduras','panama','belice']
    }

    private palabraActual : string
    private palabraDisplay : string
    private vidas : number
    private currentCategory : string
    private arrayLetras = []
    private juegoGanado : number = 0
    private nivel : number = 1

    public async getList(){
        let categorias = Object.keys(this.categories)

        return categorias;
    }

    public async getOne(categoryName: string){
        if(!this.currentCategory){
            this.currentCategory = this.categories[categoryName]
            this.palabraActual = this.currentCategory[this.nivel - 1]
            this.vidas = Math.floor(this.palabraActual.length / 2) + 1
            this.palabraDisplay = this.palabraActual[0]
            this.arrayLetras.push(this.palabraActual[0])

            for (let i = 1; i < this.palabraActual.length; i++) {
                this.palabraDisplay = this.palabraDisplay + " _"
                this.arrayLetras.push(" _")
            }
        }

        let output

        if(this.juegoGanado === 0){
            output = [
                `palabra: ${this.palabraDisplay}`,
                `nivel ${this.nivel}`,
                `intentos: ${this.vidas}`
            ]
        }else{
            if(this.nivel>=this.currentCategory.length){
                output = [
                    `palabra: ${this.palabraDisplay}`,
                    `nivel ${this.nivel}`,
                    `intentos: ${this.vidas}`,
                    `felicidades! has pasado al siguiente nivel!`,
                    `Has terminado todos los niveles de esta categoria!`
                ]

                this.nivel = 1
            }else{
                output = [
                    `palabra: ${this.palabraDisplay}`,
                    `nivel ${this.nivel}`,
                    `intentos: ${this.vidas}`,
                    `felicidades! has pasado al siguiente nivel!`,
                    `Has de nuevo la peticion a la misma categoria para recargar`
                ]

                this.nivel++
            }
            
            
            this.currentCategory = undefined
            this.palabraActual = undefined
            this.vidas = undefined
            this.palabraDisplay = undefined
            this.arrayLetras = []
            this.juegoGanado = 0
        }
        

        return output;
    }
 

    public async create(contenidoPeticion: CreateCategoryDto){
        const letra = contenidoPeticion.letter
        const hasLetter = this.palabraActual.includes(letra)

        if(hasLetter){
            this.arrayLetras = this.arrayLetras.map(((valorActual, index) => {
                if(this.palabraActual[index]==letra){
                    return letra
                }else{
                    return valorActual
                }
            }))

            this.palabraDisplay = ""
            for(let i=0; i< this.palabraActual.length; i++){
                this.palabraDisplay = this.palabraDisplay + this.arrayLetras[i] 
            }

            if(this.palabraActual == this.palabraDisplay){
                this.juegoGanado = 1
            }
        }else{
            this.vidas -= 1
        }

        return this.getOne(this.currentCategory);
      }          
}

export default new CategoriesService();
