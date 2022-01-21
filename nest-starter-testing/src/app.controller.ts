//Calling API in controller
import { AppService } from './app.service';
import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CreateCourseDto } from './courses/create-course.dto';

@Controller('courses')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getCourses() {
    const courses = await this.appService.getCourses();
    return courses;
  }
  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
    const course = await this.appService.getCourse(courseId);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.appService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.appService.deleteCourse(query.courseId);
    return courses;
  }
}

