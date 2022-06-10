function firstFunc1 (arg1: string) {

  return function secondFunc1 (arg2: number): [string, number] {
    return [arg1, arg2]
  } 
}

const result1 = firstFunc1("mark")(10)


function firstFunc2<T> (arg1: T) {
  
  return function secondFunc2<U>(arg2: U): [T, U] {
    return [arg1, arg2]
  }
}

const result2 = firstFunc2(23)("magicKeyboard")


const firstFunc3 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2]
} 

const result3 = firstFunc3(10)("gggg")

const withAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props]
} 

const result4 = withAuth("BBB")({aaa: "johny"})



export {}