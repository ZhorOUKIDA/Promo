export interface IVacancyList {
  publicId: string;
  service: string;
  function: string; // Class
  status: string;
  description: string;
  canApply: boolean;
  hasApplied: boolean;
  insertDate: Date;
  publishDate: Date;
  processingDate: Date;
  closingDate: Date;
}
