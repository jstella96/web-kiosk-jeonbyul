import { Navigate, Route, Routes } from 'react-router-dom';
import { PAGE_URL } from 'constants/pageUrl';
import { lazy, Suspense, useState } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Main = lazy(() => import('pages/Main'));
const Order = lazy(() => import('pages/Order'));
const Payment = lazy(() => import('pages/Payment'));
const Receipt = lazy(() => import('pages/Receipt'));

export const AppRoutes = () => {
  const [orderNum, setOrderNum] = useState(0);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<HomePage />} />
        <Route path={PAGE_URL.MAIN} element={<Main />} />
        <Route path={PAGE_URL.ORDER} element={<Order />} />
        <Route path={PAGE_URL.PAYMENT} element={<Payment setOrderNum={setOrderNum} />} />
        <Route path={PAGE_URL.RECEIPT} element={<Receipt orderNum={orderNum} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  );
};
