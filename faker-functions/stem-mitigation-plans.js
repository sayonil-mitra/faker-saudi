// Import the latest Faker.js module
import { faker } from "@faker-js/faker";

// Function to generate random data for the given attributes
const generateRandomData = (num, primaryKeyValues) => {
  // num = number of entities to generate
  // array of values of primary keys needed for foreign key values
  let dataArray = [];

  for (let i = 0; i < num; i++) {
    const dataPoint = {
      stemRiskIndicatorId: faker.helpers.arrayElement([...primaryKeyValues]), // Required, string (UUID)
      purge_id: faker.string.uuid(), // Optional, string (UUID)
      completion_status: faker.datatype.boolean(), // Optional, boolean
      stemMitigationPlanId: faker.string.uuid(), // Required, string (UUID)
      plan_description: faker.lorem.sentence(), // Optional, string (Lorem sentence)
    };

    dataArray.push(dataPoint);
  }

  return dataArray;
};

export default generateRandomData;
