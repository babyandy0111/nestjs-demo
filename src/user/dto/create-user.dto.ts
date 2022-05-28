import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '姓名' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '手機' })
  phone: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({
    description: '年齡',
    type: Number,
    minimum: 18,
    default: 20,
  })
  age: number;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;

  @Column()
  @IsOptional()
  isDelete: boolean;
}
