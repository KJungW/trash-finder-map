
import { MapPin, Clock, Navigation2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TrashCanListProps {
  selectedTrashCan: number | null;
  onTrashCanSelect: (id: number) => void;
  userLocation: { lat: number; lng: number };
}

// 가상의 쓰레기통 데이터
const mockTrashCans = [
  { 
    id: 1, 
    type: "일반", 
    location: "북촌 한옥마을 입구", 
    address: "서울시 종로구 계동길 37",
    distance: 50,
    lastUpdated: "10분 전",
    available: true,
    description: "한옥마을 메인 입구 앞, 관광안내소 옆"
  },
  { 
    id: 2, 
    type: "분리수거", 
    location: "삼청동길", 
    address: "서울시 종로구 삼청동길 30",
    distance: 120,
    lastUpdated: "25분 전",
    available: true,
    description: "삼청동 카페거리, 스타벅스 앞"
  },
  { 
    id: 3, 
    type: "일반", 
    location: "가회동 골목", 
    address: "서울시 종로구 가회동 11-5",
    distance: 180,
    lastUpdated: "1시간 전",
    available: false,
    description: "전통찻집 골목 입구"
  },
  { 
    id: 4, 
    type: "일반", 
    location: "삼청공원 입구", 
    address: "서울시 종로구 삼청동 1-2",
    distance: 250,
    lastUpdated: "30분 전",
    available: true,
    description: "삼청공원 정문 앞, 버스정류장 근처"
  },
  { 
    id: 5, 
    type: "분리수거", 
    location: "정독도서관", 
    address: "서울시 종로구 북촌로5길 48",
    distance: 320,
    lastUpdated: "45분 전",
    available: true,
    description: "정독도서관 정문 우측"
  },
];

const TrashCanList = ({ selectedTrashCan, onTrashCanSelect, userLocation }: TrashCanListProps) => {
  // 거리순으로 정렬
  const sortedTrashCans = [...mockTrashCans].sort((a, b) => a.distance - b.distance);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>주변 쓰레기통</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-600 mb-4">
            총 {mockTrashCans.length}개의 쓰레기통을 찾았습니다
          </div>
          
          <div className="space-y-3">
            {sortedTrashCans.map((trashCan) => (
              <Card 
                key={trashCan.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedTrashCan === trashCan.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => onTrashCanSelect(trashCan.id)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={trashCan.type === '분리수거' ? 'default' : 'secondary'}
                        className={trashCan.type === '분리수거' ? 'bg-green-500' : 'bg-orange-500'}
                      >
                        {trashCan.type}
                      </Badge>
                      <Badge 
                        variant={trashCan.available ? 'outline' : 'destructive'}
                      >
                        {trashCan.available ? '사용가능' : '만석'}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      {trashCan.distance}m
                    </span>
                  </div>
                  
                  <h3 className="font-medium text-gray-900 mb-1">
                    {trashCan.location}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {trashCan.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>업데이트: {trashCan.lastUpdated}</span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="h-6 px-2 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        // 길찾기 기능 (프로토타입)
                        alert(`${trashCan.location}으로 길찾기를 시작합니다.`);
                      }}
                    >
                      <Navigation2 className="h-3 w-3 mr-1" />
                      길찾기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 빠른 팁 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">💡 팁</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>• 분리수거함에는 플라스틱, 캔류만 버려주세요</p>
          <p>• 일반쓰레기통에는 음식물 쓰레기를 피해주세요</p>
          <p>• 만석 표시는 실시간이 아닐 수 있습니다</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrashCanList;
