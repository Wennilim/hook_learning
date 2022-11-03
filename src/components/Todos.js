import React, { memo } from 'react'
import { Text, Button } from '@chakra-ui/react'

const Todos = memo(({todos, addTodo}) => {
  return (
    <> 
    <Text>Minion Shopping List</Text>
    {todos.map((todo,index)=>{
        return<Text key={index}>{todo}</Text>
    })}
   <Button onClick={addTodo}>Add Todo</Button>

   </>
  );
   
});

export default Todos