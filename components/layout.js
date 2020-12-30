import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Dev site'

export default function Layout({ children }) {
    return (
        <main className="bg-gray-100">
          {children}
        </main>
    )
  }