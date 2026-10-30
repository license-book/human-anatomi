export type Organ={id:string;name:string;region:string;location:string;role:string;symbol:string};
export const regions=["전체","머리","가슴","복부","등·허리","팔·다리"];
export const organs:Organ[]=[
{id:"brain",name:"뇌",region:"머리",location:"머리뼈 안쪽",role:"생각하고 기억하며 몸의 여러 활동을 조절합니다.",symbol:"🧠"},
{id:"eye",name:"눈",region:"머리",location:"얼굴 위쪽 양옆",role:"빛을 받아 주변 사물을 볼 수 있게 합니다.",symbol:"👁️"},
{id:"ear",name:"귀",region:"머리",location:"머리 양옆",role:"소리를 듣고 몸의 균형을 잡는 데 도움을 줍니다.",symbol:"👂"},
{id:"heart",name:"심장",region:"가슴",location:"가슴 중앙에서 약간 왼쪽",role:"혈액을 온몸으로 보내는 펌프 역할을 합니다.",symbol:"❤️"},
{id:"lung",name:"폐",region:"가슴",location:"가슴 양쪽",role:"숨을 쉴 때 산소를 받아들이고 이산화탄소를 내보냅니다.",symbol:"🫁"},
{id:"liver",name:"간",region:"복부",location:"배의 오른쪽 위",role:"영양분을 처리하고 몸에 필요한 여러 물질을 만듭니다.",symbol:"🟤"},
{id:"stomach",name:"위",region:"복부",location:"배의 위쪽, 주로 왼쪽",role:"먹은 음식을 저장하고 소화액과 섞습니다.",symbol:"🥣"},
{id:"intestine",name:"장",region:"복부",location:"배의 가운데와 아래쪽",role:"음식에서 영양분과 물을 흡수하고 남은 것을 배출합니다.",symbol:"〰️"},
{id:"spine",name:"척추",region:"등·허리",location:"목에서 허리까지 등 가운데",role:"몸을 지탱하고 척수를 보호합니다.",symbol:"🦴"},
{id:"muscle",name:"근육",region:"팔·다리",location:"팔과 다리 등 온몸",role:"몸을 움직이고 자세를 유지하도록 돕습니다.",symbol:"💪"}
];