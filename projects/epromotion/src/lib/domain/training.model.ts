import { IDateRange } from './date-range.model';

export interface ITraining extends IDateRange {
  publicId: string;
  organization: string;
  subject: string;
}
