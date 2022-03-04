import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { timeStamp } from './abstract/timeStamp';

@Entity()
export class User extends timeStamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
