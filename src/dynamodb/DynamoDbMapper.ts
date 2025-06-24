/*
* Declare DynamoDB connection
*/
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { DynamoDB } from 'aws-sdk';
import { DataMapperConfiguration } from '@aws/dynamodb-data-mapper/build/namedParameters/DataMapperConfiguration';

const config = {
  client: new DynamoDB()
} as DataMapperConfiguration;

export const dynamoDbMapper: DataMapper = new DataMapper(config);
