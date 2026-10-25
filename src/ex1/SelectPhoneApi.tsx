import React, { useState, useEffect, useCallback } from "react";
import { fetchPhone } from "../api/phoneApi";
import { Phone } from "../types";
import { SelectPhoneApp } from "./SelectPhoneApp";
import { Loading } from "../components/Loading"; // Hoặc đường dẫn component Loading của bạn
import { ErrorBox } from "../components/ErrorBox"; // Hoặc đường dẫn component ErrorBox của bạn

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // TODO 1: Reset lại trạng thái lỗi và dữ liệu điện thoại trước khi gọi API
    setError(null);
    setPhone(null);
    
    // TODO 2: Gọi fetch lấy dữ liệu sản phẩm ID "1", bắt lỗi nếu có
    try {
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e: any) {
      setError(e.message || "Đã có lỗi xảy ra");
    }
  }, []);

  // TODO 3: Gọi hàm load() khi màn hình được mở lần đầu
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4: Nếu có lỗi xảy ra -> Hiển thị ErrorBox kèm nút thử lại
  if (error) {
    return <ErrorBox message={error} onRetry={load} />;
  }

  // TODO 5: Nếu chưa có dữ liệu phone (đang tải) -> Hiển thị màn hình Loading
  if (!phone) {
    return <Loading />;
  }

  // TODO 6: Ngược lại (đã có dữ liệu) -> Render ứng dụng SelectPhoneApp với dữ liệu từ API
  return <SelectPhoneApp phone={phone} />;
}