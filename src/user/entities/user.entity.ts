import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;

  @Column()
  isDelete: boolean;
}
