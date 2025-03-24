// eslint-disable-next-line import/no-import-module-exports
import { v4 as uuidv4 } from 'uuid';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: uuidv4(),
          name: 'Random Buyer',
          password:
            '$2b$10$ghcxUhRfRVHvEOtt16Vj7OcANFjXAr2atOjaPzw1ENZFzGpCe7Xdu',
          email: 'test01@example.com',
          phone: '0783556915',
          verified: true,
          roleId: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          address: 'kigali, Rwanda',
          createdAt: new Date(),
          updatedAt: new Date(),
          lastTimePasswordUpdated: new Date(),
        },
        {
          id: uuidv4(),
          name: 'rwema-remy',
          password:
            '$2b$10$ghcxUhRfRVHvEOtt16Vj7OcANFjXAr2atOjaPzw1ENZFzGpCe7Xdu',
          email: 'rwemaremy21@gmail.com',
          phone: '0786912010',
          verified: true,
          roleId: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          address: 'kigali',
          createdAt: new Date(),
          updatedAt: new Date(),
          lastTimePasswordUpdated: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
