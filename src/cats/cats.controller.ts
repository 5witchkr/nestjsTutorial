import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCateDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';



@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}; //cats.service를 사용하기위해 선언

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action return a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCateDto) {
        return this.catsService.create(createCatDto);
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() CreateCateDto: CreateCateDto){
        return `This action update${id}`;
    }

    @Delete(':id')
    remove(@Param('id')id: string){
        return `this action remove ${id} cat`;
    }
}
