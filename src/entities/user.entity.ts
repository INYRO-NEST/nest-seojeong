import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: string;
    
    @Column('varchar', { unique: true, nullable: false })
    email: string;
    
    @Column('varchar', { unique: false, nullable: false})
    password: string;
    
    @CreateDateColumn({type: 'timestamp', nullable: true})
    created_at: Date;
    
    @UpdateDateColumn({type: 'timestamp', nullable: true})
    updated_at: Date | null;
    
    @DeleteDateColumn({type: 'timestamp', nullable: true})
    deleted_at : Date | null;
}