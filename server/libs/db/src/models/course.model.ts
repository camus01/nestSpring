import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger' 
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions: {
        timestamps:　true,
        toJSON: { virtuals: true }
    } 
})

export class Course { //模型类
    @ApiProperty({description:'课程名称', example: 'Typescript从入门到入土'})//@ApiProperty -->swagger API 文档
    @prop()//@prop --> username is a string --> for typegoose
    name: string

    @ApiProperty({description:'封面图'})
    @prop()
    cover: string

    @arrayProp({
        ref: 'Episode',
        localField: '_id',
        foreignField: 'course'
    })
    episodes: Ref<Episode>[]//虛擬字段 out of DB
    // @arrayProp({ itemsRef:'Episode' })//''解决循环引用初始化为undefined
    // episodes: Ref<Episode>[]
}