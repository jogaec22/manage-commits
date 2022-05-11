import { Controller, Get, Param } from '@nestjs/common';
import {CommitService} from '../services/commit.service';

@Controller('commits')
export class CommitsController {

    constructor(
        private githubService: CommitService 
    ){}

    @Get(':owner/:repo')
    getCommits(
        @Param('owner') owner: string,
        @Param('repo') repo: string
    ){        
        return this.githubService.findByOwnerAndRepo(owner, repo);
    }

}
