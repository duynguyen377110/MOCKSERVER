export interface MAMType {
  ip: number;
  name: string;
  store: string;
  upload_date: Date;
  description: string;
  folder: string;
}

export const MAM: MAMType[] = [
  {
    ip: 1,
    name: 'Báo cáo tài chính Q4',
    upload_date: new Date('2024-11-27'),
    description: 'Tài liệu phân tích lợi nhuận và chi phí quý 4.',
    store: 'CL',
    folder: 'FC2024',
  },
  {
    ip: 2,
    name: 'Kế hoạch marketing 2025',
    upload_date: new Date('2024-11-25'),
    description: 'Kế hoạch chiến lược tiếp thị cho năm 2025.',
    store: 'LC',
    folder: 'MK2025',
  },
  {
    ip: 3,
    name: 'Hướng dẫn sử dụng phần mềm',
    upload_date: new Date('2024-11-20'),
    description: 'Tài liệu hướng dẫn chi tiết sử dụng phần mềm nội bộ.',
    store: 'LC',
    folder: 'HDPS',
  },
  {
    ip: 4,
    name: 'Đề xuất dự án mới',
    upload_date: new Date('2024-11-15'),
    description: 'Đề xuất chi tiết về dự án xây dựng hệ thống quản lý.',
    store: 'CL',
    folder: 'DSD',
  },
  {
    ip: 5,
    name: 'Biên bản họp tháng 11',
    upload_date: new Date('2024-11-10'),
    description: 'Biên bản ghi nhận các quyết định trong cuộc họp tháng 11.',
    store: 'LC',
    folder: 'BPH11',
  },
];
