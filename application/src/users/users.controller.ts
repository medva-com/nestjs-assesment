import {
    Body,
    Controller,
    Delete,
    Get,
    Injectable,
    Param,
    Patch,
    Scope,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
@Injectable({ scope: Scope.REQUEST })
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    index() {
        return 'UserService'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(
            {
                _id: id,
            },
            {}
        )
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id)
    }
}
