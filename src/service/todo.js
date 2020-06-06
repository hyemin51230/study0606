const BASE_URL = 'http://localhost:8000/todo'
/**
 * todoes 목록을 가져온다.
 */
export async function fetchTodos() {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    return [] //실패하면 빈 배열을 리턴
  }
  return response.json()//성공하면 todo목록을 리턴
}

/**
 * 새로운 todo를 저장
 */
export async function postTodo(payload){
    const response = await fetch(BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(payload),
    })
    return response.ok
}

/**
 * 상태 update
 */

 export async function updateTodo(payload){
    const response = await fetch(`${BASE_URL}/${payload.id}`,{
         method:'PUT'
         headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(payload),
     })
     return response.ok
 }

 export async function deleteTodo(id){
     const response = await fetch(`${BASE_URL}/${id}`,{
        method:'DELETE'
        headers:{
           'Content-Type':'application/json',
       },
      
    })
    return response.ok
}


