import { FileText, Download, Eye } from 'lucide-react';
import { useState } from 'react';

interface Document {
  id: number;
  number: string;
  title: string;
  type: 'Ordinance' | 'Resolution' | 'Memorandum' | 'Certificate' | 'Other';
  fileType: string;
  fileSize: string;
  uploadedDate: string;
  uploadedBy: string;
}

const documentsData: Document[] = [
  {
    id: 1,
    number: '2024-001',
    title: 'Annual Budget Appropriation Ordinance for FY 2024-2025',
    type: 'Ordinance',
    fileType: 'PDF',
    fileSize: '2.5 MB',
    uploadedDate: 'Nov 10, 2024',
    uploadedBy: 'Barangay Secretary',
  },
  {
    id: 2,
    number: '2024-015',
    title: 'Resolution approving the renovation of the barangay hall',
    type: 'Resolution',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    uploadedDate: 'Nov 12, 2024',
    uploadedBy: 'Barangay Secretary',
  },
];

export function DocumentManagementPage() {
  const [documents] = useState(documentsData);
  const [typeFilter, setTypeFilter] = useState<string>('All Documents');

  const totalDocuments = documents.length;
  const ordinanceCount = documents.filter(d => d.type === 'Ordinance').length;
  const resolutionCount = documents.filter(d => d.type === 'Resolution').length;
  const memoCount = documents.filter(d => d.type === 'Memorandum').length;
  const certificateCount = documents.filter(d => d.type === 'Certificate').length;

  const filteredDocuments = typeFilter === 'All Documents'
    ? documents
    : documents.filter(d => d.type === typeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Ordinance':
        return 'text-purple-600';
      case 'Resolution':
        return 'text-blue-600';
      case 'Memorandum':
        return 'text-orange-600';
      case 'Certificate':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Document Management</h1>
        <p className="text-gray-600">Upload and manage official barangay documents</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-6">
        <p className="text-sm">
          <span className="font-semibold">View Only:</span> Only Barangay Secretary can upload official documents.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border-l-4 border-gray-400">
          <h3 className="text-gray-600 text-sm mb-1">Total Documents</h3>
          <p className="text-2xl text-gray-900">{totalDocuments}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
          <h3 className="text-gray-600 text-sm mb-1">Ordinances</h3>
          <p className="text-2xl text-gray-900">{ordinanceCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
          <h3 className="text-gray-600 text-sm mb-1">Resolutions</h3>
          <p className="text-2xl text-gray-900">{resolutionCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-l-4 border-orange-500">
          <h3 className="text-gray-600 text-sm mb-1">Memos</h3>
          <p className="text-2xl text-gray-900">{memoCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
          <h3 className="text-gray-600 text-sm mb-1">Certificates</h3>
          <p className="text-2xl text-gray-900">{certificateCount}</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All Documents', 'Ordinance', 'Resolution', 'Memorandum', 'Certificate', 'Other'].map((filter) => (
          <button
            key={filter}
            onClick={() => setTypeFilter(filter)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              typeFilter === filter
                ? 'bg-[#228B22] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-xl p-6 shadow-sm">
            {/* Icon and Type Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="text-[#228B22]" size={24} />
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(doc.type)} bg-opacity-10`}
                style={{ 
                  backgroundColor: doc.type === 'Ordinance' ? '#F3E8FF' : 
                                  doc.type === 'Resolution' ? '#DBEAFE' : '#FFF7ED' 
                }}>
                {doc.type}
              </span>
            </div>

            {/* Document Info */}
            <div className="mb-4">
              <h3 className="text-gray-800 mb-2">{doc.type} No. {doc.number}</h3>
              <p className="text-sm text-gray-700 mb-3">{doc.title}</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p>Type: {doc.fileType} • {doc.fileSize}</p>
                <p>Uploaded: {doc.uploadedDate}</p>
                <p>By: {doc.uploadedBy}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <Eye size={18} />
                View
              </button>
              <button className="flex-1 bg-[#228B22] text-white py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors flex items-center justify-center gap-2">
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
