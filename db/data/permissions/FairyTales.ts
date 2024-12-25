export interface FairyTales {
  vita: string;
  loaiTsttDuocCapQuyen: string;
  soHopDong: string;
  tsttCapQuyen: string;
  tinhTrangHd: string;
  ngayKyHopDong: Date;
  ngayHopDongCoHieuLuc: Date;
  benCapQuyen: string;
  benNhanQuyen: string;
  loaiHinhCapQuyen: string;
  hinhThucCapQuyen: string;
  hinhThucSuDungTstt: string;
  nganhHangLinhVucKinhDoanh: string;
  sanPhamDichVuCuThe: string;
  thoiGianCapQuyen: string;
  phamViLanhThoSanXuat: string;
  phamViLanhThoKinhDoanh: string;
  phamViLanhToLoaiTru: string;
  kenhPhanPhoiOnline: string;
  diaDiemKinhDoanhOffline: string;
  dieuKhoanVeHetHanHopDong: string;
  dieuKhoanVeGiaHanHopDong: string;
  luatDieuChinh: string;
  coQuanGiaiQuyetTranhChap: string;
  ghiChu: string;
  hopDong: string;
  gcnCapQuyen: string;
  gcnDocQuyen: string;
  linhTaiSanCapQuyen: string;
  noiLuuTruHoSo: string;
  bienBanThanhLyHopDong: string;
  soTacVu: number;
}

export const FairyTalesTableRecords: FairyTales[] = [
  {
    vita: 'Vita Sample',
    loaiTsttDuocCapQuyen: 'Loại tài sản trí tuệ được cấp quyền',
    soHopDong: 'HD-2023-001',
    tsttCapQuyen: 'TSTT cấp quyền mẫu',
    tinhTrangHd: 'Hiệu lực',
    ngayKyHopDong: new Date('2023-01-15'),
    ngayHopDongCoHieuLuc: new Date('2023-02-01'),
    benCapQuyen: 'Công ty ABC',
    benNhanQuyen: 'Công ty XYZ',
    loaiHinhCapQuyen: 'Độc quyền',
    hinhThucCapQuyen: 'Chuyển nhượng',
    hinhThucSuDungTstt: 'Sử dụng thương mại',
    nganhHangLinhVucKinhDoanh: 'Công nghệ thông tin',
    sanPhamDichVuCuThe: 'Phần mềm quản lý',
    thoiGianCapQuyen: '12 tháng',
    phamViLanhThoSanXuat: 'Toàn quốc',
    phamViLanhThoKinhDoanh: 'Việt Nam',
    phamViLanhToLoaiTru: 'Không áp dụng cho miền núi',
    kenhPhanPhoiOnline: 'Website, Ứng dụng di động',
    diaDiemKinhDoanhOffline: 'Hà Nội, TP. Hồ Chí Minh',
    dieuKhoanVeHetHanHopDong: 'Hợp đồng hết hạn sau 12 tháng',
    dieuKhoanVeGiaHanHopDong: 'Tự động gia hạn nếu không có thông báo',
    luatDieuChinh: 'Luật pháp Việt Nam',
    coQuanGiaiQuyetTranhChap: 'Tòa án nhân dân TP. Hà Nội',
    ghiChu: 'Ghi chú mẫu',
    hopDong: 'HD-2023-001.pdf',
    gcnCapQuyen: 'GCN-2023-001',
    gcnDocQuyen: 'GCNĐQ-2023-001',
    linhTaiSanCapQuyen: 'Phần mềm, Bằng sáng chế',
    noiLuuTruHoSo: 'Phòng lưu trữ số 1',
    bienBanThanhLyHopDong: 'BBTL-2023-001',
    soTacVu: 10,
  },
];
