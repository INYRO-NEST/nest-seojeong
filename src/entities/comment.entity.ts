import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { UserEntity } from './user.entity';
import { ArticleEntity } from './article.entity';

@Entity('Comment')
export class CommentEntity {
    @PrimaryGeneratedColumn( {type: 'bigint'})
    id: string ;
    
    @Column('text', {unique: false, nullable: false})
    content: string;

    @Column ('bigint', {unique: false, nullable: true})
    parentID: string;

    @CreateDateColumn({type:'timestamp'})
    createAt: Date;

    @UpdateDateColumn({type:'timestamp'})
    updatedAt: Date | null;
   
    @DeleteDateColumn({type:'timestamp'})
    deletedAt: Date | null;
    
    @Column ('bigint', {unique: false, nullable: false})
    articleId: string;

    @Column ('bigint', {unique: false, nullable: false})
    userId: string ;

    @ManyToOne (() => UserEntity, (user) => user.comments)
    @JoinColumn({name: 'userId', referencedColumnName: 'id'})
    user: UserEntity;

    @ManyToOne (() => ArticleEntity, (article) => article.comments)
    @JoinColumn({name: 'articleId', referencedColumnName: 'id'})
    article: ArticleEntity;
}
