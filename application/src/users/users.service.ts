import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    constructor() {}

    create(createUserDto: CreateUserDto) {
        // example of creating a user
        return createUserDto
    }

    findOne(query: any, projection: any = {}) {
        // example of finding a user
        return {
            query,
            projection,
        }
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        // example of updating a user
        return updateUserDto
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}
