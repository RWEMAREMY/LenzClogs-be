import { v4 as uuidv4 } from 'uuid';

/**
 * Represents a Sequelize migration.
 * @typedef {import('sequelize-cli').Migration} Migration
 */

/* eslint-disable valid-jsdoc */
/**
 * Runs the migration.
 * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize QueryInterface instance.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const up = async queryInterface => {
  await queryInterface.bulkInsert(
    'users',
    [
      {
        id: uuidv4(),
        name: 'Omar ',
        password:
          '$2b$10$ghcxUhRfRVHvEOtt16Vj7OcANFjXAr2atOjaPzw1ENZFzGpCe7Xdu',
        email: 'rwemaremy2108@gmail.com',
        phone: '0780619144',
        roleId: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        address: '123 Test Street',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastTimePasswordUpdated: new Date(),
      },
    ],
    {}
  );
};

/**
 * Reverts the migration.
 * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize QueryInterface instance.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const down = async queryInterface => {
  await queryInterface.bulkDelete('users', null, {});
};
