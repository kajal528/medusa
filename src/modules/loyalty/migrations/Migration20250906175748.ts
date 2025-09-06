import { Migration } from '@mikro-orm/migrations';

export class Migration20250906175748 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "order_loyalty_point" ("id" text not null, "order_id" text not null, "points" integer not null default 0, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "order_loyalty_point_pkey" primary key ("id"));`);
    this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_LOYALTY_ORDER_ID" ON "order_loyalty_point" (order_id) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_order_loyalty_point_deleted_at" ON "order_loyalty_point" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "order_loyalty_point" cascade;`);
  }

}
