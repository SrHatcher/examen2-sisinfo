import{ Length, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {

    @Length(1,1, { message: "Solo puede enviar una letra a la vez!"})
    @IsNotEmpty()
    letter: string;
}

export class CreateWordDto{
    @Length(6,20, { message: "id Categoria no valido!"})
    @IsNotEmpty()
    id: string;

    @Length(3,20, { message: "nombre de palabra no valido!"})
    @IsNotEmpty()
    palabraNueva: string;

}