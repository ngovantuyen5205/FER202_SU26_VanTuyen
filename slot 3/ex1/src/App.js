//tạo hello.jsx để hiển thị hello,react
import logo from './logo.svg';
import './App.css';
import ListPerson from './component/ListPerson' ;
function App() {
  return (
    <div>
      <p style={{ display: 'block', textAlign: 'center', width: '100%', margin: '20px 0' }}></p>
    <p>Hello, <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span>!</p>
    
    
    <ListPerson />
    </div>
  );
}

export default App;
