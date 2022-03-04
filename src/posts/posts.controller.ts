import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPost() {
    return 'all posts';
  }

  @Get(':id')
  getOnePost() {
    return 'one post';
  }

  @Post()
  createPost() {
    return 'create post';
  }

  @Put(':id')
  updatePost() {
    return 'update post';
  }

  @Patch(':id')
  updatePartialPost() {
    return 'update partial post';
  }

  @Delete(':id')
  deletePost() {
    return 'delete post';
  }
}
