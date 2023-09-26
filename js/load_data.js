const ITEM_LIST = [
    // 베스트 셀러 0번
    [
        {item_no: 1, src: 'best1.png', title: '바하 버블 필링 클렌저', o_price: 22000, s_percent: '20%', s_price: 17600, desc: '바하 버블이 데일리 필링과 트러블 진정을 도와주는 솝프리 약산성 클렌징폼'},
        {item_no: 2, src: 'best2.png', title: '페이셜 마일드 필링', o_price: 30000, s_percent: '20%', s_price: 24000, desc: '묵은 각질과 모공 피지는 부드럽게 제거하고, 피부 장벽은 보호해주는 NO.1 국민필링젤'},
        {item_no: 3, src: 'best3.png', title: '내추럴 리치 클렌징 폼', o_price: 20000, s_percent: '20%', s_price: 14000, desc: '식물 유래 세정 성분으로 피부 노폐물을 깨끗하게 지워주는 부드러운 클렌징 폼'},
        {item_no: 4, src: 'best4.png', title: '리치 포밍 클렌저', o_price: 20000, s_percent: '20%', s_price: 17000, desc: '풍성한 거품으로 빠르고 산뜻하게 노폐물을 제거해주는 버블 클렌저'},
        {item_no: 5, src: 'best5.png', title: '모이스처 클렌징 티슈', o_price: 20000, s_percent: '20%', s_price: 17000, desc: '간편하게 메이크업을 제거해주는 클렌징 티슈'},
        {item_no: 6, src: 'best6.png', title: '오가니언스 워터리 에센스', o_price: 29000, s_percent: '20%', s_price: 29000, desc: '비우고 채워주는 피부 칠링으로 탄탄하고 생기 있는 피부로 만드는 산뜻한 워터 제형 에센스'},
        {item_no: 7, src: 'best7.png', title: '알파인 베리 워터리 크림 미스트', o_price: 25000, s_percent: '20%', s_price: 21250, desc: '비우고 채워주는 피부 칠링으로 탄탄하고 생기 있는 피부로 만드는 산뜻한 워터 제형 에센스'},
        {item_no: 8, src: 'best8.png', title: '오가니언스 워터', o_price: 30000, s_percent: '20%', s_price: 24000, desc: '맑고 촉촉한 피부를 위한 데일리 토너'},
        {item_no: 9, src: 'best9.png', title: '와일드 씨드 퍼밍 워터', o_price: 38000, s_percent: '20%', s_price: 32300, desc: '쫀득하고 영양감 있는 꿀 제형이 피부결을 촘촘하고 촉촉하게 채워주는 탄력 스킨'},
        {item_no: 10, src: 'best10.png', title: '와일드 피치 포어 워터', o_price: 30000, s_percent: '20%', s_price: 25500, desc: '피부를 진정하고 각질을 잠재워 매끄러운 피부결로 가꿔주는 리프레싱 토너'},
        {item_no: 11, src: 'best11.png', title: 'ALL NEW 미라클 씨드 에센스', o_price: 55000, s_percent: '20%', s_price: 41250, desc: '피부 항산화력 작용으로 본연의 힘을 강화하고 강력한 수분 진정 효과로 피부 속부터 케어하여 건강하고 맑은 안색으로 가꿔주는 기능성 워터 에센스'},
        {item_no: 12, src: 'best12.png', title: '프라임 리커버리 더블 캡슐 세럼', o_price: 110000, s_percent: '20%', s_price: 104500, desc: '근본부터 탄탄하게 채워 생기 있게 빛나는 피부'},
        {item_no: 13, src: 'best13.png', title: '슈퍼 블랙 씨드 콜드-드랍 세럼', o_price: 53000, s_percent: '20%', s_price: 34450, desc: '블랙씨드의 항산화 성분으로 초기 노화를 케어하고 유해환경으로부터 피부를 지키는 저자극 얼리-안티에이징 세럼'},
        {item_no: 14, src: 'best14.png', title: '리페어빈 시카 에센스', o_price: 35000, s_percent: '20%', s_price: 29750, desc: '건조로 인해 손상된 피부를 진정시켜 주는 수분 진정 에센스'},
        {item_no: 15, src: 'best15.png', title: '와일드 씨드 퍼밍 세럼', o_price: 65000, s_percent: '20%', s_price: 55250, desc: '힘없는 피부의 탄력을 집중 개선해주는 퍼밍-리프팅-타이트닝 3중 탄력 케어 세럼'},
        {item_no: 16, src: 'best16.png', title: '오가니언스 세럼', o_price: 35000, s_percent: '20%', s_price: 29750, desc: '피부에 활력을 부여해 촉촉하고 매끄러운 피부로 가꿔주는 세럼'}
    ],

    // 신제품 1번
    [
        {item_no: 1, src: 'new1.png', title: '오가니언스 에멀전', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 2, src: 'new2.png', title: '와일드 씨드 퍼밍 에멀전', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 3, src: 'new3.png', title: '와일드 피치 포어 에멀전', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 4, src: 'new4.png', title: 'ALL NEW 미라클 씨드 에센스', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 5, src: 'new5.png', title: '아로마 바디 스크럽 워시 프레시-업', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 6, src: 'new6.png', title: '아로마 바디 스크럽 워시 킵-캄', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 7, src: 'new7.png', title: '민트 리프레싱 샴푸', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'},
        {item_no: 8, src: 'new8.png', title: '그린티 바이옴 스칼프 쿨링 샴푸', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '상품설명'}
    ],

    // 클렌징 2번
    [
        {item_no: 1, src: 'cleansing1.png', title: '바하 버블 필링 클렌저', o_price: 22000, s_percent: '20%', s_price: 17600, desc: '바하 버블이 데일리 필링과 트러블 진정을 도와주는 솝프리 약산성 클렌징폼'},
        {item_no: 2, src: 'cleansing2.png', title: '페이셜 마일드 필링', o_price: 30000, s_percent: '20%', s_price: 24000, desc: '묵은 각질과 모공 피지는 부드럽게 제거하고, 피부 장벽은 보호해주는 NO.1 국민필링젤'},
        {item_no: 3, src: 'cleansing3.png', title: '내추럴 리치 클렌징 폼', o_price: 20000, s_percent: '20%', s_price: 14000, desc: '식물 유래 세정 성분으로 피부 노폐물을 깨끗하게 지워주는 부드러운 클렌징 폼'},
        {item_no: 4, src: 'cleansing4.png', title: '리치 포밍 클렌저', o_price: 20000, s_percent: '20%', s_price: 17000, desc: '풍성한 거품으로 빠르고 산뜻하게 노폐물을 제거해주는 버블 클렌저'},
        {item_no: 5, src: 'cleansing5.png', title: '모이스처 클렌징 티슈', o_price: 20000, s_percent: '20%', s_price: 17000, desc: '간편하게 메이크업을 제거해주는 클렌징 티슈'}
    ],

    // 토너 3번
    [
        {item_no: 1, src: 'toner1.png', title: '오가니언스 워터리 에센스', o_price: 29000, s_percent: '20%', s_price: 29000, desc: '비우고 채워주는 피부 칠링으로 탄탄하고 생기 있는 피부로 만드는 산뜻한 워터 제형 에센스'},
        {item_no: 2, src: 'toner2.png', title: '알파인 베리 워터리 크림 미스트', o_price: 25000, s_percent: '20%', s_price: 21250, desc: '비우고 채워주는 피부 칠링으로 탄탄하고 생기 있는 피부로 만드는 산뜻한 워터 제형 에센스'},
        {item_no: 3, src: 'toner3.png', title: '오가니언스 워터', o_price: 30000, s_percent: '20%', s_price: 24000, desc: '맑고 촉촉한 피부를 위한 데일리 토너'},
        {item_no: 4, src: 'toner4.png', title: '와일드 씨드 퍼밍 워터', o_price: 38000, s_percent: '20%', s_price: 32300, desc: '쫀득하고 영양감 있는 꿀 제형이 피부결을 촘촘하고 촉촉하게 채워주는 탄력 스킨'},
        {item_no: 5, src: 'toner5.png', title: '와일드 피치 포어 워터', o_price: 30000, s_percent: '20%', s_price: 25500, desc: '피부를 진정하고 각질을 잠재워 매끄러운 피부결로 가꿔주는 리프레싱 토너'}
    ],

    // 세럼 4번
    [
        {item_no: 1, src: 'serum1.png', title: 'ALL NEW 미라클 씨드 에센스', o_price: 55000, s_percent: '20%', s_price: 41250, desc: '피부 항산화력 작용으로 본연의 힘을 강화하고 강력한 수분 진정 효과로 피부 속부터 케어하여 건강하고 맑은 안색으로 가꿔주는 기능성 워터 에센스'},
        {item_no: 2, src: 'serum2.png', title: '프라임 리커버리 더블 캡슐 세럼', o_price: 110000, s_percent: '20%', s_price: 104500, desc: '근본부터 탄탄하게 채워 생기 있게 빛나는 피부'},
        {item_no: 3, src: 'serum3.png', title: '슈퍼 블랙 씨드 콜드-드랍 세럼', o_price: 53000, s_percent: '20%', s_price: 34450, desc: '블랙씨드의 항산화 성분으로 초기 노화를 케어하고 유해환경으로부터 피부를 지키는 저자극 얼리-안티에이징 세럼'},
        {item_no: 4, src: 'serum4.png', title: '리페어빈 시카 에센스', o_price: 35000, s_percent: '20%', s_price: 29750, desc: '건조로 인해 손상된 피부를 진정시켜 주는 수분 진정 에센스'},
        {item_no: 5, src: 'serum5.png', title: '와일드 씨드 퍼밍 세럼', o_price: 65000, s_percent: '20%', s_price: 55250, desc: '힘없는 피부의 탄력을 집중 개선해주는 퍼밍-리프팅-타이트닝 3중 탄력 케어 세럼'},
        {item_no: 6, src: 'serum6.png', title: '오가니언스 세럼', o_price: 35000, s_percent: '20%', s_price: 29750, desc: '피부에 활력을 부여해 촉촉하고 매끄러운 피부로 가꿔주는 세럼'}
    ],
    
    // 에멀전 5번
    [
        {item_no: 1, src: 'emulsion1.png', title: '오가니언스 에멀전', o_price: 30000, s_percent: '20%', s_price: 24000, desc: '수분과 영양감을 채우고 피부 밸런스를 유지해주는 에멀젼'},
        {item_no: 2, src: 'emulsion2.png', title: '와일드 씨드 퍼밍 에멀전', o_price: 38000, s_percent: '20%', s_price: 32300, desc: '피부 기초 탄력 트레이너 윤기 영양 에멀전'},
        {item_no: 3, src: 'emulsion3.png', title: '와일드 피치 포어 에멀전', o_price: 30000, s_percent: '20%', s_price: 25500, desc: '과분비된 피지를 케어하고 수분을 공급하여 피부의 유수분 밸런스를 맞춰주는 에멀전'}
    ],

    // 크림 6번
    [
        {item_no: 1, src: 'cream1.png', title: '슈퍼 블랙 씨드 콜드-드랍 크림', o_price: 58000, s_percent: '20%', s_price: 37700, desc: '블랙씨드의 항산화 성분을 고스란히 추출하여 초기 노화를 케어하고 피부 장벽을 강화하는 얼리-안티에이징 크림'},
        {item_no: 2, src: 'cream2.png', title: '알파인 베리 워터리 크림', o_price: 39000, s_percent: '20%', s_price: 31200, desc: '건강한 생기를 부여하는 진정∙회복 크림'},
        {item_no: 3, src: 'cream3.png', title: '알파인 베리 워터리 수딩 젤크림', o_price: 39000, s_percent: '20%', s_price: 31200, desc: '깊은 보습과 피부 장벽 강화까지 장착한 쿨링∙진정 젤크림'},
        {item_no: 4, src: 'cream4.png', title: '와일드 씨드 퍼밍 크림', o_price: 70000, s_percent: '20%', s_price: 59500, desc: '시들지 않는 야생콩의 성장 에너지를 응축한 와일드-퍼밍이 주름과 탄력을 동시에 개선하여 탄탄하고 윤기있는 피부로 가꿔주는 크림'},
        {item_no: 5, src: 'cream5.png', title: '리페어빈 시카 크림', o_price: 35000, s_percent: '20%', s_price: 29750, desc: '건조로 인해 손상된 피부를 진정시켜 주는 피부 장벽 강화 크림'},
        {item_no: 6, src: 'cream6.png', title: '와일드 씨드 퍼밍 아이 크림', o_price: 55000, s_percent: '20%', s_price: 46750, desc: '납작콩의 효능을 담아 탄탄하고 촉촉한 눈가 피부를 선사하는 퍼밍 아이 크림'}
    ],

    // 맨 7번
    [
        {item_no: 1, src: 'men1.png', title: '맨 워터리 플루이드', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '건조로 인해 손상된 남성 피부를 진정시켜주고, 피부에 필요한 수분을 공급하는 가볍고 산뜻한 남성 수분 플루이드'},
        {item_no: 2, src: 'men2.png', title: '맨 오가니언스 세범 컷 플루이드', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '과다 분비된 피지 조절과 여드름성 피부에 사용 가능한 수분 플루이드'},
        {item_no: 3, src: 'men3.png', title: '맨 오가니언스 퓨리파잉 클렌저', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '과잉 피지와 노폐물을 제거해주는 팩-폼 겸용 클렌저'},
        {item_no: 4, src: 'men4.png', title: '맨 오가니언스 트리트먼트 워터', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '풍부한 수분을 공급하고 영양감을 동시에 줄 수 있는 스킨'},
        {item_no: 5, src: 'men5.png', title: '맨 오가니언스 모이스처라이징 에멀전', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '풍부한 수분을 공급하고 피부에 활력을 불어넣어 주는 에멀전'}
    ],

    // 베이비 8번
    [
        {item_no: 1, src: 'baby1.png', title: '베이비 페이셜 & 바디 워시', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '유아 피부를 깨끗하고 건강하게 지켜주는 전신 세정제'},
        {item_no: 2, src: 'baby2.png', title: '베이비 선 쿠션', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '유아 피부를 지켜주는 사용이 간편한 쿠션 타입의 선 크림'},
        {item_no: 3, src: 'baby3.png', title: '베이비 아토트리트 크림', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '피부 건조로 인한 가려움과 자극을 완화하여 건강한 피부로 가꿔주는 유아용 고보습 크림'}
    ],

    // 스페셜케어 9번
    [
        {item_no: 1, src: 'special_care1.png', title: '스킨릴리프 UV 프로텍터 EX', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '자외선을 차단하고 외부 유해 환경으로부터 피부를 보호하며 블루라이트까지 차단해주는 수분베이스 dual-light defender'},
        {item_no: 2, src: 'special_care2.png', title: '씨드 앤 스프라우트 에너지 마스크 로터스', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '수분 막을 코팅한 듯 촉촉함을 지속시키고 피부 진정과 활력에 도움을 주는 순면 시트 마스크'},
        {item_no: 3, src: 'special_care3.png', title: '스킨 릴리프 UV 프로텍터', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '자외선과 외부 유해 환경으로부터 피부를 지키는 가볍고 산뜻한 수분 선크림'},
        {item_no: 4, src: 'special_care4.png', title: '스킨 릴리프 워터프루프 선블록', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '강력한 자외선 차단 효과의 물과 땀에 강한 아웃도어용 자외선 차단제'},
        {item_no: 5, src: 'special_care5.png', title: '내추럴 베리 립 마스크', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '씨베리 열매가 영양을 공급하고 무루무루 버터를 포함한 풍부한 식물유래 보습성분이 건조하고 갈라진 입술을 집중 케어하는 립 마스크'},
        {item_no: 6, src: 'special_care6.png', title: '내추럴 베리 립밤', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '씨베리 열매가 영양을 공급하고, 무루무루 버터가 여린 입술을 촉촉하고 생기있게 케어하는 립밤'}
    ],

    // 바디 워시 10번
    [
        {item_no: 1, src: 'body_wash1.png', title: '망고 버터 컴포팅 바디 워시', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '풍부한 보습력을 지닌 망고 씨드 버터와 호호바씨 오일이 촉촉하고 편안한 세정을 돕는 바디 워시'},
        {item_no: 2, src: 'body_wash2.png', title: '아로마 바디 스크럽 워시 프레시-업', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '자연 유래 스크럽을 함유하여 각질 제거와 세정을 동시에 해주는 향긋한 아로마 바디 스크럽 워시'},
        {item_no: 3, src: 'body_wash3.png', title: '아로마 바디 스크럽 워시 킵-캄', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '자연 유래 스크럽을 함유하여 각질 제거와 세정을 동시에 해주는 향긋한 아로마 바디 스크럽 워시'}
    ],

    // 바디 로션 11번
    [
        {item_no: 1, src: 'body_lotion1.png', title: '망고 버터 컴포팅 바디 로션', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '풍부한 보습력을 지닌 망고 씨드 버터와 호호바씨 오일이 피부를 촉촉하게 보호해주는 바디 로션'},
        {item_no: 2, src: 'body_lotion2.png', title: '더 릴리프 크림 포 스트레치 마크', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '튼살로 인한 붉은 선을 4주에 완화하고 피부 거칠기, 탄력 등을 다각도로 케어해주는 튼살 완화 기능성 크림'}
    ],

    // 헤어 12번
    [
        {item_no: 1, src: 'hair1.png', title: '그린티 바이옴 스칼프 쿨링 샴푸', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '두피부터 모발까지 산뜻한 청량감과 깊은 영양 공급으로 탈모 증상 케어 샴푸'},
        {item_no: 2, src: 'hair2.png', title: '민트 리프레싱 샴푸', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '페퍼민트와 라임 성분이 함유되어 두피와 모발을 산뜻하게 가꿔주는 설페이트 프리 샴푸(지성모발)'},
        {item_no: 3, src: 'hair3.png', title: '블랙씨드 스칼프 릴리프 트리트먼트', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '두피 진정 및 푸석한 모발에 영양을 공급하는 두피&모발 저자극 트리트먼트'},
        {item_no: 4, src: 'hair4.png', title: '그린티 바이옴 스칼프 헤어 모이스처라이저', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '두피와 모발에 깊은 보습과 매끄러운 윤기를 주는 실리콘 오일 프리 두피모발 전용 수분 로션'},
        {item_no: 5, src: 'hair5.png', title: '블랙씨드 스칼프 릴리프 헤어 토닉', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '외부 스트레스로 예민해진 두피를 진정하고 발아 흑콩 성분이 모근 강화에 도움을 주는 두피 진정 헤어 토닉'},
        {item_no: 6, src: 'hair6.png', title: '마룰라 안티-드라이니스 모이스처 헤어 세럼', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '탁월한 보습력의 마룰라 오일이 수분 손실 예방과 모발 보호막 강화 효과를 주고 세라스테이 부드러운 모발로 케어하여, 극건조의 손상 모발을 촉촉하고 건강하게 가꾸어주는 강력한 수분 충전 세럼'}
    ],

    // 핸드케어 13번
    [
        {item_no: 1, src: 'hand_care1.png', title: '핸드크림 (브리드 디플리/스테이 웜)', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '감각적인 향과 디자인으로 나의 시간을 완성시켜주는 핸드크림'},
        {item_no: 2, src: 'hand_care2.png', title: '클린 앤 세이프 새니타이저 겔 (에탄올)', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '15초 이내 강력 살균효과로 외부 세균으로부터 나를 보호해주는 촉촉한 새니타이저'},
        {item_no: 3, src: 'hand_care3.png', title: '클린 앤 세이프 새니타이저', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '15초 이내 강력한 살균 효과로 외부 세균으로부터 나를 보호해주는 향긋한 라임향 새니타이저'}
    ],

    // 시크릿케어 14번
    [
        {item_no: 1, src: 'secret_care1.png', title: '후리 앤 후리', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '연약한 Y존 장벽을 보호 세정해주는 프로바이오틱스 약산성 여성 청결제'},
        {item_no: 2, src: 'secret_care2.png', title: '후리 앤 후리 소프트 폼', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '부드러운 거품 타입으로 Y존 장벽 보호 세정하는 약산성 프로바이오틱스 여성 청결제'}
    ],

    // 디퓨져 15번
    [
        {item_no: 1, src: 'diffuser1.png', title: '내추럴 디퓨저 써니 시트러스 가든', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '가벼운 산들바람처럼 싱그럽고 신선한 향을 실내에 전달하는 자연 유래 에센셜 오일 향 디퓨저'},
        {item_no: 2, src: 'diffuser2.png', title: '내추럴 디퓨저 스틱', o_price: 20000, s_percent: '20%', s_price: 1000, desc: '실내공간을 은은한 향으로 채워주는 홈 디퓨저 스틱'}
    ]
];

const img_addr = "img/items/";
const product_title_array = ['BEST & NEW', 'FACIAL', 'BODY & HAIR'];
const menu_array = ['best', 'new', 'cleansing', 'toner', 'serum', 'emulsion', 'cream', 'men', 'baby', 'special_care', 'body_wash', 'body_lotion', 'hair', 'hand_care', 'secret_care', 'diffuser'];
const title_array = ['베스트셀러', '신제품', '클렌징', '워터/토너', '세럼/에센스', '에멀전', '크림', '맨', '베이비', '스페셜 케어', '바디워시', '바디로션', '헤어', '핸드케어', '시크릿 케어', '디퓨져'];



function get_url_info(key) {
    let url = location.href;

    url = url.split('?');

    if(url.length > 1) {
        url = url[1];
        url = url.split("&");

        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(key == tmp_url[0]) {
                return tmp_url[1];
            }
        }
        return null;
    }

    else {
        return null;
    }
};


