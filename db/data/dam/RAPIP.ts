export interface RAPIPType {
  ip: number;
  name: string;
  type: string;
  description: string;
  registration_date: Date;
  protection_duration: string;
  owner: string;
}

export const RAPIP: RAPIPType[] = [
  {
    ip: 1,
    name: 'Thương hiệu ABC',
    type: 'TH',
    description: 'Thương hiệu ABC chuyên về các sản phẩm thời trang cao cấp.',
    registration_date: new Date('2024-01-15'),
    protection_duration: '20 năm',
    owner: 'Công ty TNHH Thời Trang Việt',
  },
  {
    ip: 2,
    name: 'Phần mềm Quản lý Kho',
    type: 'PM',
    description: 'Hệ thống giúp quản lý hàng tồn kho một cách hiệu quả và chính xác.',
    registration_date: new Date('2023-12-10'),
    protection_duration: '50 năm',
    owner: 'Công ty Công Nghệ Alpha',
  },
  {
    ip: 3,
    name: 'Sáng chế Máy lọc nước',
    type: 'SC',
    description: 'Máy lọc nước sử dụng công nghệ nano để lọc tạp chất.',
    registration_date: new Date('2023-07-20'),
    protection_duration: '45 năm',
    owner: 'Công ty TNHH Xanh Sạch',
  },
  {
    ip: 4,
    name: 'Bài hát Niềm Tin',
    type: 'TM',
    description: 'Ca khúc truyền cảm hứng về niềm tin và hy vọng.',
    registration_date: new Date('2022-11-05'),
    protection_duration: '15 năm',
    owner: 'Nhạc sĩ Lê Hùng',
  },
  {
    ip: 5,
    name: 'Logo Công ty Beta',
    type: 'LG',
    description: 'Logo với hình ảnh cách điệu thể hiện sự phát triển bền vững.',
    registration_date: new Date('2023-03-15'),
    protection_duration: '2 năm',
    owner: 'Công ty Cổ phần Beta',
  },
  {
    ip: 6,
    name: 'Thiết kế Bộ nhận diện thương hiệu Delta',
    type: 'TK',
    description: 'Bộ nhận diện thương hiệu hoàn chỉnh, bao gồm logo, card visit và tài liệu tiếp thị.',
    registration_date: new Date('2023-09-25'),
    protection_duration: '10 năm',
    owner: 'Công ty TNHH Delta Design',
  },
  {
    ip: 7,
    name: 'Sách Hành Trình Khám Phá',
    type: 'VH',
    description: 'Cuốn sách viết về hành trình phiêu lưu và khám phá thế giới.',
    registration_date: new Date('2022-04-18'),
    protection_duration: '35 năm',
    owner: 'Nhà văn Nguyễn Anh',
  },
  {
    ip: 8,
    name: 'Ứng dụng Đặt vé Xe Online',
    type: 'PM',
    description: 'Ứng dụng hỗ trợ người dùng đặt vé xe khách một cách nhanh chóng.',
    registration_date: new Date('2023-08-12'),
    protection_duration: '90 năm',
    owner: 'Công ty Cổ phần Giao Thông Việt',
  },
  {
    ip: 9,
    name: 'Mẫu Kiến trúc Nhà phố Hiện đại',
    type: 'KT',
    description: 'Mẫu nhà phố với phong cách hiện đại, tối giản và tiết kiệm không gian.',
    registration_date: new Date('2023-06-30'),
    protection_duration: '20 năm',
    owner: 'Công ty TNHH Kiến Trúc Xanh',
  },
  {
    ip: 10,
    name: 'Phim ngắn Ký Ức Tuổi Thơ',
    type: 'DA',
    description: 'Bộ phim kể về những ký ức đẹp đẽ của tuổi thơ ở làng quê Việt Nam.',
    registration_date: new Date('2023-05-10'),
    protection_duration: '20 năm',
    owner: 'Đạo diễn Trần Minh',
  },
];
