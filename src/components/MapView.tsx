
import { useEffect, useRef } from "react";
import { MapPin, Navigation, Plus, Minus } from "lucide-react";

interface MapViewProps {
  userLocation: { lat: number; lng: number };
  selectedTrashCan: number | null;
  onTrashCanSelect: (id: number | null) => void;
}

// 가상의 쓰레기통 데이터 (북촌 한옥마을 주변)
const mockTrashCans = [
  { id: 1, lat: 37.5795, lng: 126.9850, type: "일반", location: "북촌 한옥마을 입구" },
  { id: 2, lat: 37.5805, lng: 126.9860, type: "분리수거", location: "삼청동길" },
  { id: 3, lat: 37.5785, lng: 126.9840, type: "일반", location: "가회동 골목" },
  { id: 4, lat: 37.5810, lng: 126.9870, type: "일반", location: "삼청공원 입구" },
  { id: 5, lat: 37.5790, lng: 126.9830, type: "분리수거", location: "정독도서관" },
  { id: 6, lat: 37.5800, lng: 126.9880, type: "일반", location: "인사동 방향" },
];

const MapView = ({ userLocation, selectedTrashCan, onTrashCanSelect }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full bg-green-50 rounded-lg overflow-hidden">
      {/* 지도 배경 (프로토타입용 정적 이미지) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50">
        {/* 가상 지도 그리드 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* 도로 표시 */}
        <div className="absolute top-1/3 left-0 right-0 h-8 bg-gray-300 opacity-60 transform rotate-12" />
        <div className="absolute top-2/3 left-0 right-0 h-6 bg-gray-300 opacity-60 transform -rotate-6" />
        <div className="absolute left-1/4 top-0 bottom-0 w-6 bg-gray-300 opacity-60 transform rotate-12" />
        
        {/* 건물들 표시 */}
        <div className="absolute top-1/4 left-1/3 w-16 h-12 bg-orange-200 rounded shadow-sm opacity-80" />
        <div className="absolute top-1/2 right-1/4 w-12 h-16 bg-blue-200 rounded shadow-sm opacity-80" />
        <div className="absolute bottom-1/3 left-1/5 w-20 h-10 bg-red-200 rounded shadow-sm opacity-80" />
      </div>

      {/* 사용자 위치 */}
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ 
          left: '50%', 
          top: '50%' 
        }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse" />
          <div className="absolute inset-0 w-4 h-4 bg-blue-600 rounded-full opacity-30 animate-ping" />
        </div>
      </div>

      {/* 쓰레기통 위치들 */}
      {mockTrashCans.map((trashCan, index) => {
        const offsetX = (index % 3 - 1) * 80;
        const offsetY = (Math.floor(index / 3) - 1) * 60;
        const isSelected = selectedTrashCan === trashCan.id;
        
        return (
          <div
            key={trashCan.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ 
              left: `${50 + offsetX/10}%`, 
              top: `${50 + offsetY/10}%` 
            }}
            onClick={() => onTrashCanSelect(trashCan.id)}
          >
            <div className={`relative ${isSelected ? 'scale-125' : 'hover:scale-110'} transition-transform`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                trashCan.type === '분리수거' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 text-white'
              } ${isSelected ? 'ring-4 ring-blue-300' : ''}`}>
                <MapPin className="h-4 w-4" />
              </div>
              
              {/* 거리 표시 */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-sm whitespace-nowrap">
                {Math.floor(Math.random() * 200 + 50)}m
              </div>
            </div>
          </div>
        );
      })}

      {/* 범례 */}
      <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg z-30">
        <div className="text-sm font-medium mb-2">범례</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full" />
            <span className="text-xs">내 위치</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
            <span className="text-xs">일반쓰레기</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full" />
            <span className="text-xs">분리수거</span>
          </div>
        </div>
      </div>

      {/* 지도 확대/축소 버튼 */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2 z-30">
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50">
          <Plus className="h-4 w-4" />
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50">
          <Minus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MapView;
