import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Payment from 'pages/Payment';
import Receipt from 'pages/Receipt';
import { PAGE_URL } from 'constants/pageUrl';
import { useState } from 'react';

export const AppRoutes = () => {
  const [orderNum, setOrderNum] = useState(0);
  return (
    <Routes>
      <Route path={PAGE_URL.HOME} element={<HomePage />} />
      <Route path={PAGE_URL.MAIN} element={<Main />} />
      <Route path={PAGE_URL.ORDER} element={<Order />} />
      <Route path={PAGE_URL.PAYMENT} element={<Payment setOrderNum={setOrderNum} />} />
      <Route path={PAGE_URL.RECEIPT} element={<Receipt orderNum={orderNum} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
