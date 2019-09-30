import { IVacancyDetail } from '../domain/vacancy-detail.model';

export const data: IVacancyDetail[] = [
  {
    publicId: 'A1b2C3d4E5f6G7h8',
    service: 'ICT4.2 [open, unpublished, not applied]',
    function: 'A2', // Class
    status: 'Created', // None, Created, Published, Processing, Processing, Closed
    shortDescription: 'shortDescription',
    longDescription: 'New vacancy for testing',
    attachments: [
      {
        url: 'https://www.google.com',
        fileName: 'Test.pdf',
        fileType: 'application/pdf',
        insertDate: new Date(2019, 9, 9)
      }
    ],
    canApply: true,
    hasApplied: false,
    insertDate: new Date(2019, 9, 1),
    publishDate: null,
    processingDate: null,
    closingDate: null
  },
  {
    publicId: 'ahahahahaha123456',
    service: 'ICT4.1 [open, published, not applied]',
    function: 'A4',
    status: 'Published',
    shortDescription: 'shortDescription',
    longDescription: 'New other vacancy for testing again and again',
    attachments: [],
    canApply: true,
    hasApplied: false,
    insertDate: new Date(2019, 9, 2),
    publishDate: new Date(2019, 9, 5),
    processingDate: null,
    closingDate: null
  },
  {
    publicId: 'ahahahahaha123457',
    service: 'ICT4.9 [open, published, applied]',
    function: 'A4',
    status: 'Published',
    shortDescription: 'shortDescription',
    longDescription: 'New other vacancy for testing again and again',
    attachments: [],
    canApply: true,
    hasApplied: true,
    insertDate: new Date(2019, 9, 2),
    publishDate: new Date(2019, 9, 5),
    processingDate: null,
    closingDate: null
  },
  {
    publicId: 'ahahahahaha123458',
    service: 'ICT4.9 [closed, published, applied]',
    function: 'A4',
    status: 'Published',
    shortDescription: 'shortDescription',
    longDescription: 'New other vacancy for testing again and again',
    attachments: [],
    canApply: true,
    hasApplied: true,
    insertDate: new Date(2019, 9, 2),
    publishDate: new Date(2019, 9, 5),
    processingDate: null,
    closingDate: new Date(2019, 9, 5)
  },
  {
    publicId: 'ahahahahaha123459',
    service: 'ICT4.9 [closed, published, not applied]',
    function: 'A4',
    status: 'Published',
    shortDescription: 'shortDescription',
    longDescription: 'New other vacancy for testing again and again',
    attachments: [],
    canApply: true,
    hasApplied: false,
    insertDate: new Date(2019, 9, 2),
    publishDate: new Date(2019, 9, 5),
    processingDate: null,
    closingDate: new Date(2019, 9, 5)
  }
];
