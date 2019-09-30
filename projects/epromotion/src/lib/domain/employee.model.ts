export interface IEmployee {
  firstName?: string;
  lastName?: string;

  birthdate?: Date;
  languageRoleCode?: string;

  engagementDateForeignAffairs?: Date;
  engagementDateState?: Date;
  officialEmail?: string;
  privateEmail?: string;
  officialPhoneNumber?: string;
  officialMobileNumber?: string;

  remark?: string;
  nationalNumber?: string;
  address?: string;

  // privatePhoneNumber?: string;
  // privateMobileNumber?: string;
}
