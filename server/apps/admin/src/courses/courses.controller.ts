import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: Course
})

@ApiTags('课程')

@Controller('courses')
export class CoursesController {
    constructor(
        @InjectModel(Course) private readonly model:ReturnModelType<typeof Course>
    ){}

    @Get('option')

    option() {
        return {
            title: '课程管理',
            translate: false,
            column: [
                {prop: 'name', label: '课程名称', sortable: true, search: true, regex: true, row: true},
                {prop: 'cover', label: '课程封面', type: 'upload', listType: 'picture-img',action: 'upload', width:'200'},
            ]
        }
    }
}

