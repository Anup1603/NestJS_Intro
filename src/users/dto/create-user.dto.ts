import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsEnum(['ENGINEER', 'INTERN', 'ADMIN'], {
    message: 'Role must be one of the following: ENGINEER, INTERN, ADMIN',
  })
  role: 'ENGINEER' | 'INTERN' | 'ADMIN';
}
