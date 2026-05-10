import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import EventsPage from '@/pages/EventsPage'
import ContactPage from '@/pages/ContactPage'
import TeamPage from '@/pages/TeamPage'
import JoinPage from '@/pages/JoinPage'
import JoinGTStudentPage from '@/pages/JoinGTStudentPage'
import JoinProspectiveStudentPage from '@/pages/JoinProspectiveStudentPage'
import RentARowerPage from '@/pages/RentARowerPage'
import DonatePage from '@/pages/DonatePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'join', element: <JoinPage /> },
      { path: 'join/gt-student', element: <JoinGTStudentPage /> },
      { path: 'join/prospective', element: <JoinProspectiveStudentPage /> },
      { path: 'rent-a-rower', element: <RentARowerPage /> },
      { path: 'donate', element: <DonatePage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
