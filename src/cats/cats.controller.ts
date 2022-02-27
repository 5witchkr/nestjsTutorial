import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCateDto } from './CreateCatDto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string{
        return 'This action returns all cats ...get';
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action return a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCateDto) {
        return 'This action adds a new cat';
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
