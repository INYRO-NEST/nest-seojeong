import {Post, UseGuards, Controller, Body} from "@nestjs/common"
import { ArticleService } from "./article.service";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { User } from "src/decorators/user.decorator";
import { CreateArticleDto } from "src/dtos/article/create-article.dto";
import { ApiBearerAuth, ApiBody, ApiOperation } from "@nestjs/swagger";

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @ApiOperation({
        summary: '게시글 작성 API',
    })
    @ApiBody({
        type: CreateArticleDto,
    })
    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Post()
    async createArticle(@Body() body: CreateArticleDto, @User() user) {
        const title = body.title;
        const content = body.content;
        const userID = user.id;

        const article = await this.articleService.createArticle(
            title,
            content,
            userID,
        );

        return article;
    }
}