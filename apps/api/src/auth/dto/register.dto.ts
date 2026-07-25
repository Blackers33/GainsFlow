import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  // L'UUID généré localement par le mobile en mode Invité.
  // Il devient l'id du compte serveur
  @IsString()
  @IsNotEmpty()
  id!: string

  @IsEmail()
  email!: string

  @IsString()
  @MinLength(8)
  password!: string
}