// LNB 만들기
let tmp_array2 = [];
function make_kan() {

// console.log("tmp_array2: " + tmp_array2);

    /////////////////////////////////////////////
    // 1000 초과 - 5칸
    // 1000 이하 - 4칸
    let kan = 0;
    if($(window).innerWidth() <= 480) {
        kan = 2;
    }
    else if($(window).innerWidth() <= 600) {
        kan = 3;
    }
    else if($(window).innerWidth() <= 1000) {
        kan = 4;
    }
    else if($(window).innerWidth() > 1000) {
        kan = 5;
    }

    // console.log("tmp_array2: " + tmp_array2.length)

    let final_kan = Math.ceil(tmp_array2.length / kan) * kan;
    // console.log("final_kan: " + final_kan)



// console.log("ttt: " + title_array.indexOf("바디로션"));
    $('.product_title_list_ul').empty();
    for(let i=0; i<final_kan; i++) {

        let btn_name = tmp_array2[i]==undefined?'':tmp_array2[i];
        let link_num = title_array.indexOf(btn_name)


        let tmp_list = `
            <li class="product_title_list_li">
                <a href="product.html?cate_no=${link_num}">${btn_name}</a>
            </li>`;

        $('.product_title_list_ul').append(tmp_list);

    }

    //////////////////////////////////////////////
}

