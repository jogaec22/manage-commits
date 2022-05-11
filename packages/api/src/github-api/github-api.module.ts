import { Module } from '@nestjs/common';
import { CommitsController } from './controllers/commits.controller';
import { CommitService } from './services/commit.service';

@Module({
    imports: [],
  controllers: [CommitsController],
  providers: [CommitService]
})
export class GithubApiModule {}
