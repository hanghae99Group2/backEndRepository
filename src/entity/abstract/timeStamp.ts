import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class timeStamp {
  @CreateDateColumn({
    type: 'datetime',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  updatedAt: Date;
}
