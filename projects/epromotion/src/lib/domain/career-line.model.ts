import { IDateRange } from './date-range.model';

export interface ICareerLine extends IDateRange {
  publicId: string;
  serviceCode: string;
  serviceName: string;
  postName: string;
  statutoryFunctionId: number;
  statutoryFunctionName: string;
  gradeName: string;
  careerTypeId: number;
}
