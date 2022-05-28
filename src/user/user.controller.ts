import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiOperation,
  ApiTags,
  ApiQuery,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ description: '新增一筆user使用' })
  @ApiBody({ type: CreateUserDto, description: '新增user' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ description: '取得user使用' })
  @ApiBody({ type: CreateUserDto, description: '取得user' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: '獲取一個user' })
  @ApiBody({ type: CreateUserDto, description: '獲取一個user' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ description: '更新user' })
  @ApiBody({ type: UpdateUserDto, description: '更新user' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ description: '刪除user' })
  @ApiBody({ type: CreateUserDto, description: '刪除user' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