// product
function load_items(cate_no, qty) {
    if(get_url_info("cate_no") != null) {
        $('.contents_area').attr('id', menu_array[cate_no]);
        $('.product_sec_title').text(title_array[cate_no]);
    }


    tmp_array2 = [];
    if(cate_no <= 1) {
        $('.product_banner_title').text(product_title_array[0]);
        // $('.product_title_list_ul').append(product_title_tab[0]);
        for(let i=0; i<=1; i++) {
            tmp_array2.push(title_array[i]);
        }
        make_kan();
    }
    else if(2<= cate_no && cate_no < 10) {
        $('.product_banner_title').text(product_title_array[1])
        // $('.product_title_list_ul').append(product_title_tab[1]);
        for(let i=2; i<=9; i++) {
            tmp_array2.push(title_array[i]);
        }
        make_kan();
    }
    else if(cate_no < 16) {
        $('.product_banner_title').text(product_title_array[2])
        // $('.product_title_list_ul').append(product_title_tab[2]);
        for(let i=10; i<=15; i++) {
            tmp_array2.push(title_array[i]);
        }
        make_kan();
    }

 
    for(let i=0; i<qty; i++) {
        let product_item_list =  `
            <div class="product_item_box">
                <a href="item.html?cate_no=${cate_no}&item_no=${ITEM_LIST[cate_no][i].item_no}">
                    <div class="product_item_img">
                        <img src="img/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt="">
                        <div class="item_box_hover">
                            <div class="sale_percent_box">${ITEM_LIST[cate_no][i].s_percent}</div>
                            <div class="like">
                                <div class="icon_heart"></div>
                                <span>10</span>
                            </div>
                        </div>
                    </div>
                    <div class="product_item_info_box">
                        <div class="item_name">${ITEM_LIST[cate_no][i].title}</div>
                        
                        <div class="price_box">
                            <span class="o_price">${ITEM_LIST[cate_no][i].o_price.toLocaleString()}원</span>
                            <span class="s_price">${ITEM_LIST[cate_no][i].s_price.toLocaleString()}원</span>
                        </div>
                        <div class="item_desc">${ITEM_LIST[cate_no][i].desc}</div>
                    </div>
                </a>
            </div>
         `;

         $(`#${menu_array[cate_no]} .product_item_area`).append(product_item_list);
    }
}


