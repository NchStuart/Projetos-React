"use client";

import {useState} from 'react';
import {TodoItem} from '@/Types/TodoItem';

export default function Home() {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    {id: 1, label: 'Estudar React', checked: false},
    {id: 2, label: 'Estudar Next.js', checked: false},
    {id: 3, label: 'Estudar TypeScript', checked: false},
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;

    setList([...list, {id: list.length + 1, label: itemInput, checked: false}]);
    setItemInput('');
   }

   const deleteItem = (id: number) => { 
    setList(list.filter((item) => item.id !== id));
   }
   
   const toggleItem = (id: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
   }


  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input type="text" placeholder='O que deseja fazer?' value={itemInput} onChange={e => setItemInput(e.target.value)}/>
      <button onClick={handleAddButton} >Adicionar</button>

      <span>{list.length} {list.length === 1 ? 'item' : 'itens'} na lista</span>

      <ul className='w-full max-w-lg list-disc pl-5'>
        {list.map((item) => (
          <li key={item.id}>
            <input type="checkbox" className='w-6 h-6 mr-3' checked={item.checked} onClick={() => toggleItem(item.id)}/>
            <span>{item.label}</span> - <button className='hover:underline' onClick={() => deleteItem(item.id)}>[ deletar ]</button>
          </li>
        ))}
      </ul>


    </div>
  );
}
