import{ Length, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {

    @Length(1,1, { message: "Solo puede enviar una letra a la vez!"})
    @IsNotEmpty()
    letter: string;
}