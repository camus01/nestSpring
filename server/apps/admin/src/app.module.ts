import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';

const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    MulterModule.register({
      storage: MAO({//Ali
        config: {
          region: 'oss-cn-beijing',
          accessKeyId: 'LTAI4Fbx4ypbfGXVoNRTX9r7',
          accessKeySecret: 'XAV7ZFbMriSdB3Xp9oIGFEpe2RKjd8',
          bucket: 'ks-mall'
        }
      })
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
