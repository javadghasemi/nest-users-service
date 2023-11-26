import { CreateUserRequest } from './users.pb';
import { IsString } from 'class-validator';

export class CreateUserRequestDto implements CreateUserRequest {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

// export class CreateUserRequestDto
