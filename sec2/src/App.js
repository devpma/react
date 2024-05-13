import { useState } from 'react';
import './App.css';
import ShoppingList from './component/ShoppingList';
import ShoppingForm from './component/ShoppingForm';


function App() {
  // 더미 배열 생성
  const [list, setList] = useState([
    {id:1, charge: '꽃', count: 3},
    {id:2, charge: '사탕', count: 1},
    {id:3, charge: '귤', count:6}
  ]);

  const [charge, setCharge] = useState("");
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')

  // 이름 변경 함수  
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  // 수량 변경 함수
  const handleCount = (e) => {
    setCount(e.target.valueAsNumber);
  }

  // 수정 버튼 클릭시 함수
  const handleEdit = id => {
    const editItem = list.find(item => item.id === id)
    const { charge, count } = editItem;
    setCharge(charge);
    setCount(count);
    setId(id);
    setEdit(true);
  }

  // 제출 클릭시 함수
  const handleListUpdate = (e) => {
    e.preventDefault();

    if (charge !=="" && count > 0) {

      if (edit) {
        const editList = list.map(item => {
          return item.id === id ? { ...item, charge, count } : item;
        })
        setList(editList);
        setEdit(false);
    } else {
      const newList = { id: crypto.randomUUID(), charge, count }
      const newLists = [...list, newList]
      setList(newLists);
    }
    setCharge('');
    setCount(0)
  } else {
    alert( "charge는 빈 값일 수 없으며 amount 값은 0보다 커야 합니다." )

  }}

  
  // 삭제 버튼 클릭시 함수
  const handleDelete = (id) => {
    const deleteList = list.filter(item => item.id !== id)
    setList(deleteList)
  }

  return (
    <div className="App">
      <h1>장바구니</h1>
      <ShoppingForm charge={charge} count={count} handleCharge={handleCharge} handleCount={handleCount} handleListUpdate={handleListUpdate}/>
      <ShoppingList list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
