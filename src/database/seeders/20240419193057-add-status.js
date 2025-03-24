// eslint-disable-next-line import/no-import-module-exports
import { v4 as uuidv4 } from 'uuid';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        name: 'Barack Obama',
        password:
          '$2b$10$ghcxUhRfRVHvEOtt16Vj7OcANFjXAr2atOjaPzw1ENZFzGpCe7Xdu',
        email: 'test02@example.com',
        phone: '0783556915',
        verified: true,
        status: false,
        address: 'Accra, Ghana',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastTimePasswordUpdated: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
