# 쓰레기통 찾기 앱

## 배포 주소
https://trash-finder-map.lovable.app/

## 서비스 분석

## 공용 쓰레기통 안내앱

**시작 페인포인트 : 쓰레기(ex. 카페 음료컵)을 버릴 곳이 찾기 힘듬**

- 서비스가 필요한 문제 시나리오 정리
    - 관광객 A씨
        - 지방에서 올라온 관광객 A씨는 카페 음료를 들고 서울 북촌 한옥마을을 돌아다니고 있다.
        - 그러던 중 다마신 카페음료를 버리고 싶은데 10분째 쓰레기통을 찾을 수 없다.
    - 배달 기사
        - 카페 음료를 배달 중 부득이하게 카페 음료를 쏟아버렸다.
        - 휴지를 가지고 대충 정리했지만, 휴지더미를 버릴 곳을 찾을 수 없다.
- 사용자의 니즈
    - 자신의 주변에 있는 쓰레기통을 빠르고 간편하게 파악하고 싶다.
- 실제로 수요가 있을까?
    - https://sotong.go.kr/front/otherPlatform/otherPlatformViewPage.do?similar_propse_id=124399&miv_pageNo=984&miv_pageSize=&searchPlatform=&search_write_bgnde=2023-11-01&search_write_endde=2024-11-01&search_title_contents=&search_gubun=&search_orgNm=&search_tag=&search_writer=&date_range=1year&bbs=otherPlatform
    - https://sotong.go.kr/front/otherPlatform/otherPlatformViewPage.do?similar_propse_id=125004&miv_pageNo=678&miv_pageSize=&searchPlatform=&search_write_bgnde=2023-11-25&search_write_endde=2024-11-25&search_title_contents=&search_gubun=&search_orgNm=&search_tag=&search_writer=&date_range=1year&bbs=otherPlatform

**현재 서비스의 문제점 (기술적인 부분 제외)**

- 페인포인트는 확실 하지만, 이용 동기가 애매하다.
    - 확실한 페인 포인트가 맞기는 하지만 과연 사용자들이 현재 서비스를 찾아서 사용할까?
    - 굳이 앱을 다운받아서 사용하지는 않을 것 같다.
    - 하지만 구글이나 네이버에 검색했을 때 바로 나온다면 사용해볼 것 같다.
    - 또한 쓰레기통만이 아니라 “공용 화장실 위치”, “역내에 역무원 사무실 위치”, “역 내의 분실물 센터 위치” 등 불편함을 야기하는 다양한 위치 정보를 확인할 수 있도록 하는 기능을 추가 시 직접 찾아서도 사용해 볼만 할 것 같다.
- 해당 서비스가 실제로 페인포인트를 해결할 수 있을까?
    - 쓰레기통을 찾기 힘들다는 것이 쓰레기통 위치를 몰라서가 아니라 쓰레기통의 개수가 적어서 그런 것이 아닐까?
    - 2024년부터 지금까지 쓰레기통을 계속해서 추가 설치하는 추세
        - https://mediahub.seoul.go.kr/archives/2010831
        - https://imnews.imbc.com/replay/2024/nwdesk/article/6587495_36515.html
        - https://news.sbs.co.kr/news/endPage.do?news_id=N1008007852
    - 이렇게 쓰레기통 설치가 추가되고 있고, 이를 추가된 쓰레기통 위치를 업데이트 할 수 있다면 현재 서비스가 더욱 페인포인트를 잘 해결할 수 있을 것이라고 생각함
    - 그리고 이후에 쓰레기통 뿐만 아니라 “공용 화장식 위치” 등을 추가한다면 좀더 다양한 타겟층을 노릴 수도 있지않을까?
- 쓰레기통이 많아지면 오히려 현재 서비스가 필요하지 않게 되는 것 아닌지?
    - 쓰레기통을 찾으려고 할 때 서비스의 도움없이 바로 찾을 수 있을 만큼 쓰레기통의 개수가 늘리는 것은 현실적으로 불가능하다고 판단
    - 그리고 쓰레기통이 있다고 해도 발견하지 못한 가능성이 있음
- 쓰레기통 안내앱이 이미 있지 않을까?
    - 생각보다 별로 없음
    - 옛날에 만들어서 지금은 운영하지 않고 있거나, 외국에서 만들어 신뢰도가 떨어지는 경우만 있음
- 기회가 된다면 완성 결과물을 가지고 있다가 내년에 서울시 공모전에 넣어보자!
    - https://mediahub.seoul.go.kr/gongmo/2000617