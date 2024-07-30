// 项目的根组件
// App -> index.js -> pubilc/index.html(root)

let isShow = true 
function App() {
  return (
    <div className="App">
      {/* 基础的条件渲染 */}
      {/* 逻辑与 && */}
      {isShow && <div>元素显示</div>}
      {/* 三元运算 */}
      { isShow ? <span>bashlam</span> : <span>loading...</span> }
    </div>
  );
}


export default App;
