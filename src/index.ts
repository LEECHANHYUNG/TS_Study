// unknown
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  // uknown() 값으로 무엇을 하든 not legal -> any 보다 안전하다.
  a.b();
}
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse('a');

// boolean
let e: true = true; //평범한 boolean이 아니라 boolean true라는 특정 타입

// number
const c = 5678;
let d = a < b;
let e: number = 100;
let f: 26.218 = 26.218;
let g: 26.218 = 10;
