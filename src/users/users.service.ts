import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserRequest, CreateUserResponse } from './users.pb';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async create({
    firstName,
    lastName,
    email,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    await this.databaseService.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return { status: HttpStatus.CREATED, error: null };
  }
}
