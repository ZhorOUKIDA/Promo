export interface IPromotion {
  startDate: Date;
  effectiveDate: Date;
  endDate?: Date;
  sequence: number;
  classCode: string;
}
