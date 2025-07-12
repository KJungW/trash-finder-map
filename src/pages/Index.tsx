
import { useState } from "react";
import { Search, MapPin, Navigation, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import MapView from "@/components/MapView";
import TrashCanList from "@/components/TrashCanList";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrashCan, setSelectedTrashCan] = useState<number | null>(null);
  const [userLocation, setUserLocation] = useState({ lat: 37.5795, lng: 126.9850 }); // 북촌 한옥마을

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log("위치 정보를 가져올 수 없습니다:", error);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Trash2 className="h-6 w-6 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">쓰레기통 찾기</h1>
            </div>
            <Button 
              onClick={getCurrentLocation}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Navigation className="h-4 w-4 mr-2" />
              내 위치
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="지역명, 건물명으로 검색 (예: 북촌 한옥마을, 명동역)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                검색
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <MapView 
                  userLocation={userLocation}
                  selectedTrashCan={selectedTrashCan}
                  onTrashCanSelect={setSelectedTrashCan}
                />
              </CardContent>
            </Card>
          </div>

          {/* Trash Can List */}
          <div className="lg:col-span-1">
            <TrashCanList 
              selectedTrashCan={selectedTrashCan}
              onTrashCanSelect={setSelectedTrashCan}
              userLocation={userLocation}
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Index;
