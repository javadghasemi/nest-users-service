import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

export const ProtobufPackage = 'users';
export const USERS_PACKAGE_NAME: string = 'users';
export const USERS_SERVICE_NAME: string = 'UsersService';

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
}

export interface CreateUserResponse {
  status: number;
  error: string[];
}

export interface UsersServiceController {
  create(
    request: CreateUserRequest,
  ):
    | Promise<CreateUserResponse>
    | Observable<CreateUserResponse>
    | CreateUserResponse;

  getOne();

  getAll();

  delete();
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      // 'getOne',
      // 'getAll',
      'create',
      // 'update',
      // 'delete',
    ];

    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );

      GrpcMethod(USERS_SERVICE_NAME, method)(
        constructor.prototype,
        method,
        descriptor,
      );
    }
  };
}
