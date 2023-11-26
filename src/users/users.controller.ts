import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequestDto } from './users.dto';
import { CreateUserResponse, USERS_SERVICE_NAME } from './users.pb';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod(USERS_SERVICE_NAME, 'Create')
  private create(payload: CreateUserRequestDto): Promise<CreateUserResponse> {
    return this.usersService.create(payload);
  }
}
