import {MigrationInterface, QueryRunner} from "typeorm";

export class TesteMigration1627655670559 implements MigrationInterface {
    name = 'TesteMigration1627655670559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "apelido" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "apelido"`);
    }

}
