import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

@Entity({ name: 'city' })
export class CityEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'state_id', nullable: false})
    stateId: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @CreateDateColumn({name: 'created_at' })
    createdAt: Date;

    // tava dando erro com isso, mas quando tirei funcionou, na entidade de state tem o msm import e funciona
    //@UpdateDateColumn({name: 'updated_at' })
    //updatedAt: Date;
}