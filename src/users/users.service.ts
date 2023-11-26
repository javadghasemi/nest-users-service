import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserRequest, CreateUserResponse } from './users.pb';

@Injectable()
export class UsersService {
  public async create({
    firstName,
    lastName,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    return { status: HttpStatus.CREATED, error: null };
  }
}
