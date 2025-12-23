import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { User } from './auth/entities/user.entity';
import { Organization } from './organizations/entities/organization.entity';

@Module({
  imports: [
    // 1. Initialize Config first
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // 2. Setup TypeORM Async
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST', 'localhost'),
        port: config.get<number>('DATABASE_PORT', 5432),
        username: config.get<string>('DATABASE_USER', 'postgres'),
        password: config.get<string>('DATABASE_PASSWORD', 'dev123'),
        database: config.get<string>('DATABASE_NAME', 'faktura_dev'),
        entities: [User, Organization], // Explicitly add entities here
        synchronize: true, // Auto-creates tables (dev only!)
      }),
    }),
    AuthModule,
    OrganizationsModule,
  ],
})
export class AppModule {}