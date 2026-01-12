'use client'

import { useState, useEffect } from 'react'

interface Inquiry {
  id: string
  name: string
  phone: string
  message: string
  status: '대기중' | '연락완료' | '상담완료'
  created_at: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState<string>('all')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        fetchInquiries()
      } else {
        setAuthError('비밀번호가 올바르지 않습니다.')
      }
    } catch {
      setAuthError('인증 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchInquiries = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/inquiries')
      if (response.ok) {
        const data = await response.json()
        setInquiries(data)
      }
    } catch (error) {
      console.error('Failed to fetch inquiries:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateStatus = async (id: string, status: Inquiry['status']) => {
    try {
      const response = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })

      if (response.ok) {
        setInquiries(prev =>
          prev.map(inq => (inq.id === id ? { ...inq, status } : inq))
        )
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const deleteInquiry = async (id: string) => {
    if (!confirm('정말로 이 문의를 삭제하시겠습니까?')) return

    try {
      const response = await fetch(`/api/inquiries?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setInquiries(prev => prev.filter(inq => inq.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete inquiry:', error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getStatusColor = (status: Inquiry['status']) => {
    switch (status) {
      case '대기중':
        return 'bg-yellow-100 text-yellow-800'
      case '연락완료':
        return 'bg-blue-100 text-blue-800'
      case '상담완료':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredInquiries = filter === 'all'
    ? inquiries
    : inquiries.filter(inq => inq.status === filter)

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries()
    }
  }, [isAuthenticated])

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1e3a5f] mb-2">CES Admin</h1>
            <p className="text-gray-500">관리자 페이지에 접속하려면 비밀번호를 입력하세요.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1e3a5f] text-white py-3 rounded-xl font-semibold hover:bg-[#2d5a8a] transition-colors disabled:opacity-50"
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-gray-500 hover:text-[#1e3a5f]">
              메인 페이지로 돌아가기
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-[#1e3a5f]">CES Admin</h1>
            <p className="text-sm text-gray-500">문의 관리 시스템</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchInquiries}
              className="text-sm text-gray-600 hover:text-[#1e3a5f] flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              새로고침
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#1e3a5f]">{inquiries.length}</div>
            <div className="text-sm text-gray-500">전체 문의</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-yellow-600">
              {inquiries.filter(i => i.status === '대기중').length}
            </div>
            <div className="text-sm text-gray-500">대기중</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              {inquiries.filter(i => i.status === '연락완료').length}
            </div>
            <div className="text-sm text-gray-500">연락완료</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600">
              {inquiries.filter(i => i.status === '상담완료').length}
            </div>
            <div className="text-sm text-gray-500">상담완료</div>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <div className="flex flex-wrap gap-2">
            {['all', '대기중', '연락완료', '상담완료'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? '전체' : status}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-gray-500">
              <svg className="animate-spin w-8 h-8 mx-auto mb-4 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              로딩 중...
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              문의 내역이 없습니다.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      접수일시
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      이름
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      연락처
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      문의 내용
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(inquiry.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.phone}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {inquiry.message || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={inquiry.status}
                          onChange={(e) => updateStatus(inquiry.id, e.target.value as Inquiry['status'])}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border-0 cursor-pointer ${getStatusColor(inquiry.status)}`}
                        >
                          <option value="대기중">대기중</option>
                          <option value="연락완료">연락완료</option>
                          <option value="상담완료">상담완료</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
