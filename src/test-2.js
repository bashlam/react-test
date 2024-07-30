// 项目的根组件
// App -> index.js -> pubilc/index.html(root)

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' },

]
function App() {
  return (
    <div className="App">
      this is App
      {/* 渲染列表 */}
      {/* map循环哪个结构 return结构 */}
      {/* 注意事项:加上独一无二的key string/number */}
      {/* key的作用：React框架内部使用 提升更新性能 */}
      <ul>
        {
          list.map(item =>
            <li key={item.id}>{item.name}</li>
          )
        }
      </ul>


    </div>
  );
}


export default App;
