// 函数防抖
function debounce(foo, wait){
  let timer = null;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      foo.apply(this, arguments);
    }, wait)
  }
}

// 函数节流
function throttle(foo, wait){
  let timer = null;
  return function(){
    if(!timer){
      timer = setTimeout(() => {
        foo.apply(this, arguments);
        timer = null;
      }, wait)
    }
  }
}