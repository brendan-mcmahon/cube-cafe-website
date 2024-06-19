import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // Import Worker

const PDFViewer = () => (
    <div style={{ height: '750px' }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="/Cube Cafe Rulebook Dark.pdf" />
        </Worker>
    </div>
);

export default PDFViewer;
