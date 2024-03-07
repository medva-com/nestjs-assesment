import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    public email: string

    @IsString()
    public va_id: string

    @IsString()
    @IsOptional()
    public client_id: string

    @IsArray()
    @IsOptional()
    public groups: string[]
}
