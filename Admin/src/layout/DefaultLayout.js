import React from 'react'
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <div className="body flex-grow-1">
          <br/><br/>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
