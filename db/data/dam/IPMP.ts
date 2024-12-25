export interface IPMPType {
  ip: number;
  name: string;
  type: string;
  protection_duration: string;
  registration_date: Date;
  owner: string;
  status: string;
}

export const IPMP: IPMPType[] = [
  {
    ip: 1,
    name: 'Apple Logo',
    type: 'NH',
    registration_date: new Date('1998-11-20'),
    protection_duration: '20 năm',
    owner: 'Apple Inc.',
    status: 'DBH',
  },
  {
    ip: 2,
    name: 'Bộ vi xử lý M1',
    type: 'BSC',
    registration_date: new Date('2021-02-15'),
    protection_duration: '20 năm',
    owner: 'Apple Inc.',
    status: 'DCXL',
  },
  {
    ip: 3,
    name: 'Hình ảnh Harry Potter',
    type: 'QTG',
    registration_date: new Date('1997-06-26'),
    protection_duration: '70 năm',
    owner: 'J.K. Rowling',
    status: 'DCN',
  },
  {
    ip: 4,
    name: 'Thiết kế chai Coca-Cola',
    type: 'PMMT',
    registration_date: new Date('1915-11-16'),
    protection_duration: '100 năm',
    owner: 'The Coca-Cola Company',
    status: 'HH',
  },
  {
    ip: 5,
    name: 'Google Search Algorithm',
    type: 'PMMT',
    registration_date: new Date('2001-09-04'),
    protection_duration: '20 năm',
    owner: 'Google LLC',
    status: 'HBBH',
  },
];
