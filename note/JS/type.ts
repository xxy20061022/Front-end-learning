type Status = number | string;

function printStatus(data: Status): void {
  console.log(data);
}

printStatus(404);
printStatus('404');

type Status1 = number | string;
type Gender = '男' | '女';

function printStatus1(status: Status) {
  console.log(status);
}

function logGender(str: Gender) {
  console.log(str);
}

// 面积
type Area = {
    height: number; // 高
    width: number;  // 宽
  };
  
  // 地址
  type Address = {
    num: number;  // 楼号
    cell: number; // 单元号
    room: string; // 房间号
  };
  
  type House = Area & Address;
  
  const house: House = {
    height: 100, // 高
    width: 100,  // 宽
    num: 3,      // 楼号
    cell: 4,     // 单元号
    room: '702'  // 房间号
  };
  