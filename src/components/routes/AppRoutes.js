import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  AppLayout,
  LandingPage,
  ConnectPage,
  // Marketplace,
  // MarketplaceLicensesPage,
  // MarketplaceSalesPage,
  // MarketplaceAllPage,
  LicenseDetailsPage,
  SaleDetailsPage,
  ProfilePage,
  CreateSalePage,
  Error404Page,
  NewStyling
} from '../../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route index element={ <LandingPage /> } />
        {/* <Route path="/explore" element={ <Marketplace /> }>
          <Route path="licenses" index element={ <MarketplaceLicensesPage /> } /> 
          <Route path="sales" element={ <MarketplaceSalesPage />} /> 
          <Route path="all" element={ <MarketplaceAllPage />} /> 
        </Route> */}
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/licenses/:licenseId" element={ <LicenseDetailsPage /> } /> 
        <Route path="/sales/:saleId" element={ <SaleDetailsPage /> } /> 
        <Route path="/dashboard" element={ <h1>Dashboard</h1> } >
          {/* remember to add the react router outlet compoenent on the dashbaord page  */}
          {/* for displaying different tabs (listed, owned, sales)  */}
          <Route index element={ <h1>owned</h1> } />
          <Route path="listed" element={ <h1>listed</h1> } />
          <Route path="sales" element={ <h1>sales</h1> } />
        </Route>
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/sales/create" element={ <CreateSalePage /> } />
        <Route path="/heirloomstyling" element={ <NewStyling /> } />
        <Route path="*" element={ <Error404Page /> } />
      </Route>
    </Routes>
  )
}
export default AppRoutes;