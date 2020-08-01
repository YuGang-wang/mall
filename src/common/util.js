
/**
 * 防抖
 * func [function] 要执行的函数
 * delay [number] 毫秒数
 */
export function debounce(func, delay){
  let timer = null;
  return function(...args) {
    if(timer)
      clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args)
    }, delay)
  }
}