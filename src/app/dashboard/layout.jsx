// /app/dashboard/layout.jsx
import Header from '@/components/header/header'
import Sidebar from '@/components/sidebar/sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="home-page-dashboard flex w-full">
        <Sidebar />
        <main className="bg-gray-50 h-full main-section">{children}</main>
      </div>
    </div>
  )
}