//item
function load_item_detail(cate_no, item_no) {
    let item_detail_img = `
        <img src="img/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][item_no].src}" alt="">
        <div class="magnifier"></div>
    `;

    let item_detail_info = `
        <div class="item_title">${ITEM_LIST[cate_no][item_no].title}</div>
        <div class="item_desc">${ITEM_LIST[cate_no][item_no].desc}</div>
        <div class="item_line"></div>
        <table>
            <tr class="item_o_price">
                <td>소비자가</td>
                <td>${ITEM_LIST[cate_no][item_no].o_price.toLocaleString()}원</td>
            </tr>
            <tr class="item_s_price">
                <td>판매가</td>
                <td>${ITEM_LIST[cate_no][item_no].s_price.toLocaleString()}원</td>
            </tr>
            <tr class="delivery_price">
                <td>배송비</td>
                <td>2,500원</td>
            </tr>
        </table>
    `;

    

    $('.item_img_box').append(item_detail_img);
    $('.item_info_top_R').prepend(item_detail_info);

    $('.magnifier').css({
        background: '#fff url(img/items/' + menu_array[cate_no] + '/' + ITEM_LIST[cate_no][item_no].src +')'
    })
    


    $('.selected_item_title').text(ITEM_LIST[cate_no][item_no].title)
}