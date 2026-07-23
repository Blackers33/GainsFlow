import { Global, Module } from '@nestjs/common'
import { createDb } from './client'

export const DB_CLIENT = Symbol('DB_CLIENT')

@Global()
@Module({
  providers: [{ provide: DB_CLIENT, useFactory: createDb }],
  exports: [DB_CLIENT],
})
export class DbModule {}
