import { IAttachment } from '.';

export interface IVacancyDetail {
  publicId: string;
  service: string;
  function: string; // Class
  status: string;
  shortDescription: string;
  longDescription: string;
  attachments: IAttachment[];
  canApply: boolean;
  hasApplied: boolean;
  insertDate: Date;
  publishDate: Date;
  processingDate: Date;
  closingDate: Date;
}
