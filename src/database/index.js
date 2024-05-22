import Sequelize from 'sequelize';

import configDatabese from '../config/database';

import User from '../app/models/User';

const models = [User]


class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(configDatabese);
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();