# 쓰레기통 찾기 앱 (주제 고민용 프로토타입)

<br>

## 배포 주소
https://trash-finder-map.lovable.app/

<br>

## 서비스 분석

**시작 페인포인트 : 쓰레기(ex. 카페 음료컵)을 버릴 곳이 찾기 힘듬**

<br>

- 서비스가 필요한 문제 시나리오 정리
    - 관광객 A씨
        - 지방에서 올라온 관광객 A씨는 카페 음료를 들고 서울 북촌 한옥마을을 돌아다니고 있다.
        - 그러던 중 다마신 카페음료를 버리고 싶은데 10분째 쓰레기통을 찾을 수 없다.
    - 배달 기사
        - 카페 음료를 배달 중 부득이하게 카페 음료를 쏟아버렸다.
        - 휴지를 가지고 대충 정리했지만, 휴지더미를 버릴 곳을 찾을 수 없다.

<br>

- 사용자의 니즈
    - 자신의 주변에 있는 쓰레기통을 빠르고 간편하게 파악하고 싶다.

<br>

- 실제로 수요가 있을까?
    - https://sotong.go.kr/front/otherPlatform/otherPlatformViewPage.do?similar_propse_id=124399&miv_pageNo=984&miv_pageSize=&searchPlatform=&search_write_bgnde=2023-11-01&search_write_endde=2024-11-01&search_title_contents=&search_gubun=&search_orgNm=&search_tag=&search_writer=&date_range=1year&bbs=otherPlatform
    - https://sotong.go.kr/front/otherPlatform/otherPlatformViewPage.do?similar_propse_id=125004&miv_pageNo=678&miv_pageSize=&searchPlatform=&search_write_bgnde=2023-11-25&search_write_endde=2024-11-25&search_title_contents=&search_gubun=&search_orgNm=&search_tag=&search_writer=&date_range=1year&bbs=otherPlatform

<br>

**현재 서비스의 문제점 분석**

<br>

- 해당 서비스가 실제로 페인포인트를 해결할 수 있을까?
    - 쓰레기통을 찾기 힘들다는 것이 쓰레기통 위치를 몰라서가 아니라 쓰레기통의 개수가 적어서 그런 것이 아닐까?
    - 2024년부터 지금까지 쓰레기통을 계속해서 추가 설치하는 추세
        - https://mediahub.seoul.go.kr/archives/2010831
        - https://imnews.imbc.com/replay/2024/nwdesk/article/6587495_36515.html
        - https://news.sbs.co.kr/news/endPage.do?news_id=N1008007852
    - 이렇게 쓰레기통 설치가 추가되고 있고, 이를 추가된 쓰레기통 위치를 업데이트 할 수 있다면 현재 서비스가 더욱 페인포인트를 잘 해결할 수 있을 것이라고 생각함
    - 실제 쓰레기통 위치 뿐만 아니라 추가적으로 쓰레기통이 있을법한 장소(공공시설, 편의점, 등)을 포함해서 보여주면 페인포인트를 잘 해결할 수 있을 것 같다고 생각함

<br>

- 쓰레기통이 많아지면 오히려 현재 서비스가 필요하지 않게 되는 것 아닌지?
    - 쓰레기통을 찾으려고 할 때 서비스의 도움없이 바로 찾을 수 있을 만큼 쓰레기통의 개수가 늘리는 것은 현실적으로 불가능하다고 판단
    - 그리고 쓰레기통이 있다고 해도 발견하지 못한 가능성이 있음

<br>

- 쓰레기통 안내앱이 이미 있지 않을까?
    - 옛날에 만들어서 지금은 운영하지 않고 있거나, 외국에서 만들어 신뢰도가 떨어진다.

<br>

- 현실적으로 해결하기 힘든 다양한 문제점들
    - 공공 쓰레기통 위치 데이터의 부족
    - 잦은 쓰레기통 철거/재배치에 대응하기 힘듬
    - 서비스 사용 빈도가 낮고, 필요성도 일시적임
    - 쓰레기 불법투기 때문에 오히려 쓰레기통 위치를 공개하지 않으려고 하는 경우도 있음
- 고민 방향
    - 범위를 서울로만 한정하면 어떨까? 조사가 더 필요하지만 서울 내의 쓰레기통 정보는 관리가 되고 있는 것 같다.
    - 쓰레기통 위치없이 쓰레기통이 있을법한 장소(공공시설, 편의점, 등)만을 보여주면 어떨까? 사용자들에게 신뢰성있는 쓰레기를 버릴 수 있는 위치를 전달할 수 있을 것 같다. 
    - 이후에 쓰레기통만이 아니라 “버스 정류장에서 가장 가까운 화장실 위치”, “역내에 역무원 사무실 위치”, “역 내의 분실물 센터 위치” 등을 찾을 수 있는 기능을 추가하여 기존의 지도 서비스로는 찾기 힘든 다양한 위치정보를 확인할 수 있는 서비스로 확장하면 어떨까? 이를통해 쓰레기통의 위치정보가 완벽하지 않아도, 서비스를 지속적으로 충분히 사용할만 하지 않을까?
 



