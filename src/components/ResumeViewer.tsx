'use client';

import { PDFViewer } from '@react-pdf/renderer';

import { PDFProvider } from './DocumentContext';
import { ResumeDocument } from './ResumeDocument';

export function ResumeViewer() {
  return (
    <PDFViewer
      showToolbar={false}
      style={{ height: '100vh', aspectRatio: '8.5/11', border: 'none' }}
    >
      <PDFProvider>
        <ResumeDocument />
      </PDFProvider>
    </PDFViewer>
  );
}
