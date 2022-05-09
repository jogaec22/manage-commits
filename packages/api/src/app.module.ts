import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManageApiModule } from './manage-api/manage-api.module';
import { ManageUiModule } from './manage-ui/manage-ui.module';

@Module({
  imports: [ManageApiModule, ManageUiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
