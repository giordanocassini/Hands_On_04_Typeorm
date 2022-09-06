import { Post } from './Post';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 70 })
    name: string

    @Column("varchar", { length: 70 })
    email: string

    @Column({ type: "int" })
    apartment: number

    @Column("varchar", { length: 120 })
    password: string

    @OneToMany(() => Post, post => post.user_id)
    posts: Post[]
}