import React, { useMemo } from 'react';
import Dotted from 'dotted-map';

/**
 * Sanitize SVG content by removing potentially dangerous elements and attributes
 * This is a basic sanitizer - for production, consider using DOMPurify
 */
function sanitizeSVG(svgString: string): string {
  // Remove script tags and event handlers
  let sanitized = svgString
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<iframe/gi, '<iframe-disabled');

  // Ensure it's actually SVG
  if (!sanitized.trim().startsWith('<svg')) {
    console.warn('[DottedMapView] Invalid SVG content detected');
    return '';
  }

  return sanitized;
}

const DottedMapView: React.FC = () => {
  // Brazilian states coordinates (latitude, longitude)
  const brazilianStates = useMemo(() => [
    // North
    { lat: -0.28, lng: -51.13 }, // AP
    { lat: 1.38, lng: -61.4 }, // RR
    { lat: -1.73, lng: -62.2 }, // AM
    { lat: -2.5, lng: -51.92 }, // PA
    { lat: -3.1, lng: -60.02 }, // AM border
    { lat: -5.5, lng: -68.17 }, // AC
    { lat: -6.97, lng: -63.82 }, // RO
    { lat: -4.32, lng: -55.86 }, // TO

    // Northeast
    { lat: -3.74, lng: -38.54 }, // CE
    { lat: -5.78, lng: -35.21 }, // RN
    { lat: -6.88, lng: -38.57 }, // PB
    { lat: -8.83, lng: -40.5 }, // PE
    { lat: -9.67, lng: -35.74 }, // AL
    { lat: -10.27, lng: -36.67 }, // SE
    { lat: -12.97, lng: -38.51 }, // BA
    { lat: -6.67, lng: -42.27 }, // PI
    { lat: -2.9, lng: -41.78 }, // MA

    // Central-West
    { lat: -15.67, lng: -56.17 }, // MS
    { lat: -15.58, lng: -55.5 }, // MT
    { lat: -15.74, lng: -47.87 }, // DF/GO

    // Southeast
    { lat: -19.74, lng: -42.85 }, // RJ
    { lat: -21.58, lng: -43.17 }, // RJ/SP border
    { lat: -23.17, lng: -49.95 }, // SP
    { lat: -22.67, lng: -45.42 }, // MG
    { lat: -20.7, lng: -40.28 }, // ES

    // South
    { lat: -25.68, lng: -49.25 }, // PR
    { lat: -28.15, lng: -52.58 }, // RS
    { lat: -27.17, lng: -50.26 }, // SC
  ], []);

  const svgContent = useMemo(() => {
    const dotted = new Dotted({ height: 60, width: 130 });

    // Add dots for each state
    brazilianStates.forEach(state => {
      dotted.addPin({
        lat: state.lat,
        lng: state.lng,
        svgOptions: { color: '#3B82F6', radius: 6 }
      });
    });

    const rawSVG = dotted.getSVG({ color: '#3B82F6', radius: 6 });
    return sanitizeSVG(rawSVG);
  }, [brazilianStates]);

  return (
    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 p-5">
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className="w-full h-full flex items-center justify-center"
        aria-label="Brazilian states map visualization"
      />
    </div>
  );
};

export default DottedMapView;
