import ( DataSource ) from 'typeorm';
import * as path from 'path' ;

export const dataSource = new DataSource({
	type: DB_TYPE,
	host: DB_HOST,
	port: Number(DB_PORT),
	database: DB_NAME,
	username: DB_USERNAME,
	password: DB_PASSWORD,
	entities: [
		path.join(__dirname, "/entities/**/*.entity.{js, ts}")],
	synchroize: false,
	logging: true,
});