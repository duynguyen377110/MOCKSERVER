export interface RPType {
  ip: number;
  name: string;
  type: string;
  reminder_date: Date;
  content: string;
  status: string;
}

export const RP: RPType[] = [
  {
    ip: 1,
    name: 'Máy lạnh văn phòng',
    reminder_date: new Date('2024-12-01'),
    status: 'CH',
    type: 'EMAIL',
    content: 'Nhắc nhở bảo trì định kỳ cho Máy lạnh văn phòng vào ngày 2024-12-01.',
  },
  {
    ip: 2,
    name: 'Máy tính bàn phòng IT',
    reminder_date: new Date('2024-12-05'),
    status: 'DH',
    type: 'SMS',
    content: 'Thông báo kiểm tra phần mềm diệt virus cho Máy tính bàn phòng IT vào ngày 2024-12-05.',
  },
  {
    ip: 3,
    name: 'Hệ thống camera giám sát',
    reminder_date: new Date('2024-12-10'),
    status: 'CH',
    type: 'EMAIL',
    content: 'Kiểm tra và bảo dưỡng định kỳ hệ thống camera vào ngày 2024-12-10.',
  },
  {
    ip: 4,
    name: 'Máy in HP LaserJet Pro',
    reminder_date: new Date('2024-12-15'),
    status: 'CH',
    type: 'SMS',
    content: 'Nhắc nhở thay mực máy in HP LaserJet Pro trước ngày 2024-12-15.',
  },
  {
    ip: 5,
    name: 'Bình cứu hỏa tầng 2',
    reminder_date: new Date('2024-12-20'),
    status: 'CH',
    type: 'EMAIL',
    content: 'Kiểm tra hạn sử dụng bình cứu hỏa tầng 2 vào ngày 2024-12-20.',
  },
  {
    ip: 6,
    name: 'Xe tải giao hàng',
    reminder_date: new Date('2024-12-25'),
    status: 'DH',
    type: 'EMAIL',
    content: 'Bảo dưỡng định kỳ cho xe tải giao hàng đã hoàn thành vào ngày 2024-12-25.',
  },
  {
    ip: 7,
    name: 'Hệ thống điều hòa trung tâm',
    reminder_date: new Date('2025-01-05'),
    status: 'CH',
    type: 'EMAIL',
    content: 'Nhắc nhở kiểm tra hoạt động của hệ thống điều hòa trung tâm vào ngày 2025-01-05.',
  },
];
