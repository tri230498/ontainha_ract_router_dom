const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 27000000,
      soLuong: 1,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
  arrSanPham: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ],
};

export const demoGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // B1: Lấy giá trị từ action gửi lên
      let { sanPhamClick } = action.payload;
      // console.log(sanPhamClick)
      //B2: clone các state object array
      let gioHangUpdate = [...state.gioHang];
      sanPhamClick = { ...sanPhamClick, soLuong: 1 };
      // gioHangUpdate.push(sanPhamClick)

      // Xử lý thêm giỏ hàng
      let sp = gioHangUpdate.find((spGH) => spGH.maSP === sanPhamClick.maSP);
      if (sp) {
        // Nếu tồn tại
        sp.soLuong += 1;
      } else {
        gioHangUpdate.push(sanPhamClick);
      }
      // B3: Cập nhật lại state
      state.gioHang = gioHangUpdate;

      return { ...state };
    }
    case "XOA_GIO_HANG": {
      // B1: Lấy giá trị từ action ra
      let { maSpClick } = action.payload;
      // B2: Xử lý clone arr hoặc object ra 1 biến
      let gioHangUpdate = [...state.gioHang];
      gioHangUpdate = gioHangUpdate.filter((sp) => sp.maSP !== maSpClick);
      //B3: Cập nhật lại state
      // state.gioHang = gioHangUpdate;
      // return { ...state };
      // ghi ngắn gọn
      return { ...state, gioHang: gioHangUpdate };
    }
    case "TANG_GIAM_SO_LUONG": {
      // B1: Lấy giá trị từ action ra
      let { maSP, soLuong } = action.payload;
      // B2: Xử lý clone arr hoặc object ra 1 biến
      let gioHangUpdate = [...state.gioHang];
      let sp = gioHangUpdate.find(sp => sp.maSP === maSP);
      if(sp) {
        sp.soLuong += soLuong
        if(sp.soLuong < 1) {
          //Xử lý xóa
          if(window.confirm('Bạn có muốn xóa không')) {
            gioHangUpdate = gioHangUpdate.filter(sp => sp.maSP !== maSP);
          }else {
            sp.soLuong = soLuong;
          }
        }
      }

      state.gioHang = gioHangUpdate;
      return {...state};
    }
    default:
      return state;
  }
};
